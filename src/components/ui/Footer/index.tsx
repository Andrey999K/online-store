import { FooterDesktop } from "@/components/ui/FooterDesktop";
import { FooterMobile } from "@/components/ui/FooterMobile";
import React from "react";

export const Footer: React.FC = () => {
  const isMobile = window.innerWidth <= 1024;
  return isMobile ? <FooterMobile /> : <FooterDesktop />;
};
