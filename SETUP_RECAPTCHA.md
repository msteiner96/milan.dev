# Setting Up Google reCAPTCHA

The contact form now includes Google reCAPTCHA v2 for spam protection and sends emails via Resend.

## Steps to Complete Setup:

### 1. Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "+" to create a new site
3. Fill in the form:
   - **Label**: milan.dev (or any name you prefer)
   - **reCAPTCHA type**: Select "reCAPTCHA v2" → "I'm not a robot" Checkbox
   - **Domains**: Add your domains:
     - `localhost` (for development)
     - `milan.dev` (your production domain)
     - Any other domains you'll use
4. Accept the terms and click "Submit"
5. You'll receive two keys:
   - **Site Key** (public key - used in the frontend)
   - **Secret Key** (private key - used in the backend)

### 2. Update Environment Variables

Open your `.env.local` file and replace the placeholder values:

```env
RESEND_API_KEY=re_ieGToGph_Ekkx63bW7AHKNw39LYJqY3AD

# Replace these with your actual reCAPTCHA keys:
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_actual_site_key_here
RECAPTCHA_SECRET_KEY=your_actual_secret_key_here
```

### 3. Restart Your Development Server

After updating the `.env.local` file, restart your Next.js development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart it
npm run dev
```

## Testing

1. Navigate to the contact form on your site
2. Fill in the form fields
3. Complete the reCAPTCHA challenge
4. Submit the form
5. You should receive an email at steiner.milan@hotmail.com

## Important Notes

- **Development**: reCAPTCHA works on localhost without any special configuration
- **Production**: Make sure to add your production domain to the reCAPTCHA admin console
- **Email Sender**: Currently using Resend's default sender `onboarding@resend.dev`
  - To use a custom domain, you'll need to verify your domain in Resend
  - See: https://resend.com/docs/dashboard/domains/introduction

## Security

- Never commit your `.env.local` file to git (it's already in .gitignore)
- The Resend API key and reCAPTCHA secret key should remain private
- Only the `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is safe to expose in the frontend

## Troubleshooting

### reCAPTCHA not showing:
- Check that `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set in `.env.local`
- Verify the site key is correct
- Make sure your domain is registered in reCAPTCHA admin

### Emails not sending:
- Verify your Resend API key is correct
- Check the browser console and server logs for errors
- Ensure the API route at `/api/contact` is accessible

### "Captcha verification failed":
- Check that `RECAPTCHA_SECRET_KEY` is set correctly in `.env.local`
- Verify the secret key matches your site key
