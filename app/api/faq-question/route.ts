import { NextRequest, NextResponse } from 'next/server'
import { faqQuestionSchema } from '@/lib/schemas'
import { sendEmail, verifyTurnstileToken } from '@/lib/email'
import { rateLimit, getClientIP } from '@/lib/rate-limit'
import { generateId } from '@/lib/utils'

export async function POST(request: NextRequest) {
  const requestId = generateId()
  const clientIP = getClientIP(request)
  
  console.log(`[${requestId}] FAQ question request from IP: ${clientIP}`)

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
      question: formData.get('question') as string,
      turnstileToken: formData.get('turnstileToken') as string,
    }

    const pageSource = formData.get('pageSource') as string || '/faqs'

    // Validate form data
    const validationResult = faqQuestionSchema.safeParse(data)
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
    const subject = `New FAQ Question from ${data.name}`
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0A5DB5;">New FAQ Question</h2>
        <p><strong>From:</strong> ${data.name} (${data.email})</p>
        <p><strong>Question:</strong></p>
        <div style="background:#f5f5f5;padding:15px;border-radius:6px;margin:10px 0;">
          ${(data.question || '').replace(/\n/g, '<br>')}
        </div>
        <p><strong>Page Source:</strong> ${pageSource}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })}</p>
      </div>
    `
    const text = `
New FAQ Question

From: ${data.name} (${data.email})
Question: ${data.question}
Page Source: ${pageSource}
Submitted: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })}
    `

    // Send email
    const emailResult = await sendEmail(
      process.env.EMAIL_TO || 'info@moversmove.ca',
      subject,
      html,
      text
    )

    if (!emailResult.success) {
      console.error(`[${requestId}] Email sending failed:`, emailResult.error)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to send question. Please try again later.' 
        },
        { status: 500 }
      )
    }

    // Log successful submission
    console.log(`[${requestId}] FAQ question submitted successfully for ${data.email}`)

    return NextResponse.json({
      success: true,
      message: 'Question sent successfully. We will get back to you within 2 hours.',
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
