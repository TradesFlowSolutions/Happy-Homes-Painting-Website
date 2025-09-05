# Happy Homes Painting - Website

This is the official website repository for Happy Homes Painting. This repository contains all the source code, assets, and configuration files needed to maintain and update the Happy Homes Painting website.

## 🏠 About Happy Homes Painting

Professional painting services in Charlotte, NC specializing in:
- Interior Painting
- Exterior Painting
- Cabinet Refinishing
- Color Consultation
- Commercial Projects

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone [your-repo-url]
cd happy-homes-painting-client

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the website.

## 📁 Project Structure

```
├── app/                    # Next.js 14 app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── navigation.tsx    # Site navigation
│   ├── hero-section.tsx  # Homepage hero
│   ├── services-section.tsx
│   ├── gallery-section.tsx
│   ├── testimonials-section.tsx
│   ├── contact-section.tsx
│   └── footer.tsx
├── config/               # Business configuration
│   └── business-config.ts # Business details & settings
├── public/               # Static assets
│   ├── images/          # Website images
│   └── favicon.ico
└── lib/                 # Utilities and helpers
```

## ✏️ Making Updates

### Updating Business Information
Edit `config/business-config.ts` to update:
- Business name and contact info
- Services offered
- Pricing information
- Social media links

### Adding New Photos
1. Add optimized images to `public/images/`
2. Update the gallery configuration in the relevant component
3. Ensure images are web-optimized (WebP format recommended)

### Updating Content
- **Services**: Edit `components/services-section.tsx`
- **About Section**: Edit `components/about-section.tsx`
- **Testimonials**: Edit `components/testimonials-section.tsx`
- **Contact Info**: Edit `config/business-config.ts`

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on every push to main branch
3. Set up environment variables in Vercel dashboard

### Environment Variables
Create `.env.local` file:
```
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_business_email
```

## 📧 Contact Form Setup

The contact form uses Resend for email delivery. To set up:
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add `RESEND_API_KEY` to your environment variables
4. Update `CONTACT_EMAIL` in environment variables

## 🔧 Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Monitor website performance
- Update business information as needed
- Add new project photos regularly

### Backup
- This repository serves as your backup
- All changes are version controlled with Git
- Previous versions can be restored if needed

## 📞 Support

For technical support or website updates, contact your web developer.

## 📄 License

This website is proprietary to Happy Homes Painting. All rights reserved.