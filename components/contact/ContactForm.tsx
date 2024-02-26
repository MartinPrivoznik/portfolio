"use client";

import { Reveal } from "../animations/Reveal";
import { useState } from "react";
import { ContactFormType } from "@/types";
import { sendContactEmail } from "@/app/actions";
import { ContactFormInputs } from "./Form";
import { EmailSentView } from "./EmailSentView";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [showEmailSentView, setShowEmailSentView] = useState(false);
  const [errorSendingEmail, setErrorSendingEmail] = useState(false);

  const handleSubmit = async (values: ContactFormType) => {
    setLoading(true);
    const res = await sendContactEmail(values);
    if (res) {
      setShowEmailSentView(true);
      setErrorSendingEmail(false);
    } else {
      setErrorSendingEmail(true);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[1000px] mt-8 px-10">
      <Reveal fullWidth>
        {!showEmailSentView && (
          <ContactFormInputs
            loading={loading}
            errorSendingEmail={errorSendingEmail}
            handleSubmit={handleSubmit}
          />
        )}
      </Reveal>
      {showEmailSentView && (
        <EmailSentView setShowEmailSentView={setShowEmailSentView} />
      )}
    </div>
  );
};
