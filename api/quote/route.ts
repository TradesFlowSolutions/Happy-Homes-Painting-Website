
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { businessConfig } from '@/config/business-config';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { type, name, email, phone } = formData;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare email content based on quote type
    const isEstimate = type === 'Free Estimate';
    const subject = `New ${type} Request - ${businessConfig.business.name}`;
    
    // Send email to business owner
    const emailResult = await resend.emails.send({
      from: 'website@yourdomain.com', // Update with your verified domain
      to: businessConfig.contact.email,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="background-color: ${businessConfig.colors.primary}; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New ${type} Request</h1>
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
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Request Type:</td>
                  <td style="padding: 8px 0; color: #333;">${type}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Submitted:</td>
                  <td style="padding: 8px 0; color: #333;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
            </div>
            
            ${isEstimate ? `
            <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h3 style="color: ${businessConfig.colors.primary}; border-bottom: 2px solid ${businessConfig.colors.secondary}; padding-bottom: 10px;">Estimate Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                ${formData.address ? `
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 8px 0; font-weight: bold; color: #555; width: 30%;">Address:</td>
                  <td style="padding: 8px 0; color: #333;">${formData.address}</td>
                </tr>
                ` : ''}
                ${formData.serviceType ? `
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Service:</td>
                  <td style="padding: 8px 0; color: #333;">${formData.serviceType}</td>
                </tr>
                ` : ''}
                ${formData.timeframe ? `
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Timeframe:</td>
                  <td style="padding: 8px 0; color: #333;">${formData.timeframe}</td>
                </tr>
                ` : ''}
              </table>
              ${formData.projectDescription ? `
                <h4 style="color: ${businessConfig.colors.primary}; margin: 20px 0 10px 0;">Project Description:</h4>
                <p style="line-height: 1.6; color: #333; background-color: #f8f9fa; padding: 15px; border-radius: 4px; border-left: 4px solid ${businessConfig.colors.secondary};">
                  ${formData.projectDescription.replace(/\n/g, '<br>')}
                </p>
              ` : ''}
            </div>
            ` : `
            <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h3 style="color: ${businessConfig.colors.primary}; border-bottom: 2px solid ${businessConfig.colors.secondary}; padding-bottom: 10px;">Consultation Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                ${formData.address ? `
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 8px 0; font-weight: bold; color: #555; width: 30%;">Address:</td>
                  <td style="padding: 8px 0; color: #333;">${formData.address}</td>
                </tr>
                ` : ''}
                ${formData.roomType ? `
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Room Type:</td>
                  <td style="padding: 8px 0; color: #333;">${formData.roomType}</td>
                </tr>
                ` : ''}
                ${formData.consultationType ? `
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Consultation Type:</td>
                  <td style="padding: 8px 0; color: #333;">${formData.consultationType}</td>
                </tr>
                ` : ''}
                ${formData.stylePreference ? `
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Style Preference:</td>
                  <td style="padding: 8px 0; color: #333;">${formData.stylePreference}</td>
                </tr>
                ` : ''}
                ${formData.currentColors ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Current Colors:</td>
                  <td style="padding: 8px 0; color: #333;">${formData.currentColors}</td>
                </tr>
                ` : ''}
              </table>
              ${formData.additionalInfo ? `
                <h4 style="color: ${businessConfig.colors.primary}; margin: 20px 0 10px 0;">Additional Information:</h4>
                <p style="line-height: 1.6; color: #333; background-color: #f8f9fa; padding: 15px; border-radius: 4px; border-left: 4px solid ${businessConfig.colors.secondary};">
                  ${formData.additionalInfo.replace(/\n/g, '<br>')}
                </p>
              ` : ''}
            </div>
            `}
          </div>
          
          <div style="padding: 20px; text-align: center; background-color: #f8f9fa; border-radius: 0 0 8px 8px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              This ${type.toLowerCase()} request was submitted through your ${businessConfig.business.name} website.
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
    console.error('Quote form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
