import { NextRequest, NextResponse } from 'next/server'
import { quoteSchema, contactSchema, faqQuestionSchema } from '@/lib/schemas'
import { sendEmail, createQuoteEmail, createContactEmail, createFaqEmail, verifyTurnstileToken } from '@/lib/email'
import { rateLimit, getClientIP } from '@/lib/rate-limit'
import { generateId } from '@/lib/utils'

export async function POST(request: NextRequest) {
  const requestId = generateId()
  const clientIP = getClientIP(request)
  
  console.log(`[${requestId}] Email request from IP: ${clientIP}`)

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
    const formType = formData.get('formType') as string
    const turnstileToken = formData.get('turnstileToken') as string
    const pageSource = formData.get('pageSource') as string || '/'

    // Verify Turnstile token
    if (!turnstileToken) {
      console.log(`[${requestId}] Missing Turnstile token`)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Security check failed. Please try again.' 
        },
        { status: 400 }
      )
    }

    const turnstileValid = await verifyTurnstileToken(turnstileToken)
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

    // Handle different form types
    switch (formType) {
      case 'quote':
        return await handleQuoteForm(formData, pageSource, requestId)
      
      case 'contact':
        return await handleContactForm(formData, pageSource, requestId)
      
      case 'faq':
        return await handleFaqForm(formData, pageSource, requestId)
      
      default:
        console.log(`[${requestId}] Unknown form type: ${formType}`)
        return NextResponse.json(
          { 
            success: false, 
            error: 'Invalid form type' 
          },
          { status: 400 }
        )
    }

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

async function handleQuoteForm(formData: FormData, pageSource: string, requestId: string) {
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    pickupAddress: formData.get('pickupAddress') as string,
    dropOffAddress: formData.get('dropOffAddress') as string,
    description: formData.get('description') as string,
    preferredDate: formData.get('preferredDate') as string,
    serviceType: formData.get('serviceType') as string,
  }

  // Validate form data
  const validationResult = quoteSchema.safeParse(data)
  if (!validationResult.success) {
    console.log(`[${requestId}] Quote validation failed:`, validationResult.error.errors)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Invalid form data. Please check your inputs and try again.' 
      },
      { status: 400 }
    )
  }

  // Create email content
  const emailData = {
    ...data,
    pageSource,
  }

  const { html, text } = createQuoteEmail(emailData)

  // Send email
  const emailResult = await sendEmail(
    process.env.EMAIL_TO || 'info@moversmove.ca',
    `New Quote Request - ${data.serviceType}`,
    html,
    text
  )

  if (!emailResult.success) {
    console.error(`[${requestId}] Quote email sending failed:`, emailResult.error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send quote request. Please try again later.' 
      },
      { status: 500 }
    )
  }

  console.log(`[${requestId}] Quote request submitted successfully for ${data.email}`)

  return NextResponse.json({
    success: true,
    message: 'Quote request submitted successfully. We will get back to you within 24 hours.',
    requestId,
  })
}

async function handleContactForm(formData: FormData, pageSource: string, requestId: string) {
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    address: formData.get('address') as string,
    inquiry: formData.get('inquiry') as string,
  }

  // Validate form data
  const validationResult = contactSchema.safeParse(data)
  if (!validationResult.success) {
    console.log(`[${requestId}] Contact validation failed:`, validationResult.error.errors)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Invalid form data. Please check your inputs and try again.' 
      },
      { status: 400 }
    )
  }

  // Create email content
  const emailData = {
    ...data,
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
    console.error(`[${requestId}] Contact email sending failed:`, emailResult.error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send message. Please try again later.' 
      },
      { status: 500 }
    )
  }

  console.log(`[${requestId}] Contact form submitted successfully for ${data.email}`)

  return NextResponse.json({
    success: true,
    message: 'Message sent successfully. We will get back to you within 24 hours.',
    requestId,
  })
}

async function handleFaqForm(formData: FormData, pageSource: string, requestId: string) {
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    question: formData.get('question') as string,
  }

  // Validate form data
  const validationResult = faqQuestionSchema.safeParse(data)
  if (!validationResult.success) {
    console.log(`[${requestId}] FAQ validation failed:`, validationResult.error.errors)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Invalid form data. Please check your inputs and try again.' 
      },
      { status: 400 }
    )
  }

  // Create email content
  const emailData = {
    ...data,
    pageSource,
  }

  const { html, text } = createFaqEmail(emailData)

  // Send email
  const emailResult = await sendEmail(
    process.env.EMAIL_TO || 'info@moversmove.ca',
    `New FAQ Question from ${data.name}`,
    html,
    text
  )

  if (!emailResult.success) {
    console.error(`[${requestId}] FAQ email sending failed:`, emailResult.error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send question. Please try again later.' 
      },
      { status: 500 }
    )
  }

  console.log(`[${requestId}] FAQ question submitted successfully for ${data.email}`)

  return NextResponse.json({
    success: true,
    message: 'Question sent successfully. We will get back to you within 2 hours.',
    requestId,
  })
}
