import { FooterDesktop } from "../FooterDesktop";
import { FooterMobile } from "../FooterMobile";

export const Footer = () => {
  const isMobile = window.innerWidth <= 1024;
  return isMobile ? <FooterMobile /> : <FooterDesktop />;
};
