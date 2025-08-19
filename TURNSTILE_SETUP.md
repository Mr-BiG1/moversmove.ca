# Cloudflare Turnstile Setup Guide

## Overview
This website uses Cloudflare Turnstile for bot protection on all forms. Turnstile is a privacy-first, free alternative to CAPTCHA that provides robust protection against bots and spam.

## Setup Steps

### 1. Get Turnstile Keys
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/?to=/:account/turnstile)
2. Click on "Turnstile" in the left sidebar
3. Click "Add site"
4. Choose a domain (can be any domain you own)
5. Select "Managed" challenge type
6. Click "Create"
7. Copy both the **Site Key** and **Secret Key**

### 2. Configure Environment Variables
Add these to your `.env.local` file:

```bash
# Cloudflare Turnstile
TURNSTILE_SITE_KEY=your_site_key_here
TURNSTILE_SECRET_KEY=your_secret_key_here
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key_here
```

**Important Notes:**
- `TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` are used server-side
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is used client-side (must be public)
- The site key and secret key are different values

### 3. Test the Integration
1. Start your development server: `npm run dev`
2. Navigate to any form page (e.g., `/contact`, `/quote`, `/faqs`)
3. You should see the Turnstile widget
4. Complete the challenge and submit the form

## Development Mode
In development mode, if Turnstile is not configured:
- Forms will show a warning message
- A "Dev Mode: Bypass Security Check" button will appear
- Clicking this button will bypass the security check for testing

## Production Deployment
1. Ensure all environment variables are set in your production environment
2. Turnstile will automatically work in production
3. No bypass options will be available
4. All form submissions will require valid Turnstile verification

## Troubleshooting

### Common Issues

**"Turnstile is not configured"**
- Check that `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set
- Restart your development server after adding environment variables

**"Security verification failed"**
- Check that `TURNSTILE_SECRET_KEY` is set correctly
- Verify the secret key matches your site key
- Check server logs for detailed error messages

**Widget not loading**
- Ensure `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is correct
- Check browser console for JavaScript errors
- Verify your domain is added to Turnstile in Cloudflare

**"Private Access Token challenge" errors**
- This usually means Turnstile is working but there's a configuration issue
- Check that both site key and secret key are correct
- Ensure your domain is properly configured in Cloudflare Turnstile
- Try clearing browser cache and cookies

**Preload warnings in console**
- These are normal Cloudflare challenge warnings and can be ignored
- They don't affect functionality

### Testing Without Turnstile
For development/testing without Turnstile:
1. Set a dummy value for `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
2. Use the "Dev Mode: Bypass Security Check" button
3. The server will accept the bypass token in development mode

## Security Features
- **Rate Limiting**: 5 requests per 10 minutes per IP
- **Token Validation**: All tokens are verified server-side
- **Expiration Handling**: Expired tokens are automatically rejected
- **Error Logging**: Detailed error logging for debugging

## Form Protection
Turnstile protects these forms:
- Contact Form (`/contact`)
- Quote Request Form (`/quote`)
- FAQ Question Form (`/faqs`)

Each form submission requires:
1. Valid Turnstile token
2. Rate limit compliance
3. Proper form validation
4. Server-side verification

## Support
If you encounter issues:
1. Check the browser console for client-side errors
2. Check server logs for server-side errors
3. Verify your Turnstile configuration in Cloudflare
4. Ensure all environment variables are set correctly
5. Try the development bypass mode for testing
