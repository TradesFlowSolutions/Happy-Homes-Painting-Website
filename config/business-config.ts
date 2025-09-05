
// Business Configuration File
// Update this file with your business information

export const businessConfig = {
  // Basic Business Information
  business: {
    name: "Happy Homes Painting", // Your business name
    tagline: "Transform Your Home with Professional Painting", // Main tagline
    description: "Professional painting services with expert craftsmanship", // Brief description
    established: "2007", // Year established
    experience: "36+", // Years of experience
    location: {
      city: "Charlotte",
      state: "NC",
      fullLocation: "Charlotte, NC and surrounding areas"
    }
  },

  // Contact Information
  contact: {
    phone: "(980) 949-5200",
    email: "raphael@happyhomespainting.net", // Email for form submissions
    website: "www.happyhomespainting.com",
    businessHours: {
      weekdays: "8:00 AM - 6:00 PM",
      weekend: "9:00 AM - 4:00 PM"
    }
  },

  // Owner/Lead Information
  owner: {
    name: "Andrew Raphael",
    title: "Licensed Painting Contractor",
    experience: "36+ years",
    certifications: ["Licensed Contractor", "Insured", "Sherwin Williams Certified"]
  },

  // Services Offered
  services: [
    {
      name: "Interior Painting",
      description: "Professional interior repaints using premium Sherwin Williams paint",
      icon: "Home", // Lucide icon name
      features: ["Premium Sherwin Williams paint", "Expert color consultation", "Clean, professional finish"]
    },
    {
      name: "Exterior Painting",
      description: "Weather-resistant exterior painting to protect and beautify your home",
      icon: "Building", // Lucide icon name
      features: ["Weather-resistant coatings", "Pressure washing included", "5-year warranty"]
    },
    {
      name: "Cabinet Refinishing",
      description: "Transform your kitchen with professional cabinet painting and refinishing",
      icon: "ChefHat", // Lucide icon name
      features: ["Custom color matching", "Durable finish", "Kitchen makeover expertise"]
    }
  ],

  // Testimonials
  testimonials: [
    {
      name: "Sarah Johnson",
      location: "Myers Park, Charlotte",
      rating: 5,
      text: "Andrew and his team did an amazing job painting our entire home interior. Professional, clean, and the results exceeded our expectations!",
      service: "Interior Painting"
    },
    {
      name: "Mike Chen",
      location: "SouthPark, Charlotte",
      rating: 5,
      text: "Best painting contractor in Charlotte! The cabinet refinishing completely transformed our kitchen. Highly recommend!",
      service: "Cabinet Refinishing"
    },
    {
      name: "Jennifer Martinez",
      location: "Dilworth, Charlotte",
      rating: 5,
      text: "Outstanding exterior painting service. The team was professional, timely, and the quality is exceptional. Our home looks brand new!",
      service: "Exterior Painting"
    }
  ],

  // Gallery Categories and Photos
  gallery: {
    categories: [
      "All Projects",
      "Interior Painting",
      "Exterior Painting", 
      "Kitchen Cabinets",
      "Living Rooms",
      "Bedrooms"
    ],
    photos: [
      {
        src: "/uploads/sample-project-01.jpg",
        alt: "Beautiful dramatic ceiling feature with navy blue paint and white trim details",
        category: "Interior Painting",
        title: "Dramatic Ceiling Feature",
        description: "Navy Blue Ceiling with White Trim"
      },
      {
        src: "/uploads/sample-project-02.jpg", 
        alt: "Elegant living room interior painting in warm gray with modern fireplace and high ceilings",
        category: "Living Rooms",
        title: "Modern Living Room",
        description: "Gray Walls with Statement Fireplace"
      },
      {
        src: "/uploads/sample-project-03.jpg",
        alt: "Kitchen cabinet refinishing transformation from wood to clean white with modern hardware",
        category: "Kitchen Cabinets",
        title: "Kitchen Cabinet Makeover",
        description: "Wood to White Cabinet Transformation"
      },
      // Add more photos as needed...
      // To add your own photos:
      // 1. Upload images to /uploads/ folder  
      // 2. Add entries here with src, alt, category, title, and description
      // 3. Make sure category matches one in categories array above
    ]
  },

  // Brand Colors (CSS Custom Properties)
  colors: {
    primary: "#1B4B66", // Deep blue - main brand color
    secondary: "#D4AF37", // Gold - accent color
    accent: "#2D5F3F", // Forest green - secondary accent
    neutral: {
      50: "#F8FAFC",
      100: "#F1F5F9", 
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A"
    }
  },

  // SEO Settings
  seo: {
    title: "Happy Homes Painting - Professional Painting Services in Charlotte, NC",
    description: "Transform your Charlotte home with Happy Homes Painting. 36+ years experience, licensed contractor, interior & exterior painting, cabinet refinishing. Free estimates!",
    keywords: "painting contractor Charlotte NC, interior painting, exterior painting, cabinet refinishing, Sherwin Williams paint, home painting services",
    ogImage: "https://cdn.abacus.ai/images/16a0ba3a-dcb3-4c82-945e-a87a6ed870a5.png" // Update with your logo
  },

  // Logo and Branding
  branding: {
    logo: {
      src: "https://cdn.abacus.ai/images/16a0ba3a-dcb3-4c82-945e-a87a6ed870a5.png", // Update with your logo URL
      alt: "Happy Homes Painting Logo",
      width: 200,
      height: 120
    },
    favicon: "/favicon.ico"
  },

  // Hero Section
  hero: {
    backgroundImage: "https://media.architecturaldigest.com/photos/64af203965d14ac27d571158/16:9/w_2560%2Cc_limit/AD050119_ED_LETTER_01.jpg",
    backgroundAlt: "Beautiful modern living room with professional interior painting",
    headline: "Professional Painting Services in Charlotte",
    subheadline: "Transform your home with expert craftsmanship and premium materials",
    ctaButtons: [
      {
        text: "Free Estimate",
        type: "primary",
        action: "estimate" // This will open estimate modal
      },
      {
        text: "Color Consultation", 
        type: "secondary",
        action: "consultation" // This will open consultation modal
      }
    ]
  },

  // Features/Benefits
  features: [
    "36+ years of painting experience",
    "Licensed and insured contractor", 
    "Premium Sherwin Williams paint",
    "Free color consultation",
    "Clean, professional service",
    "Satisfaction guaranteed"
  ],

  // Social Media (optional)
  social: {
    facebook: "", // Add your Facebook URL
    instagram: "", // Add your Instagram URL
    google: "" // Add your Google Business URL
  }
};

// Export type for TypeScript
export type BusinessConfig = typeof businessConfig;
