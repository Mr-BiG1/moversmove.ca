import { NextRequest, NextResponse } from 'next/server'
import { rateLimit } from '@/lib/rate-limit'
import { verifyTurnstile } from '@/lib/turnstile'
import { sendEmail } from '@/lib/email'
import { faqQuestionSchema } from '@/lib/schemas'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    // 1) Rate limit
    const id = req.ip ?? '127.0.0.1'
    const rl = await rateLimit(id)
    if (!rl.success) {
      return NextResponse.json(
        { error: rl.error || 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // 2) Parse and validate request body
    const body = await req.json()
    
    const validationResult = faqQuestionSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const { name, email, question, turnstileToken, pageSource } = validationResult.data

    // 3) Verify Turnstile token
    const turnstileResult = await verifyTurnstile(turnstileToken)
    if (!turnstileResult.success) {
      console.error('Turnstile verification failed:', turnstileResult.error)
      return NextResponse.json(
        { error: 'Security verification failed. Please try again.' },
        { status: 400 }
      )
    }

    // 4) Compose email
    const subject = `New FAQ Question from ${name}`
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0A5DB5;">New FAQ Question</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Question:</strong></p>
        <div style="background:#f5f5f5;padding:15px;border-radius:6px;margin:10px 0;">
          ${(question || '').replace(/\n/g, '<br>')}
        </div>
        <p><strong>Page Source:</strong> ${pageSource || 'Unknown'}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })}</p>
      </div>
    `
    const text = `
New FAQ Question

From: ${name} (${email})
Question: ${question}
Page Source: ${pageSource || 'Unknown'}
Submitted: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })}
    `

    // 5) Send email
    const result = await sendEmail(
      process.env.EMAIL_TO || 'info@moversmove.ca',
      subject,
      html,
      text
    )
    
    if (!result.success) {
      console.error('FAQ email send failed:', result.error)
      return NextResponse.json({ error: 'Failed to send question. Please try again later.' }, { status: 500 })
    }

    // Log successful submission
    console.log(`FAQ question submitted successfully from ${email} via ${pageSource}`)

    return NextResponse.json({ message: 'Question sent successfully' })
  } catch (err) {
    console.error('FAQ API error:', err)
    return NextResponse.json({ error: 'Internal server error. Please try again later.' }, { status: 500 })
  }
}
