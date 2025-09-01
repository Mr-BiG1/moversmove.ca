# 🔧 Environment Setup Guide - MoversMove.ca

## 📋 **REQUIRED ENVIRONMENT VARIABLES**

### **1. Site Configuration**
```bash
SITE_URL=https://moversmove.ca
NODE_ENV=production
```

### **2. Email Configuration (Choose ONE option)**

#### **Option A: SMTP (Recommended)**
```bash
SMTP_HOST=your-smtp-host.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
SMTP_FROM="Movers Move <no-reply@moversmove.ca>"
EMAIL_TO=info@moversmove.ca
```

#### **Option B: Resend (Alternative)**
```bash
RESEND_API_KEY=your-resend-api-key
EMAIL_TO=info@moversmove.ca
```

### **3. Security - Cloudflare Turnstile (REQUIRED)**
```bash
# Get these from https://dash.cloudflare.com/?to=/:account/turnstile
TURNSTILE_SITE_KEY=your_turnstile_site_key_here
TURNSTILE_SECRET_KEY=your_turnstile_secret_key_here
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key_here
```

### **4. Rate Limiting - Upstash Redis (RECOMMENDED)**
```bash
# Get these from https://upstash.com/
UPSTASH_REDIS_REST_URL=your-redis-url
UPSTASH_REDIS_REST_TOKEN=your-redis-token
```

### **5. Analytics (OPTIONAL)**
```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Google Search Console Verification
GOOGLE_VERIFICATION_CODE=your-google-verification-code
```

## 🚀 **SETUP INSTRUCTIONS**

### **Step 1: Create Environment File**
```bash
cp env.example .env.local
```

### **Step 2: Configure Email Service**
1. **For SMTP**: Set up with your email provider (Gmail, SendGrid, etc.)
2. **For Resend**: Sign up at https://resend.com and get API key

### **Step 3: Set Up Cloudflare Turnstile**
1. Go to https://dash.cloudflare.com/?to=/:account/turnstile
2. Create a new site
3. Copy the site key and secret key
4. Add to your environment variables

### **Step 4: Set Up Rate Limiting (Optional but Recommended)**
1. Sign up at https://upstash.com/
2. Create a Redis database
3. Copy the REST URL and token
4. Add to your environment variables

### **Step 5: Add Google Verification**
1. Go to Google Search Console
2. Add your property
3. Copy the verification code
4. Add to your environment variables

## 🔒 **SECURITY CHECKLIST**

- [ ] All API keys are secure and not committed to git
- [ ] Turnstile is properly configured
- [ ] Rate limiting is enabled
- [ ] Email service is working
- [ ] Google verification is added

## 🧪 **TESTING YOUR SETUP**

### **Test Email Configuration**
```bash
npm run dev
# Then submit a contact form to test email sending
```

### **Test Rate Limiting**
```bash
# Submit multiple forms quickly to test rate limiting
```

### **Test Turnstile**
```bash
# Submit forms to test Turnstile verification
```

## 🚨 **TROUBLESHOOTING**

### **Email Not Sending**
- Check SMTP credentials
- Verify email addresses are correct
- Check spam folder

### **Turnstile Not Working**
- Verify site key and secret key match
- Check domain configuration in Cloudflare
- Ensure keys are not mixed up

### **Rate Limiting Not Working**
- Verify Redis credentials
- Check network connectivity
- Ensure environment variables are loaded

## 📞 **SUPPORT**

If you encounter issues:
1. Check the console logs for errors
2. Verify all environment variables are set
3. Test each service individually
4. Contact your hosting provider if needed

---

**Last Updated**: $(date)
**Version**: 1.0
