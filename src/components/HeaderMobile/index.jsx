import React, { useState } from "react";
import Logo from "../Logo";
import PropTypes from "prop-types";
import Icon from "../UI/Icon";
import Navigation from "../Navigation";
import Contracts from "../Contacts";

const HeaderMobile = ({ navItems, city, phone }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    document.body.style.overflow = "hidden";
    setMenuOpen(true);
  };
  const closeMenu = () => {
    document.body.style.overflow = "scroll";
    setMenuOpen(false);
  };
  return (
    <header className="bg-white z-10 relative">
      <div className="w-full max-w-screen-xl px-5 lg:px-8 mx-auto">
        <div className="flex items-center justify-between py-5">
          <button
            className="hover:text-sky-500"
            onClick={openMenu}
          >
            <Icon name="burger" />
          </button>
          <Logo />
          <button className="hover:text-sky-500">
            <Icon name="search" />
          </button>
        </div>
      </div>
      <div className={
        (menuOpen ? "translate-x-[425px] " : "translate-x-0 ") + "duration-300 p-8 absolute top-0 left-[-425px] w-full h-screen max-w-[425px] border-solid border-2 bg-white h-screen"
      }>
        <button
          className="mx-[-2px] my-[-7px] hover:text-sky-500"
          onClick={closeMenu}
        >
          <Icon name="close" />
        </button>
        <div className="mt-10 flex flex-col gap-6">
          <Contracts city={city} phone={phone} />
          <Navigation items={navItems}/>
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
