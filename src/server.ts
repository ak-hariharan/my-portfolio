import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import {join} from 'node:path';

import nodemailer from 'nodemailer';

const browserDistFolder =
  process.env['BROWSER_DIST_FOLDER'] ||
  join(process.cwd(), 'dist', 'app', 'browser');

const app = express();
app.use(express.json());
const angularApp = new AngularNodeAppEngine();

app.post('/api/contact', async (req, res): Promise<void> => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      res.status(400).json({ error: 'All fields are required.' });
      return;
    }
    
    if (process.env['SMTP_USER'] && process.env['SMTP_PASS']) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env['SMTP_USER'],
          pass: process.env['SMTP_PASS'],
        },
      });

      const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #333333; background-color: #f9fafb; margin: 0; padding: 0; }
  .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); overflow: hidden; border: 1px solid #e5e7eb; }
  .header { background-color: #111827; color: #ffffff; padding: 30px; text-align: center; }
  .header h1 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.025em; }
  .header p { margin: 8px 0 0 0; color: #9ca3af; font-size: 14px; }
  .content { padding: 30px; }
  .field { margin-bottom: 24px; }
  .label { font-size: 12px; text-transform: uppercase; color: #6b7280; font-weight: 600; margin-bottom: 6px; letter-spacing: 0.05em; display: flex; align-items: center; gap: 6px; }
  .value { font-size: 16px; color: #111827; }
  .message-box { background-color: #f3f4f6; border-radius: 6px; padding: 20px; white-space: pre-wrap; font-size: 15px; line-height: 1.6; color: #374151; border-left: 4px solid #10b981; }
  .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 13px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
  .link { color: #3b82f6; text-decoration: none; font-weight: 500; }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✨ You've Got a New Message!</h1>
      <p>Someone reached out from your portfolio</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">👤 Sender Details</div>
        <div class="value">
          <strong>${name}</strong><br>
          <a href="mailto:${email}" class="link">📧 ${email}</a>
        </div>
      </div>
      
      <div class="field">
        <div class="label">📌 Subject</div>
        <div class="value"><strong>${subject}</strong></div>
      </div>
      
      <div class="field">
        <div class="label">💬 Message</div>
        <div class="message-box">${message}</div>
      </div>
    </div>
    <div class="footer">
      🚀 This message was sent from your portfolio website.
    </div>
  </div>
</body>
</html>`;

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env['RECEIVER_EMAIL'] || 'ak.hari.coder@gmail.com',
        subject: `Portfolio Contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: htmlContent,
        replyTo: email,
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully via Nodemailer.');

      // Send confirmation email back to the sender
      const confirmationHtml = `
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #333333; background-color: #f9fafb; margin: 0; padding: 0; }
  .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); overflow: hidden; border: 1px solid #e5e7eb; }
  .header { background-color: #111827; color: #ffffff; padding: 30px; text-align: center; }
  .header h1 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.025em; }
  .header p { margin: 8px 0 0 0; color: #9ca3af; font-size: 14px; }
  .content { padding: 30px; font-size: 16px; line-height: 1.6; color: #374151; }
  .content p { margin-top: 0; margin-bottom: 20px; }
  .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 13px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Hello ${name},</h1>
      <p>Thanks for reaching out!</p>
    </div>
    <div class="content">
      <p>This is a confirmation that I have received your message regarding <strong>"${subject}"</strong>.</p>
      <p>I'll get back to you as soon as possible.</p>
      <p>Best regards,<br>Karuppasamyhariharan (KHA)</p>
    </div>
    <div class="footer">
      This confirmation was sent automatically after your submission.
    </div>
  </div>
</body>
</html>`;

      const confirmationMailOptions = {
        from: `"Karuppasamyhariharan" <${process.env['SMTP_USER']}>`, // assuming the SMTP user is the portfolio owner
        to: email,
        subject: `Thank you for reaching out! - Re: ${subject}`,
        text: `Hello ${name},\n\nThanks for reaching out! This is a confirmation that I have received your message regarding "${subject}".\n\nI'll get back to you as soon as possible.\n\nBest regards,\nKaruppasamyhariharan`,
        html: confirmationHtml,
      };

      await transporter.sendMail(confirmationMailOptions);
      console.log('Confirmation email sent successfully.');
    } else {
      console.log('--- SIMULATED EMAIL ---');
      console.log(`To: ak.hari.coder@gmail.com`);
      console.log(`Subject: Portfolio Contact: ${subject}`);
      console.log(`From: ${name} <${email}>`);
      console.log(`Message: ${message}`);
      console.log('-----------------------');
      console.log('NOTE: Please configure SMTP_USER and SMTP_PASS to send real emails.');
    }
    
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send communication' });
  }
});

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);

export default reqHandler;
