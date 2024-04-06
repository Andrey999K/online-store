import React from "react";
import Logo from "../Logo";
import Contracts from "../Contacts";
import Navigation from "../Navigation";
import HeaderCatalog from "../HeaderCatalog";
import ControlButton from "../../common/ControlButton";
import LinkWishlist from "../LinkWishlist";
import LinkCart from "../LinkCart";
import PropTypes from "prop-types";
import Wrapper from "../../common/Wrapper";

const HeaderDesktop = ({ navItems, city, phone }) => {
  return (
    <>
      <header className="bg-white z-10">
        <Wrapper>
          <div className="flex items-center justify-between py-5">
            <Logo />
            <Contracts city={city} phone={phone} />
            <div className="hidden lg:block">
              <Navigation items={navItems} />
            </div>
          </div>
        </Wrapper>
      </header>
      <div className="hidden lg:block sticky top-0 bg-white z-10">
        <Wrapper>
          <div className="py-5 flex justify-between items-center">
            <HeaderCatalog />
            {/* <Search search={search} onSearchItem={onSearch}/> */}
            <div className="flex gap-6">
              <ControlButton icon="user" text="Войти" />
              <LinkWishlist />
              <ControlButton icon="bar-chart" text="Сравнение" />
              <LinkCart />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

HeaderDesktop.propTypes = {
  navItems: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default HeaderDesktop;
