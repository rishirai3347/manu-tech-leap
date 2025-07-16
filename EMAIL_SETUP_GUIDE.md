# EmailJS Setup Guide for VEEKDAYS Contact Form

## Overview
Your contact form is now configured to send emails using EmailJS, a service that allows you to send emails directly from your frontend without needing a backend server.

## Step-by-Step Setup Instructions

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (you'll need this)

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```html
Subject: New Demo Request from {{from_name}} - {{company}}

Hello VEEKDAYS Team,

You have received a new demo request with the following details:

**Contact Information:**
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Company: {{company}}

**Business Details:**
- Industry: {{industry}}
- Company Size: {{employees}}
- Current Systems: {{current_systems}}

**Requirements:**
- Main Challenges: {{challenges}}
- Solutions Interested In: {{solutions}}
- Timeline: {{timeline}}
- Budget: {{budget}}

**Additional Message:**
{{message}}

---
This request was submitted through the VEEKDAYS website contact form.
```

4. Save the template and note down your **Template ID**

### 4. Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### 5. Update Configuration
1. Open `src/lib/emailService.ts`
2. Replace the placeholder values with your actual IDs:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

### 6. Test the Form
1. Start your development server: `npm run dev`
2. Go to the demo page
3. Fill out the form and submit
4. Check your email (support@veekdays.com) for the new request

## EmailJS Free Plan Limits
- 200 emails per month
- 2 email templates
- 1 email service

## Alternative Options

### Option 2: Formspree (Even Simpler)
If you prefer an even simpler setup:

1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Replace the form action with your Formspree endpoint
5. No additional configuration needed

### Option 3: Netlify Forms (If Deploying to Netlify)
If you plan to deploy to Netlify:
1. Add `data-netlify="true"` to your form
2. Netlify will automatically handle form submissions
3. You'll receive emails for each submission

## Troubleshooting

### Common Issues:
1. **"Service not found"** - Check your Service ID
2. **"Template not found"** - Check your Template ID  
3. **"Invalid public key"** - Check your Public Key
4. **Emails not sending** - Check browser console for errors

### Testing:
- Use the EmailJS dashboard to test your template
- Check the browser console for any JavaScript errors
- Verify all IDs are correctly copied

## Security Notes
- The Public Key is safe to expose in frontend code
- EmailJS handles the email sending securely
- No sensitive credentials are stored in your code

## Next Steps
Once configured, every form submission will automatically send an email to support@veekdays.com with all the form details, allowing you to respond to potential clients quickly and efficiently. 