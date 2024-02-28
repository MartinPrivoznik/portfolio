"use client";

import { Link } from "@nextui-org/link";
import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-3">
      <div className="w-full flex items-center justify-center">
        <span className="text-default-600">
          Copyright © {new Date().getFullYear()}
        </span>
        <Link href="/" className="text-primary pl-1">
          {" "}
          Martin Přívozník
        </Link>
      </div>
      <div className="flex gap-3 mt-3">
        <FacebookShareButton url={"https://privoznik.dev"}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <RedditShareButton url={"https://privoznik.dev"}>
          <RedditIcon size={32} round />
        </RedditShareButton>
        <WhatsappShareButton url={"https://privoznik.dev"}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <LinkedinShareButton url={"https://privoznik.dev"}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton url={"https://privoznik.dev"}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    </footer>
  );
};
