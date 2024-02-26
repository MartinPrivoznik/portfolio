"use client";

import { Button } from "@nextui-org/button";
import { Reveal } from "../animations/Reveal";
import { subtitle } from "../primitives";
import { Dispatch, SetStateAction } from "react";

export const EmailSentView = (props: {
  setShowEmailSentView: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[600px] mt-8 px-10">
      <Reveal fullWidth>
        <div className="flex flex-col w-full items-center">
          <h2 className={subtitle({ class: "mt-2 text-center" })}>
            Your message has been sent to my inbox! 🎉 <br />
            Now just wait for the answer which will come soon
          </h2>
          <Button
            className="max-w-[200px] mt-3"
            color="primary"
            onClick={() => props.setShowEmailSentView(false)}
          >
            Send next email
          </Button>
        </div>
      </Reveal>
    </div>
  );
};
