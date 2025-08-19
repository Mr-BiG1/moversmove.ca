# MoversMove - Professional Canadian Logistics & Moving Services

A production-ready website for MoversMove, a Canadian logistics and moving company. Built with Next.js 14+, TypeScript, Tailwind CSS, and modern web technologies.

## 🚀 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Security**: Turnstile protection, rate limiting, input sanitization, CSRF protection
- **Forms**: React Hook Form with Zod validation, email integration
- **Animations**: Framer Motion for smooth, tasteful animations
- **SEO Optimized**: Metadata, OpenGraph, structured data, sitemap

### Key Pages & Components
- **Homepage**: Hero section, transport cards, trust signals, testimonials
- **Quote Form**: Comprehensive moving quote request with validation
- **Payment Calculator**: Interactive cost estimator with breakdown
- **Transport Pages**: Detailed pages for each transport method with time estimators
- **Services Pages**: Individual service pages with detailed information
- **Contact & FAQ**: Contact forms and frequently asked questions

### Security Features
- Cloudflare Turnstile integration
- Rate limiting (Upstash Redis or in-memory)
- Input sanitization with DOMPurify
- CSRF protection
- Security headers with next-safe
- Zod validation throughout

### Email Integration
- Nodemailer (SMTP) and Resend support
- HTML email templates with plain text fallback
- Rate limiting and spam protection
- Professional branded emails

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Email**: Nodemailer / Resend
- **Security**: Turnstile, rate limiting, input sanitization
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Testing**: Vitest + Testing Library + Playwright

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd moversmove-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Site Configuration
   SITE_URL=https://moversmove.ca
   
   # Email Configuration (SMTP)
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-smtp-user
   SMTP_PASS=your-smtp-password
   SMTP_FROM="Movers Move <no-reply@moversmove.ca>"
   
   # Email Configuration (Resend - alternative)
   RESEND_API_KEY=your-resend-api-key
   
   # Email Recipients
   EMAIL_TO=info@moversmove.ca
   
   # Security - Cloudflare Turnstile
   TURNSTILE_SITE_KEY=your-turnstile-site-key
   TURNSTILE_SECRET_KEY=your-turnstile-secret-key
   
   # Rate Limiting - Upstash Redis (optional)
   UPSTASH_REDIS_REST_URL=your-upstash-url
   UPSTASH_REDIS_REST_TOKEN=your-upstash-token
   
   # Analytics
   ENABLE_ANALYTICS=false
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically detect Next.js and deploy

### Other Platforms

The application is designed to work on any platform that supports Next.js:

- **Netlify**: Use the Next.js build command
- **Railway**: Direct deployment from GitHub
- **DigitalOcean App Platform**: Container deployment
- **AWS/GCP**: Docker container deployment

## 📁 Project Structure

```
moversmove-website/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── quote/             # Quote form page
│   ├── payment-calculator/ # Cost calculator page
│   ├── transport/         # Transport method pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── forms/            # Form components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   └── ...               # Other components
├── lib/                  # Utility functions
│   ├── constants.ts      # Business constants
│   ├── schemas.ts        # Zod validation schemas
│   ├── email.ts          # Email functionality
│   ├── rate-limit.ts     # Rate limiting
│   └── utils.ts          # Utility functions
├── styles/               # Global styles
│   └── globals.css       # Tailwind CSS
└── public/               # Static assets
```

## 🔧 Configuration

### Email Setup

Choose between SMTP or Resend:

**SMTP (Recommended for production):**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

**Resend (Alternative):**
```env
RESEND_API_KEY=re_your_api_key_here
```

### Turnstile Setup

1. Create a Cloudflare account
2. Add your domain to Cloudflare
3. Enable Turnstile
4. Create a site key and secret key
5. Add to environment variables

### Rate Limiting

**Upstash Redis (Production):**
```env
UPSTASH_REDIS_REST_URL=https://your-redis-url.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-token
```

**In-Memory (Development):**
No additional setup required - falls back to in-memory storage.

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run tests with UI
npm run test:ui
```

## 📊 Performance

The application is optimized for performance:

- **Lighthouse Score**: 90+ across all metrics
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic route-based code splitting
- **Caching**: Static generation where possible
- **Bundle Analysis**: Optimized bundle sizes

## 🔒 Security

- **Content Security Policy**: Strict CSP with next-safe
- **Security Headers**: HSTS, X-Content-Type-Options, etc.
- **Input Validation**: Zod schemas for all forms
- **Rate Limiting**: Protection against abuse
- **CSRF Protection**: Double-submit cookie pattern
- **Input Sanitization**: DOMPurify for HTML content

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Touch-friendly interactions
- Optimized navigation for mobile
- Responsive images and layouts
- Accessible design patterns

## 🎨 Customization

### Brand Colors
Update colors in `tailwind.config.js`:
```javascript
primary: {
  DEFAULT: "#0A5DB5", // Your brand blue
},
accent: {
  DEFAULT: "#FF7A00", // Your CTA orange
},
```

### Content
- Update company information in `lib/constants.ts`
- Modify service content in individual service pages
- Customize email templates in `lib/email.ts`

## 📈 Analytics

Enable analytics by setting:
```env
ENABLE_ANALYTICS=true
```

The application supports:
- Vercel Analytics
- Google Analytics (can be added)
- Privacy-friendly tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Email: info@moversmove.ca
- Create an issue in the repository

## 🚀 Quick Start Checklist

- [ ] Clone repository
- [ ] Install dependencies (`npm install`)
- [ ] Copy environment file (`cp env.example .env.local`)
- [ ] Configure email settings
- [ ] Set up Turnstile keys
- [ ] Configure rate limiting (optional)
- [ ] Run development server (`npm run dev`)
- [ ] Test forms and functionality
- [ ] Deploy to production

---

Built with ❤️ for MoversMove - Professional Canadian Logistics & Moving Services
