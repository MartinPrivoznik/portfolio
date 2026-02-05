"use client";

import { useState } from "react";
import { SubpageHeader } from "../shared/SubpageHeader";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useTranslation } from "@/app/i18n/client";

export const CvPageHeading = (props: { lang: string }) => {
  const { t } = useTranslation(props.lang);
  const [postHeadingText, setPostHeadingText] = useState<string | undefined>(
    "[.pdf]",
  );
  const [subHeadingText, setSubHeadingText] = useState<string>(
    t("soIDontHaveToSendPdf"),
  );
  const modal = useDisclosure();

  const toggleRickRoll = () => {
    modal.onOpen();
    setSubHeadingText(t("whatDidYouThinkGoWatchThisPage"));
    setPostHeadingText(undefined);
  };

  return (
    <>
      <SubpageHeader
        heading={t("cv")}
        subheading={subHeadingText}
        imgSrc="/images/about/1-min.webp"
        imgWidth={430}
        imgHeight={300}
        postHeadingText={postHeadingText}
        postHeadingClickAction={toggleRickRoll}
      />
      <Modal isOpen={modal.isOpen} onOpenChange={modal.onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Brrrrrrrr
              </ModalHeader>
              <ModalBody>
                <iframe
                  className="w-full h-[350px] sm:h-[500px]"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  {t("close")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
