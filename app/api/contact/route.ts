import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/schemas'
import { sendEmail, createContactEmail, verifyTurnstileToken } from '@/lib/email'
import { rateLimit, getClientIP } from '@/lib/rate-limit'
import { generateId } from '@/lib/utils'

export async function POST(request: NextRequest) {
  const requestId = generateId()
  const clientIP = getClientIP(request)
  
  console.log(`[${requestId}] Contact request from IP: ${clientIP}`)

  try {
    // Rate limiting
    const rateLimitResult = await rateLimit(clientIP)
    if (!rateLimitResult.success) {
      console.log(`[${requestId}] Rate limit exceeded for IP: ${clientIP}`)
      return NextResponse.json(
        { 
          success: false, 
          error: rateLimitResult.error || 'Too many requests. Please try again later.' 
        },
        { status: 429 }
      )
    }

    // Parse form data
    const formData = await request.formData()
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      address: formData.get('address') as string,
      inquiry: formData.get('inquiry') as string,
      turnstileToken: formData.get('turnstileToken') as string,
    }

    const pageSource = formData.get('pageSource') as string || '/contact'

    // Validate form data
    const validationResult = contactSchema.safeParse(data)
    if (!validationResult.success) {
      console.log(`[${requestId}] Validation failed:`, validationResult.error.errors)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid form data. Please check your inputs and try again.' 
        },
        { status: 400 }
      )
    }

    // Verify Turnstile token
    if (!data.turnstileToken) {
      console.log(`[${requestId}] Missing Turnstile token`)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Security check failed. Please try again.' 
        },
        { status: 400 }
      )
    }

    const turnstileValid = await verifyTurnstileToken(data.turnstileToken)
    if (!turnstileValid) {
      console.log(`[${requestId}] Invalid Turnstile token`)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Security check failed. Please try again.' 
        },
        { status: 400 }
      )
    }

    // Create email content
    const emailData = {
      name: data.name,
      email: data.email,
      address: data.address,
      inquiry: data.inquiry,
      pageSource,
    }

    const { html, text } = createContactEmail(emailData)

    // Send email
    const emailResult = await sendEmail(
      process.env.EMAIL_TO || 'info@moversmove.ca',
      'New Contact Form Submission',
      html,
      text
    )

    if (!emailResult.success) {
      console.error(`[${requestId}] Email sending failed:`, emailResult.error)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to send message. Please try again later.' 
        },
        { status: 500 }
      )
    }

    // Log successful submission
    console.log(`[${requestId}] Contact form submitted successfully for ${data.email}`)

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully. We will get back to you within 24 hours.',
      requestId,
    })

  } catch (error) {
    console.error(`[${requestId}] Unexpected error:`, error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred. Please try again later.' 
      },
      { status: 500 }
    )
  }
}
