"use server";

import { Resend } from "resend"
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  if(!validateString(email, 500)) {
    return {
      error: "Invalid email address"
    }
  }

  if(!validateString(message, 5000)) {
    return {
      error: "Invalid message"
    }
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'conorbowles2000@gmail.com',
      subject: `Message from ${email}`,
      reply_to: email as string,
      text: message as string
    });
  } catch (error) {
    console.log(error);
  }
}