import React from "react";
import Icon from "../UI/Icon";

const Footer = () => {
  return (
    <footer className="bg-sky-500 text-white py-8">
      <div className="max-w-screen-xl w-full mx-auto px-8">
        <div className="flex justify-center gap-10 w-full">
          <nav className="flex gap-10 w-full">
            <ul className="flex flex-col max-h-32 flex-wrap gap-x-40">
              <li>
                <a className="hover:underline" href="#">О компании</a>
              </li>
              <li>
                <a className="hover:underline" href="#">Вакансии</a>
              </li>
              <li>
                <a className="hover:underline" href="#">Акции</a>
              </li>
              <li>
                <a className="hover:underline" href="#">Каталог</a>
              </li>
              <li>
                <a className="hover:underline" href="#">Блог</a>
              </li>
              <li>
                <a className="hover:underline" href="#">Часто задаваемые вопросы</a>
              </li>
              <li>
                <a className="hover:underline" href="#">Как оформить заказ</a>
              </li>
              <li>
                <a className="hover:underline" href="#">Оплата</a>
              </li>
              <li>
                <a className="hover:underline" href="#">Кредиты</a>
              </li>
              <li>
                <a className="hover:underline" href="#">Доставка</a>
              </li>
              <li>
                <a className="hover:underline" href="#">Статус заказа</a>
              </li>
              <li>
                <a className="hover:underline" href="#">Возврат товаров</a>
              </li>
              <li>
                <a className="hover:underline" href="#">Обратная связь</a>
              </li>
            </ul>
          </nav>
          <div>
            <ul className="flex gap-8 items-center">
              <li>
                <a href="https://t.me/Andrey_Kutuzovv" target="_blank" rel="noopener noreferrer">
                   <Icon name="telegram" className="w-[40px] h-[40px] text-sky-800 hover:text-white duration-200 ease-out" />
                </a>
              </li>
              <li>
                <a href="https://vk.com/andrey999k" target="_blank" rel="noopener noreferrer">
                   <Icon name="vk" className="w-[40px] h-[40px] text-sky-800 hover:text-white duration-200 ease-out" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCyJBQMheyhWfoUIDvPn9bhg" target="_blank" rel="noopener noreferrer">
                  <Icon name="youtube" className="w-[40px] h-[40px] text-sky-800 hover:text-white duration-200 ease-out" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 text-xs flex flex-col items-center">
          <p>Компания Logo © 2023</p>
          <p className="hover:underline"><a href="/privacy-policy">Политика конфиденциальности</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
