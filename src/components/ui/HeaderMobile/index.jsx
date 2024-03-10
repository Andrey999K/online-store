import React, { useState } from "react";
import Logo from "../Logo";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Navigation from "../Navigation";
import Contracts from "../Contacts";
import Wrapper from "../../common/Wrapper";

const HeaderMobile = ({ navItems, city, phone }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    document.body.style.overflow = "hidden";
    setMenuOpen(true);
  };
  const closeMenu = () => {
    document.body.style.overflow = "auto";
    setMenuOpen(false);
  };
  return (
    <header className="bg-white z-[9999] sticky top-0 shadow">
      <Wrapper>
        <div className="flex items-center justify-between py-5">
          <button className="hover:text-sky-500" onClick={openMenu}>
            <Icon name="burger" />
          </button>
          <Logo />
          <button className="hover:text-sky-500">
            <Icon name="search" />
          </button>
        </div>
      </Wrapper>
      <div
        className={`${menuOpen ? "fixed inset-0 bg-white/50" : ""} duration-300 background-menu`}
        onClick={closeMenu}
      ></div>
      <div
        className={
          (menuOpen ? "translate-x-[425px] " : "translate-x-0 ") +
          "duration-300 px-5 py-8 absolute top-0 left-[-425px] w-full h-[100dvh] max-w-[425px] border-solid border-2 bg-white z-50 menu"
        }
      >
        <button className="mx-[-2px] my-[-7px] hover:text-sky-500 close-menu" onClick={closeMenu}>
          <Icon name="close" />
        </button>
        <div className="mt-10 flex flex-col gap-3">
          <Contracts city={city} phone={phone} />
          <Navigation items={navItems} />
        </div>
      </div>
    </header>
  );
};

HeaderMobile.propTypes = {
  navItems: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default HeaderMobile;
