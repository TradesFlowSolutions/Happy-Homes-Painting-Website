
# Service Business Website Template - Customization Guide

## 🚀 Quick Start

### 1. Initial Setup
```bash
# Clone/copy the template
cp -r /path/to/service_business_website_template /path/to/your-business-website
cd your-business-website

# Install dependencies
yarn install

# Run the setup script (optional - helps configure basic info quickly)
node scripts/setup-business.js

# Start development server
yarn dev
```

### 2. Basic Configuration
Edit `config/business-config.ts` - this is your main configuration file:

```typescript
export const businessConfig = {
  business: {
    name: "Your Business Name",           // 📝 CHANGE THIS
    tagline: "Your business tagline",     // 📝 CHANGE THIS  
    location: {
      city: "Your City",                  // 📝 CHANGE THIS
      state: "Your State"                 // 📝 CHANGE THIS
    }
  },
  contact: {
    phone: "Your Phone Number",           // 📝 CHANGE THIS
    email: "your@email.com"               // 📝 CHANGE THIS
  }
  // ... continue customizing all sections
};
```

## 🎨 Branding Customization

### Logo
1. Upload your logo image
2. Update in `config/business-config.ts`:
```typescript
branding: {
  logo: {
    src: "/path/to/your/logo.png",       // 📝 CHANGE THIS
    alt: "Your Business Logo",           // 📝 CHANGE THIS
    width: 200,
    height: 120
  }
}
```

### Brand Colors
Update colors in `config/business-config.ts`:
```typescript
colors: {
  primary: "#YOUR_PRIMARY_COLOR",        // 📝 CHANGE THIS - Main brand color
  secondary: "#YOUR_SECONDARY_COLOR",    // 📝 CHANGE THIS - Accent color  
  accent: "#YOUR_ACCENT_COLOR"           // 📝 CHANGE THIS - Additional accent
}
```

Colors will automatically update throughout the site!

### Favicon
Replace `/public/favicon.ico` with your favicon.

## 📋 Content Customization

### Services
Update the services array in `config/business-config.ts`:
```typescript
services: [
  {
    name: "Your Service Name",           // 📝 CHANGE THIS
    description: "Service description",   // 📝 CHANGE THIS
    icon: "Home", // Lucide icon name    // 📝 CHANGE THIS
    features: [                          // 📝 CHANGE THIS
      "Feature 1",
      "Feature 2", 
      "Feature 3"
    ]
  }
  // Add more services...
]
```

Available icons: Home, Building, ChefHat, Palette, Brush, Wrench (add more in services-section.tsx)

### Testimonials
Update testimonials in `config/business-config.ts`:
```typescript
testimonials: [
  {
    name: "Customer Name",               // 📝 CHANGE THIS
    location: "Customer Location",       // 📝 CHANGE THIS
    rating: 5,
    text: "Customer review text...",     // 📝 CHANGE THIS
    service: "Service Type"              // 📝 CHANGE THIS
  }
  // Add more testimonials...
]
```

### About Section
Update owner/contractor information:
```typescript
owner: {
  name: "Your Name",                     // 📝 CHANGE THIS
  title: "Your Title",                   // 📝 CHANGE THIS
  experience: "Years of experience",     // 📝 CHANGE THIS
  certifications: [                      // 📝 CHANGE THIS
    "Certification 1",
    "Certification 2"
  ]
}
```

## 📸 Photo Gallery Setup

### 1. Upload Your Photos
- Save project photos in `/uploads/` folder
- Use descriptive filenames (e.g., `kitchen-cabinet-renovation-2024.jpg`)
- Optimize images for web (recommended: under 500KB each)

### 2. Configure Gallery
Update the gallery section in `config/business-config.ts`:

