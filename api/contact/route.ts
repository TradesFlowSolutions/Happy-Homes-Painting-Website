
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { businessConfig } from '@/config/business-config';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message, projectType } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to business owner
    const emailResult = await resend.emails.send({
      from: 'website@yourdomain.com', // Update with your verified domain
      to: businessConfig.contact.email,
      subject: `New Contact Form Submission - ${businessConfig.business.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="background-color: ${businessConfig.colors.primary}; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">${businessConfig.business.name}</p>
          </div>
          
          <div style="padding: 20px; background-color: #fafafa;">
            <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h2 style="color: ${businessConfig.colors.primary}; border-bottom: 2px solid ${businessConfig.colors.secondary}; padding-bottom: 10px;">Customer Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 8px 0; font-weight: bold; color: #555; width: 30%;">Name:</td>
                  <td style="padding: 8px 0; color: #333;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: ${businessConfig.colors.primary}; text-decoration: none;">${email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
                  <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: ${businessConfig.colors.primary}; text-decoration: none;">${phone}</a></td>
                </tr>
                ${projectType ? `
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Project Type:</td>
                  <td style="padding: 8px 0; color: #333;">${projectType}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Submitted:</td>
                  <td style="padding: 8px 0; color: #333;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 6px;">
              <h3 style="color: ${businessConfig.colors.primary}; border-bottom: 2px solid ${businessConfig.colors.secondary}; padding-bottom: 10px;">Message</h3>
              <p style="line-height: 1.6; color: #333; background-color: #f8f9fa; padding: 15px; border-radius: 4px; border-left: 4px solid ${businessConfig.colors.secondary};">
                ${message.replace(/\n/g, '<br>')}
              </p>
            </div>
          </div>
          
          <div style="padding: 20px; text-align: center; background-color: #f8f9fa; border-radius: 0 0 8px 8px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              This message was sent through the contact form on your ${businessConfig.business.name} website.
            </p>
            <div style="margin-top: 15px;">
              <a href="tel:${phone}" style="display: inline-block; background-color: ${businessConfig.colors.primary}; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 0 5px;">Call Customer</a>
              <a href="mailto:${email}" style="display: inline-block; background-color: ${businessConfig.colors.secondary}; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 0 5px;">Reply via Email</a>
            </div>
          </div>
        </div>
      `,
    });

    if (emailResult.error) {
      console.error('Email sending failed:', emailResult.error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
