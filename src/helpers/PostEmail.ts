import { Resend } from 'resend';
import EmailTemplate from '@/components/EmailTemplate';

interface PostParams {
  from: string;
  name: string;
  message: string;
}

interface CreateEmailResponseSuccess {
  id: string;
}

interface ErrorResponse {
  message: string;
}

interface ResendResponse {
  data?: CreateEmailResponseSuccess | null;
  error?: ErrorResponse | null;
}

/**
 * Sends an email using the Resend API.
 * 
 * @param {PostParams} params - The parameters for the email.
 * @param {string} params.from - The sender's email address.
 * @param {string} params.name - The sender's name.
 * @param {string} params.message - The message content.
 * @returns {Promise<Response>} The response from the email sending operation.
 */
export default async function postEmail({ from, name, message }: PostParams): Promise<Response> {
  const RESEND_API_KEY = process.env.NEXT_PUBLIC_RESEND_API_KEY;
  const resend = new Resend(RESEND_API_KEY);

  try {
    const { data, error }: ResendResponse = await resend.emails.send({
      from: `<${from}>`,
      to: ['shibnev.anton@gmail.com'],
      subject: `New message from ${name}`,
      react: EmailTemplate({ name, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
