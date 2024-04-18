import { FooterDesktop } from "../FooterDesktop";
import { FooterMobile } from "../FooterMobile";
import React from "react";

export const Footer: React.FC = () => {
  const isMobile = window.innerWidth <= 1024;
  return isMobile ? <FooterMobile /> : <FooterDesktop />;
};
