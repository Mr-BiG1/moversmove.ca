import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { rateLimit } from '@/lib/rate-limit'
import { sendEmail } from '@/lib/email'
import { contactSchema } from '@/lib/schemas'
import { verifyTurnstile } from '@/lib/turnstile'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const identifier = request.ip ?? '127.0.0.1'
    const rateLimitResult = await rateLimit(identifier)
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: rateLimitResult.error || 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    
    const validationResult = contactSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const { name, email, address, inquiry, turnstileToken, pageSource } = validationResult.data

    // Verify Turnstile token
    const turnstileResult = await verifyTurnstile(turnstileToken)
    if (!turnstileResult.success) {
      console.error('Turnstile verification failed:', turnstileResult.error)
      return NextResponse.json(
        { error: 'Security verification failed. Please try again.' },
        { status: 400 }
      )
    }

    // Prepare email content
    const subject = `New Contact Form Submission from ${name}`
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0A5DB5;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${inquiry.replace(/\n/g, '<br>')}
        </div>
        <p><strong>Page Source:</strong> ${pageSource || 'Unknown'}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })}</p>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">
          This message was sent from the contact form on moversmove.ca
        </p>
      </div>
    `
    const textContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Address: ${address}
Message: ${inquiry}
Page Source: ${pageSource || 'Unknown'}
Submitted: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })}

This message was sent from the contact form on moversmove.ca
    `

    // Send email
    const emailResult = await sendEmail(
      process.env.EMAIL_TO || 'mail@moversmove.ca',
      subject,
      htmlContent,
      textContent
    )

    if (!emailResult.success) {
      console.error('Failed to send contact form email:', emailResult.error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      )
    }

    // Log successful submission
    console.log(`Contact form submitted successfully from ${email} via ${pageSource}`)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form API error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
