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

                  const serviceId = env.VITE_EMAILJS_SERVICE_ID;
                  const templateId = env.VITE_EMAILJS_TEMPLATE_ID;
                  const publicKey = env.VITE_EMAILJS_PUBLIC_KEY;
                  const privateKey = env.EMAILJS_PRIVATE_KEY;

                  if (!serviceId || !templateId || !publicKey) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: 'Email service configuration is missing on the server.' }));
                    return;
                  }

                  // Call EmailJS REST API
                  const emailJsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      service_id: serviceId,
                      template_id: templateId,
                      user_id: publicKey,
                      accessToken: privateKey || undefined,
                      template_params: {
                        full_name: name,
                        company: company,
                        email: email,
                        phone: phone,
                        service: service || 'Other',
                        project_details: message,
                      },
                    }),
                  });

                  if (!emailJsResponse.ok) {
                    const errorText = await emailJsResponse.text();
                    console.error('Local API - EmailJS API error:', errorText);
                    res.statusCode = emailJsResponse.status;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: `Failed to send email via EmailJS: ${errorText}` }));
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
