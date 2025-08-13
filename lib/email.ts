import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const purify = DOMPurify(window as any);

// Email configuration
const emailConfig = {
  smtp: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  },
  from: process.env.SMTP_FROM || 'Movers Move <no-reply@moversmove.ca>',
  to: process.env.EMAIL_TO || 'mail@moversmove.ca',
  resendApiKey: process.env.RESEND_API_KEY,
};

// Initialize email clients
let transporter: nodemailer.Transporter | null = null;
let resend: Resend | null = null;

if (emailConfig.smtp.host && emailConfig.smtp.auth.user) {
  transporter = nodemailer.createTransport(emailConfig.smtp);
}

if (emailConfig.resendApiKey) {
  resend = new Resend(emailConfig.resendApiKey);
}

// Email templates
const createEmailTemplate = (subject: string, content: string) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${subject}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #0A5DB5 0%, #FF7A00 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
        .highlight { background: #e3f2fd; padding: 15px; border-left: 4px solid #0A5DB5; margin: 15px 0; }
        .button { display: inline-block; background: #FF7A00; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Movers Move</h1>
        <p>Professional Canadian Logistics & Moving Services</p>
      </div>
      <div class="content">
        ${content}
      </div>
      <div class="footer">
        <p>© 2024 Movers Move. All rights reserved.</p>
        <p>123 Moving Way, Toronto, ON M5V 2H1 | <a href="mailto:mail@moversmove.ca">mail@moversmove.ca</a></p>
      </div>
    </body>
    </html>
  `;

  const text = content.replace(/<[^>]*>/g, '');

  return { html, text };
};

// Quote form email template
export const createQuoteEmail = (data: {
  name: string;
  email: string;
  phone?: string;
  pickupAddress: string;
  dropOffAddress?: string;
  description: string;
  preferredDate?: string;
  serviceType: string;
  pageSource: string;
}) => {
  const subject = `New Quote Request - ${data.serviceType}`;
  const content = `
    <h2>New Quote Request</h2>
    <div class="highlight">
      <strong>Service Type:</strong> ${data.serviceType}<br>
      <strong>From:</strong> ${data.name} (${data.email})<br>
      ${data.phone ? `<strong>Phone:</strong> ${data.phone}<br>` : ''}
    </div>
    
    <h3>Move Details</h3>
    <p><strong>Pickup Address:</strong> ${data.pickupAddress}</p>
    ${data.dropOffAddress ? `<p><strong>Drop-off Address:</strong> ${data.dropOffAddress}</p>` : ''}
    ${data.preferredDate ? `<p><strong>Preferred Date:</strong> ${data.preferredDate}</p>` : ''}
    
    <h3>Description</h3>
    <p>${data.description}</p>
    
    <div class="highlight">
      <strong>Page Source:</strong> ${data.pageSource}
    </div>
    
    <p><a href="mailto:${data.email}" class="button">Reply to Customer</a></p>
  `;

  return createEmailTemplate(subject, content);
};

// Contact form email template
export const createContactEmail = (data: {
  name: string;
  email: string;
  address: string;
  inquiry: string;
}) => {
  const subject = 'New Contact Form Submission';
  const content = `
    <h2>New Contact Form Submission</h2>
    <div class="highlight">
      <strong>From:</strong> ${data.name} (${data.email})
    </div>
    
    <h3>Contact Information</h3>
    <p><strong>Address:</strong> ${data.address}</p>
    
    <h3>Inquiry</h3>
    <p>${data.inquiry}</p>
    
    <p><a href="mailto:${data.email}" class="button">Reply to Customer</a></p>
  `;

  return createEmailTemplate(subject, content);
};

// FAQ question email template
export const createFaqEmail = (data: {
  name: string;
  email: string;
  question: string;
}) => {
  const subject = 'FAQ Question from Website';
  const content = `
    <h2>FAQ Question</h2>
    <div class="highlight">
      <strong>From:</strong> ${data.name} (${data.email})
    </div>
    
    <h3>Question</h3>
    <p>${data.question}</p>
    
    <p><a href="mailto:${data.email}" class="button">Reply to Customer</a></p>
  `;

  return createEmailTemplate(subject, content);
};

// Send email function
export const sendEmail = async (
  to: string,
  subject: string,
  html: string,
  text: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    // Sanitize HTML content
    const sanitizedHtml = purify.sanitize(html);
    
    // Try Resend first if available
    if (resend) {
      const result = await resend.emails.send({
        from: emailConfig.from,
        to: [to],
        subject,
        html: sanitizedHtml,
        text,
      });
      
      if (result.error) {
        throw new Error(result.error.message);
      }
      
      return { success: true };
    }
    
    // Fallback to SMTP
    if (transporter) {
      await transporter.sendMail({
        from: emailConfig.from,
        to,
        subject,
        html: sanitizedHtml,
        text,
      });
      
      return { success: true };
    }
    
    // Development fallback - log to console
    if (process.env.NODE_ENV === 'development') {
      console.log('=== EMAIL SENT (DEV MODE) ===');
      console.log('To:', to);
      console.log('Subject:', subject);
      console.log('Text:', text);
      console.log('============================');
      return { success: true };
    }
    
    throw new Error('No email service configured');
  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};

// Verify Turnstile token
export const verifyTurnstileToken = async (token: string): Promise<boolean> => {
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification failed:', error);
    return false;
  }
};