```typescript
gallery: {
  categories: [                          // 📝 CHANGE THIS
    "All Projects",
    "Interior Painting", 
    "Exterior Painting",
    "Kitchen Cabinets",
    // Add your categories...
  ],
  photos: [
    {
      src: "/uploads/your-photo.jpg",     // 📝 CHANGE THIS
      alt: "Descriptive alt text",        // 📝 CHANGE THIS  
      category: "Interior Painting",      // 📝 CHANGE THIS
      title: "Project Title",             // 📝 CHANGE THIS
      description: "Brief description"    // 📝 CHANGE THIS
    }
    // Add more photos...
  ]
}
```

### 3. Photo Best Practices
- **Alt Text**: Be specific (e.g., "Modern kitchen with white cabinets and subway tile backsplash")
- **Categories**: Match exactly with categories array
- **Titles**: Short and descriptive
- **Descriptions**: Brief but informative

## 📧 Email Setup

### 1. Set up Resend Account
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain
3. Get your API key
4. Add to `.env.local`:
```env
RESEND_API_KEY=your_api_key_here
```

### 2. Update Email Settings
In API routes (`app/api/contact/route.ts` and `app/api/quote/route.ts`):
```typescript
from: 'website@yourdomain.com',          // 📝 CHANGE THIS to your verified domain
to: businessConfig.contact.email,        // This pulls from your config
```

## 🔧 Advanced Customization

### Adding New Services
1. Add to `businessConfig.services` array
2. Add corresponding icon to icon map in `services-section.tsx`:
```typescript
const iconMap = {
  Home,
  Building,
  YourNewIcon,  // Import from lucide-react
};
```

### Custom Page Sections
To add new sections:
1. Create component in `/components/`
2. Import and add to `app/page.tsx`
3. Add navigation link in `navigation.tsx`

### SEO Customization
Update SEO settings in `config/business-config.ts`:
```typescript
seo: {
  title: "Your SEO Title",               // 📝 CHANGE THIS
  description: "Your meta description",  // 📝 CHANGE THIS
  keywords: "your, seo, keywords",       // 📝 CHANGE THIS
  ogImage: "URL to your social image"    // 📝 CHANGE THIS
}
```

### Custom CSS
Add custom styles to `app/globals.css`:
```css
/* Your custom styles */
.your-custom-class {
  /* Custom styling using your brand colors */
  background-color: var(--color-primary);
}
```

## 📱 Mobile Optimization

The template is mobile-first, but you can customize breakpoints in `tailwind.config.ts`:
```typescript
screens: {
  'xs': '475px',
  // Add custom breakpoints
}
```

## 🎯 Lead Generation Features

### Form Customization
Modify form fields in modal components:
- `free-estimate-modal.tsx`
- `color-consultation-modal.tsx` 
- `contact-section.tsx`

### Email Templates
Customize email templates in API routes for better branding and information capture.

## 🚀 Deployment

### Build and Test
```bash
yarn build
yarn start
```

### Environment Variables for Production
Set these in your hosting platform:
```env
RESEND_API_KEY=your_production_api_key
NEXTAUTH_SECRET=your_production_secret
NEXTAUTH_URL=https://yourdomain.com
```

## 🆘 Troubleshooting

### Common Issues
1. **Images not showing**: Check file paths in gallery config
2. **Colors not updating**: Verify CSS custom properties in globals.css
3. **Forms not working**: Check Resend API key and domain verification
4. **Build errors**: Check TypeScript types in business-config.ts

### Getting Help
- Review component files for implementation details
- Check browser console for errors
- Verify all required fields in business-config.ts are filled

## ✅ Pre-Launch Checklist

- [ ] All business information updated in config
- [ ] Logo and favicon replaced
- [ ] Brand colors customized
- [ ] All services configured
- [ ] Testimonials added
- [ ] Gallery photos uploaded and configured
- [ ] Email integration tested
- [ ] Contact information verified
- [ ] SEO metadata updated
- [ ] Site tested on mobile and desktop
- [ ] Forms tested and working
- [ ] Build successful with no errors

---

**Need help?** All customization happens primarily in `config/business-config.ts` - start there! 🎉
