import React from "react";
import FooterDesktop from "../FooterDesktop";
import FooterMobile from "../FooterMobile";

const Footer = () => {
  const isMobile = window.innerWidth <= 1024;
  return isMobile ? <FooterMobile /> : <FooterDesktop />;
};

export default Footer;
