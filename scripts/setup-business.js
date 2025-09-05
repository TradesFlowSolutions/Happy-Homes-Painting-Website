
/**
 * Business Setup Script
 * Run with: node scripts/setup-business.js
 * 
 * This script helps you quickly configure your business information
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function setupBusiness() {
  console.log('\n🎨 Service Business Website Template Setup');
  console.log('===========================================\n');
  
  console.log('Let\'s configure your business information...\n');

  // Collect basic business information
  const businessName = await askQuestion('Business Name: ');
  const businessTagline = await askQuestion('Business Tagline/Slogan: ');
  const ownerName = await askQuestion('Owner/Contractor Name: ');
  const phone = await askQuestion('Phone Number: ');
  const email = await askQuestion('Contact Email: ');
  const city = await askQuestion('City: ');
  const state = await askQuestion('State: ');
  const established = await askQuestion('Year Established: ');

  console.log('\n📧 Email Configuration');
  const emailDomain = await askQuestion('Your verified domain for emails (e.g., yourdomain.com): ');
  const resendApiKey = await askQuestion('Resend API Key (get from https://resend.com): ');

  console.log('\n🎨 Brand Colors (use hex codes, e.g., #1B4B66)');
  const primaryColor = await askQuestion('Primary Color (default: #1B4B66): ') || '#1B4B66';
  const secondaryColor = await askQuestion('Secondary Color (default: #D4AF37): ') || '#D4AF37';
  const accentColor = await askQuestion('Accent Color (default: #2D5F3F): ') || '#2D5F3F';

  // Update business config file
  const configPath = path.join(__dirname, '..', 'config', 'business-config.ts');
  let configContent = fs.readFileSync(configPath, 'utf8');

  // Replace placeholder values
  configContent = configContent.replace(/name: "Happy Homes Painting"/, `name: "${businessName}"`);
  configContent = configContent.replace(/tagline: "Transform Your Home with Professional Painting"/, `tagline: "${businessTagline}"`);
  configContent = configContent.replace(/name: "Andrew Raphael"/, `name: "${ownerName}"`);
  configContent = configContent.replace(/phone: "\(980\) 949-5200"/, `phone: "${phone}"`);
  configContent = configContent.replace(/email: "raphael@happyhomespainting\.net"/, `email: "${email}"`);
  configContent = configContent.replace(/city: "Charlotte"/, `city: "${city}"`);
  configContent = configContent.replace(/state: "NC"/, `state: "${state}"`);
  configContent = configContent.replace(/established: "2007"/, `established: "${established}"`);
  configContent = configContent.replace(/primary: "#1B4B66"/, `primary: "${primaryColor}"`);
  configContent = configContent.replace(/secondary: "#D4AF37"/, `secondary: "${secondaryColor}"`);
  configContent = configContent.replace(/accent: "#2D5F3F"/, `accent: "${accentColor}"`);

  fs.writeFileSync(configPath, configContent);

  // Update API routes with domain
  const contactApiPath = path.join(__dirname, '..', 'app', 'app', 'api', 'contact', 'route.ts');
  const quoteApiPath = path.join(__dirname, '..', 'app', 'app', 'api', 'quote', 'route.ts');
  
  [contactApiPath, quoteApiPath].forEach(apiPath => {
    if (fs.existsSync(apiPath)) {
      let content = fs.readFileSync(apiPath, 'utf8');
      content = content.replace(/from: 'website@yourdomain\.com'/, `from: 'website@${emailDomain}'`);
      fs.writeFileSync(apiPath, content);
    }
  });

  // Create .env.local file
  const envContent = `# Email Service Configuration
RESEND_API_KEY=${resendApiKey}

# Next.js Configuration
NEXTAUTH_SECRET=${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}
NEXTAUTH_URL=http://localhost:3000
`;

  fs.writeFileSync('.env.local', envContent);

  // Update CSS custom properties
  const cssPath = path.join(__dirname, '..', 'app', 'app', 'globals.css');
  let cssContent = fs.readFileSync(cssPath, 'utf8');
  cssContent = cssContent.replace(/--color-primary: #1B4B66;/, `--color-primary: ${primaryColor};`);
  cssContent = cssContent.replace(/--color-secondary: #D4AF37;/, `--color-secondary: ${secondaryColor};`);
  cssContent = cssContent.replace(/--color-accent: #2D5F3F;/, `--color-accent: ${accentColor};`);
  fs.writeFileSync(cssPath, cssContent);

  console.log('\n✅ Setup Complete!');
  console.log('\nNext Steps:');
  console.log('1. Add your logo to config/business-config.ts (branding.logo.src)');
  console.log('2. Upload your project photos to the /uploads folder');
  console.log('3. Update the gallery photos in config/business-config.ts');
  console.log('4. Customize services, testimonials, and other content');
  console.log('5. Run "yarn dev" to start the development server');
  console.log('\n📖 Check README.md for detailed customization instructions!');

  rl.close();
}

setupBusiness().catch(console.error);
