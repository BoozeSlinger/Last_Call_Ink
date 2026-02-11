import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey && process.env.NODE_ENV === 'production') {
  console.warn('⚠️ RESEND_API_KEY is missing. Email notifications will not work.');
}

export const resend = new Resend(apiKey || 're_placeholder_for_build');
