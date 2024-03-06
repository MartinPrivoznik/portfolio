import { Button } from "@nextui-org/button";
import { Reveal } from "../animations/Reveal";
import { subtitle } from "../primitives";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "@/app/i18n/client";

export const EmailSentView = (props: {
  setShowEmailSentView: Dispatch<SetStateAction<boolean>>;
  lang: string;
}) => {
  const { t } = useTranslation(props.lang);
  return (
    <div className="flex flex-col items-center w-full max-w-[600px] mt-8 px-10">
      <Reveal fullWidth>
        <div className="flex flex-col w-full items-center">
          <h2 className={subtitle({ class: "mt-2 text-center" })}>
            {t("messageSentAlert1")} <br />
            {t("messageSentAlert2")}
          </h2>
          <Button
            className="max-w-[200px] mt-3"
            color="primary"
            onClick={() => props.setShowEmailSentView(false)}
          >
            {t("sendNextEmail")}
          </Button>
        </div>
      </Reveal>
    </div>
  );
};
