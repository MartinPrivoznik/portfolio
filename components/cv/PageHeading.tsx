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

export const CvPageHeading = () => {
  const [postHeadingText, setPostHeadingText] = useState<string | undefined>(
    "[.pdf]"
  );
  const [subHeadingText, setSubHeadingText] = useState<string>(
    "So I don't have to send you an email with that PDF file"
  );
  const modal = useDisclosure();

  const toggleRickRoll = () => {
    modal.onOpen();
    setSubHeadingText("What did you think? Go ahead and watch this page");
    setPostHeadingText(undefined);
  };

  return (
    <>
      <SubpageHeader
        heading="CV"
        subheading={subHeadingText}
        imgSrc="/images/cv-hero-min.png"
        imgWidth={430}
        imgHeight={300}
        pngImg
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
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
