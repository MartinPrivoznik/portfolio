"use server";

import { ContactFormType } from "@/types";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendContactEmail(
  formData: ContactFormType
): Promise<boolean> {
  const message = {
    to: "marprivoznik@gmail.com",
    from: "marprivoznik@gmail.com",
    subject: "Message from " + formData.fullName,
    text: `${formData.fullName} (${formData.email}) sent you a message from portfolio: ${formData.text}`,
  };

  try {
    const res = await sgMail.send(message);
    if (res) return true;
  } catch {
    return false;
  }
  return false;
}
