
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'react-hot-toast';
import { businessConfig } from '@/config/business-config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: businessConfig.seo.title,
  description: businessConfig.seo.description,
  keywords: businessConfig.seo.keywords,
  openGraph: {
    title: `${businessConfig.business.name} - ${businessConfig.business.location.fullLocation}`,
    description: businessConfig.seo.description,
    images: [{
      url: businessConfig.seo.ogImage,
      width: 1200,
      height: 630,
      alt: `${businessConfig.business.name} Logo`
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${businessConfig.business.name} - ${businessConfig.business.location.city}, ${businessConfig.business.location.state}`,
    description: businessConfig.seo.description,
    images: [businessConfig.seo.ogImage],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href={businessConfig.branding.favicon} />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 5000,
              style: {
                background: '#fff',
                color: '#333',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '16px',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
