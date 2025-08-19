import { NextRequest, NextResponse } from 'next/server'
import { rateLimit } from '@/lib/rate-limit'
import { sendEmail } from '@/lib/email'
import { faqQuestionSchema } from '@/lib/schemas'
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
    
    const validationResult = faqQuestionSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const { name, email, question, turnstileToken, pageSource } = validationResult.data

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
    const subject = `New FAQ Question from ${name}`
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0A5DB5;">New FAQ Question</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Question:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${question.replace(/\n/g, '<br>')}
        </div>
        <p><strong>Page Source:</strong> ${pageSource || 'Unknown'}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })}</p>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">
          This question was submitted from the FAQ page on moversmove.ca
        </p>
      </div>
    `
    const textContent = `
New FAQ Question

From: ${name} (${email})
Question: ${question}
Page Source: ${pageSource || 'Unknown'}
Submitted: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })}

This question was submitted from the FAQ page on moversmove.ca
    `

    // Send email
    const emailResult = await sendEmail(
      process.env.EMAIL_TO || 'info@moversmove.ca',
      subject,
      htmlContent,
      textContent
    )

    if (!emailResult.success) {
      console.error('Failed to send FAQ question email:', emailResult.error)
      return NextResponse.json(
        { error: 'Failed to send question. Please try again later.' },
        { status: 500 }
      )
    }

    // Log successful submission
    console.log(`FAQ question submitted successfully from ${email} via ${pageSource}`)

    return NextResponse.json(
      { message: 'Question sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('FAQ question API error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
