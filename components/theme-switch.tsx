"use client";

import { FC } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { useTranslation } from "@/app/i18n/client";
import Image from "next/image";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
  lang: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
  lang,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();
  const { t } = useTranslation(lang);

  const youMonsterModal = useDisclosure();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    if (theme === "dark") {
      youMonsterModal.onOpen();
    }
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light" || isSSR,
    "aria-label": `Switch to ${
      theme === "light" || isSSR ? "dark" : "light"
    } mode`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer",
          className,
          classNames?.base
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-500",
              "pt-px",
              "px-0",
              "mx-0",
            ],
            classNames?.wrapper
          ),
        })}
      >
        {!isSelected || isSSR ? (
          <SunFilledIcon size={22} />
        ) : (
          <MoonFilledIcon size={22} />
        )}
      </div>
      <Modal
        isOpen={youMonsterModal.isOpen}
        onOpenChange={youMonsterModal.onOpenChange}
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="px-0 py-6">
                  <Image
                    src={"/images/memes/youmonster.webp"}
                    alt="youmonster"
                    className=""
                    width={639}
                    height={337}
                    priority={true}
                  />
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </Component>
  );
};
