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
├── config/               # Configuration files
│   └── business-config.ts # Business information
├── lib/                  # Utility functions
├── public/              # Static assets
└── uploads/             # Image uploads
```

## 🎨 Key Features

- **Modern Design**: Clean, professional layout optimized for painting businesses
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Loading**: Optimized images and modern web technologies
- **SEO Optimized**: Built-in SEO best practices for better search rankings
- **Contact Forms**: Multiple ways for customers to get in touch
- **Gallery**: Showcase your best painting projects
- **Service Pages**: Detailed information about painting services
- **Testimonials**: Customer reviews and feedback

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)
- **Forms**: React Hook Form with validation
- **Icons**: Lucide React

## 🔧 Configuration

### Business Information
Edit `config/business-config.ts` to update:
- Company name and contact information
- Services offered
- Business hours
- Social media links
- Google Analytics ID

### Environment Variables
Copy `.env.example` to `.env.local` and configure:
```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=info@yourdomain.com
```

## 📸 Adding Photos

1. Add high-quality images to the `uploads/` directory
2. Update the gallery configuration in `components/gallery-section.tsx`
3. Optimize images for web (recommended: WebP format, max 1920px width)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically on every push

### Other Platforms
This Next.js application can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any Node.js hosting provider

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop computers (1024px+)
- Large screens (1440px+)

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags and Open Graph
- Structured data for local business
- Optimized images with alt text
- Fast loading times
- Mobile-friendly design

## 📞 Support

For technical support or website updates, contact your web developer.

## 📄 License

This website is proprietary to Happy Homes Painting. All rights reserved.