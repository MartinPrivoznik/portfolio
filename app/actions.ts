/* eslint-disable react-hooks/rules-of-hooks */
"use server";
import nodemailer from "nodemailer";

import { ContactFormType } from "@/types";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import Mail from "nodemailer/lib/mailer";
import { useTranslation } from "./i18n";
import { contactFormValidationSchema } from "@/validators/contactFormValidationSchema";

export async function sendContactEmail(
  formData: ContactFormType
): Promise<boolean> {
  const { t } = await useTranslation("en");
  const schema = contactFormValidationSchema(t);
  const isValid = await schema.isValid(formData);

  if (!isValid) return false;

  console.log("Email request received: ", formData);

  const smtpConfig: SMTPTransport.Options = {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_AUTH_USER,
      pass: process.env.SMTP_AUTH_SECRET,
    },
  };

  const transport = nodemailer.createTransport(smtpConfig);
  const transportVerified = await transport.verify();

  if (!transportVerified) return false;

  const message: Mail.Options = {
    to: process.env.CONTACT_EMAIL,
    from: process.env.SMTP_AUTH_USER,
    subject: "Message from " + formData.fullName,
    text: `${formData.fullName} (${formData.email}) sent you a message from portfolio:\n${formData.text}`,
  };

  try {
    const res = await transport.sendMail(message);
    if (res.accepted) {
      transport.close();
      return true;
    }
  } catch (error) {
    console.log(error);
    transport.close();
  }
  return false;
}
