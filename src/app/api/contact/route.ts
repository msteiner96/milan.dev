import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, captchaToken } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    if (!captchaToken) {
      return NextResponse.json(
        { error: 'Please complete the captcha' },
        { status: 400 }
      );
    }

    const captchaVerification = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      }
    );

    if (!captchaVerification.ok) {
      console.error('reCAPTCHA verification request failed:', captchaVerification.status);
      return NextResponse.json(
        { error: 'Captcha verification request failed' },
        { status: 500 }
      );
    }

    const captchaResult = await captchaVerification.json();
    console.log('reCAPTCHA result:', captchaResult);

    if (!captchaResult.success) {
      console.error('reCAPTCHA validation failed:', captchaResult['error-codes']);
      return NextResponse.json(
        { error: 'Captcha verification failed' },
        { status: 400 }
      );
    }

    // Send email via Resend
    console.log('Attempting to send email via Resend...');
    console.log('From:', 'Portfolio Contact <onboarding@resend.dev>');
    console.log('To:', 'steiner.milan@hotmail.com');
    console.log('Reply-To:', email);

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['steiner.milan@hotmail.com'],
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from milan.dev contact form
Reply to this email to respond directly to ${name}
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: bold;
                color: #667eea;
                margin-bottom: 5px;
              }
              .field-value {
                background: white;
                padding: 15px;
                border-radius: 5px;
                border-left: 3px solid #667eea;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 5px;
                border-left: 3px solid #764ba2;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>📬 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone reached out from your portfolio</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">👤 Name:</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field">
                <div class="field-label">📧 Email:</div>
                <div class="field-value">
                  <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                </div>
              </div>

              <div class="field">
                <div class="field-label">💬 Message:</div>
                <div class="message-box">${message}</div>
              </div>

              <div class="footer">
                <p>This message was sent from your portfolio contact form at milan.dev</p>
                <p>You can reply directly to this email to respond to ${name}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      console.error('Full error details:', JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: 'Failed to send email', details: error.message },
        { status: 500 }
      );
    }

    console.log('Email sent successfully!');
    console.log('Message ID:', data?.id);
    console.log('Response data:', JSON.stringify(data, null, 2));

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
