import { Logo } from "../Logo";
import { Contracts } from "../Contacts";
import { Navigation } from "../Navigation";
import { HeaderCatalog } from "../HeaderCatalog";
import { ControlButton } from "../../common/ControlButton";
import { LinkWishlist } from "../LinkWishlist";
import { LinkCart } from "../LinkCart";
import { Wrapper } from "../../common/Wrapper";
import React, { useEffect } from "react";
import { HeaderProps } from "../../../types";

export const HeaderDesktop: React.FC<HeaderProps> = ({
  navItems,
  city,
  phone
}) => {
  const addShadowBottomHeader = () => {
    const stickyElement: HTMLElement | null =
      document.querySelector(".bottom-header");
    if (!stickyElement) return; // Проверяем, что элемент был найден

    if (stickyElement.getBoundingClientRect().top === 0) {
      stickyElement.classList.add("shadow-sm");
    } else {
      stickyElement.classList.remove("shadow-sm");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", addShadowBottomHeader);
    return () => {
      window.removeEventListener("scroll", addShadowBottomHeader);
    };
  }, []);
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
      <div className="hidden lg:block sticky top-0 bg-white z-[9999] bottom-header">
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
