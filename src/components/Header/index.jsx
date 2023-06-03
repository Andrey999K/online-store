import React from "react";
import PropTypes from "prop-types";
import HeaderDesktop from "../HeaderDesktop";
import HeaderMobile from "../HeaderMobile";

const Header = ({ search, onSearch }) => {
  const isMobile = window.innerWidth <= 1024;
  console.log(isMobile);
  const navItems = [
    { id: 1, text: "Журнал" },
    { id: 2, text: "Акции" },
    { id: 3, text: "Logo.Бизнес" },
    { id: 4, text: "Конфигуратор" },
    { id: 5, text: "Доставка" },
    { id: 6, text: "Магазины" },
    { id: 7, text: "Обратная связь" }];
  return (
    isMobile
      ? <HeaderMobile navItems={navItems} city="Павловский Посад" phone="+79998887766" />
      : <HeaderDesktop navItems={navItems} city="Павловский Посад" phone="+79998887766" />
  );
};

Header.propTypes = {
  search: PropTypes.string,
  onSearch: PropTypes.func
};

export default Header;
