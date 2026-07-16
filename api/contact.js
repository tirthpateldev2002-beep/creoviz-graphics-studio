export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, company, email, phone, service, message } = req.body;

    if (!name || !company || !email || !phone || !message) {
      return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    const serviceId = process.env.EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY; // Optional private key / access token

    if (!serviceId || !templateId || !publicKey) {
      return res.status(500).json({
        error: 'Email service configuration is missing on the server.',
      });
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
      console.error('EmailJS API error response:', errorText);
      return res.status(emailJsResponse.status).json({
        error: `Failed to send email via EmailJS: ${errorText}`,
      });
    }

    return res.status(200).json({ success: true, message: 'Inquiry sent successfully!' });
  } catch (error) {
    console.error('Serverless contact handler error:', error);
    return res.status(500).json({
      error: error.message || 'An internal error occurred while processing your request.',
    });
  }
}
