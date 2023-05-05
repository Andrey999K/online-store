import React from "react";
import Logo from "../logo/logo";
import Contacts from "../contacts/contacts";
import Navigation from "../navigation/navigation";
import Search from "../search/search";
import Catalog from "../catalog/catalog";
import ControlButton from "../controlButton/controlButton";
import PropTypes from "prop-types";

const Header = ({ search, onSearch }) => {
  const navItems = [
    { id: 1, text: "Журнал" },
    { id: 2, text: "Акции" },
    { id: 3, text: "Logo.Бизнес" },
    { id: 4, text: "Конфигуратор" },
    { id: 5, text: "Доставка" },
    { id: 6, text: "Магазины" },
    { id: 7, text: "Обратная связь" }];
  return (
    <>
      <header className="bg-white z-10">
        <div className="w-full max-w-screen-lg mx-auto">
          <div className="flex items-center justify-between py-5">
            <Logo />
            <Contacts city="Павловский Посад" phone="+79998887766" />
            <Navigation items={navItems}/>
          </div>
        </div>
      </header>
      <div className="sticky top-0 bg-white z-10">
        <div className="w-full max-w-screen-lg mx-auto">
          <div className="py-5 flex justify-between items-center">
            <Catalog />
            <Search search={search} onSearchItem={onSearch}/>
            <div className="flex gap-6">
              <ControlButton icon="user" text="Войти" />
              <ControlButton icon="bookmark" text="Избранное" />
              <ControlButton icon="bar-chart" text="Сравнение" />
              <ControlButton icon="basket" text="Корзина" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  search: PropTypes.string,
  onSearch: PropTypes.func
};

export default Header;
