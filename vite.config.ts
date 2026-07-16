import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'api-contact-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.method === 'POST' && req.url === '/api/contact') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk.toString();
              });
              req.on('end', async () => {
                try {
                  const { name, company, email, phone, service, message } = JSON.parse(body);

                  if (!name || !company || !email || !phone || !message) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: 'Please fill in all required fields.' }));
                    return;
                  }

                  const resendApiKey = env.RESEND_API_KEY;

                  if (!resendApiKey) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: 'Email service key is not configured on the server.' }));
                    return;
                  }

                  const toEmail = 'creovizgraphics30@gmail.com';
                  const fromEmail = env.RESEND_FROM_EMAIL || 'Creoviz Graphics Studio <onboarding@resend.dev>';
                  const subject = `New Inquiry: ${service} - from ${name}`;

                  const htmlContent = `
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>${subject}</title>
                        <style>
                          body {
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                            background-color: #F7F7F8;
                            color: #1B2450;
                            margin: 0;
                            padding: 0;
                            -webkit-font-smoothing: antialiased;
                          }
                          .wrapper {
                            width: 100%;
                            background-color: #F7F7F8;
                            padding: 40px 20px;
                            box-sizing: border-box;
                          }
                          .container {
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #ffffff;
                            border-radius: 16px;
                            overflow: hidden;
                            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
                            border: 1px solid rgba(27, 36, 80, 0.06);
                          }
                          .header {
                            background-color: #1B2450;
                            background-image: linear-gradient(135deg, #1B2450 0%, #141B3B 100%);
                            padding: 30px 40px;
                            text-align: center;
                          }
                          .header-title {
                            font-size: 20px;
                            font-weight: 800;
                            letter-spacing: 2px;
                            color: #ffffff;
                            margin: 0;
                            text-transform: uppercase;
                          }
                          .header-subtitle {
                            font-size: 11px;
                            color: #FF5A1F;
                            font-weight: 700;
                            letter-spacing: 3px;
                            margin-top: 5px;
                            text-transform: uppercase;
                          }
                          .content {
                            padding: 40px;
                          }
                          .interest-badge {
                            display: inline-block;
                            background-color: rgba(255, 90, 31, 0.06);
                            color: #FF5A1F;
                            font-size: 11px;
                            font-weight: 700;
                            padding: 6px 14px;
                            border-radius: 50px;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            margin-bottom: 25px;
                            border: 1px solid rgba(255, 90, 31, 0.15);
                          }
                          .section-title {
                            font-size: 11px;
                            font-weight: 700;
                            text-transform: uppercase;
                            letter-spacing: 1.5px;
                            color: #888888;
                            margin-bottom: 12px;
                            border-bottom: 1px solid rgba(27, 36, 80, 0.06);
                            padding-bottom: 6px;
                          }
                          .grid {
                            margin-bottom: 30px;
                          }
                          .grid-item {
                            margin-bottom: 15px;
                          }
                          .label {
                            font-size: 10px;
                            text-transform: uppercase;
                            font-weight: 600;
                            color: #888888;
                            letter-spacing: 0.5px;
                            margin-bottom: 3px;
                          }
                          .value {
                            font-size: 14px;
                            font-weight: 500;
                            color: #1B2450;
                          }
                          .message-box {
                            background-color: #F7F7F8;
                            border-left: 3px solid #FF5A1F;
                            padding: 20px;
                            border-radius: 0 12px 12px 0;
                            font-size: 14px;
                            line-height: 1.6;
                            font-weight: 300;
                            color: #555555;
                            white-space: pre-wrap;
                          }
                          .footer {
                            background-color: #ffffff;
                            padding: 20px 40px;
                            text-align: center;
                            border-top: 1px solid rgba(27, 36, 80, 0.06);
                          }
                          .footer-text {
                            font-size: 10px;
                            color: #888888;
                            margin: 0;
                            letter-spacing: 0.5px;
                          }
                        </style>
                      </head>
                      <body>
                        <div class="wrapper">
                          <div class="container">
                            <div class="header">
                              <h1 class="header-title">CREOVIZ STUDIO</h1>
                              <div class="header-subtitle">Project Briefing System</div>
                            </div>
                            <div class="content">
                              <div class="interest-badge">${service}</div>
                              
                              <div class="section-title">Client Information</div>
                              <div class="grid">
                                <div class="grid-item">
                                  <div class="label">Full Name</div>
                                  <div class="value">${name}</div>
                                </div>
                                <div class="grid-item">
                                  <div class="label">Company / Brand</div>
                                  <div class="value">${company}</div>
                                </div>
                                <div class="grid-item">
                                  <div class="label">Email Address</div>
                                  <div class="value"><a href="mailto:${email}" style="color: #FF5A1F; text-decoration: none;">${email}</a></div>
                                </div>
                                <div class="grid-item">
                                  <div class="label">Phone Number</div>
                                  <div class="value"><a href="tel:${phone}" style="color: #1B2450; text-decoration: none;">${phone}</a></div>
                                </div>
                              </div>

                              <div class="section-title">Project Details & Description</div>
                              <div class="message-box">${message}</div>
                            </div>
                            <div class="footer">
                              <p class="footer-text">This inquiry was securely generated via Creoviz Web Client Project Form.</p>
                            </div>
                          </div>
                        </div>
                      </body>
                    </html>
                  `;

                  const textContent = `
CREOVIZ GRAPHICS STUDIO - PROJECT BRIEFING
Service: ${service}

CLIENT INFORMATION:
- Name: ${name}
- Company: ${company}
- Email: ${email}
- Phone: ${phone}

PROJECT BRIEF:
${message}
                  `.trim();

                  // Call Resend REST API
                  const resendResponse = await fetch('https://api.resend.com/emails', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${resendApiKey}`,
                      'User-Agent': 'creoviz-graphics-studio/1.0',
                    },
                    body: JSON.stringify({
                      from: fromEmail,
                      to: [toEmail],
                      subject: subject,
                      html: htmlContent,
                      text: textContent,
                    }),
                  });

                  if (!resendResponse.ok) {
                    const errorData = await resendResponse.json() as any;
                    console.error('Local API - Resend API error:', errorData);
                    res.statusCode = resendResponse.status;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: errorData.message || 'Failed to send email via Resend.' }));
                    return;
                  }

                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true, message: 'Inquiry sent successfully!' }));
                } catch (err: any) {
                  console.error('Local API - Error handling /api/contact:', err);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: err.message || 'Internal Server Error' }));
                }
              });
              return;
            }
            next();
          });
        }
      }
    ],
  }
})
