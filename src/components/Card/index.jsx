import React from "react";
import Badge from "../Badge";
import ButtonBuy from "../UI/ButtonBuy";
import PropTypes from "prop-types";
import Icon from "../UI/Icon";
import Price from "../Price";
import Bookmark from "../Bookmark";
import "./card.scss";

const Card = ({ id, name, price, discount, oldPrice, listBadges, reviewsNumber, rating }) => {
  return (
    <a href="#" className="group relative pt-2 px-4 pb-4 rounded flex flex-col gap-3 max-w-[230px] hover:shadow-2xl ease-out duration-300 card">
      <div className="min-w-[200px] relative pt-8">
        <div className="flex gap-2 flex-wrap pr-5 absolute top-0">
          {
            listBadges.map(badge =>
              <Badge key={badge.id} text={badge.text} type={badge.name} />
            )
          }
        </div>
        <div className="h-[150px]">
          {id && (
            <img className="w-full h-full object-contain mx-auto" src={`https://thumb.cloud.mail.ru/weblink/thumb/xw1/9Q7k/wEByutoNc/${id}.jpg`} alt="Ноутбук" />
          )}
        </div>
      </div>
      <div className="card__info gap-1 h-full flex flex-col">
        <div className="flex items-center gap-3">
          {!!reviewsNumber && (
            <>
              <div className="flex items-center gap-1">
                <Icon name="star" className="text-sky-500 w-[16px] h-[16px]" />
                <span>{rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="review" className="text-gray-400 w-[16px] h-[16px]" />
                <span>{reviewsNumber}</span>
              </div>
            </>
          )}
        </div>
        <div className="card__info-name line-clamp-3 hover:text-sky-500">{name}</div>
        <div className="card__info-description hidden text-sm">
          Экран: 16; 1920х1200; IPS;<br/>
          Процессор: Intel Core i7 12700H 2.3 ГГц (4.7 ГГц, в режиме Turbo)<br/>
          Графический процессор: Intel Iris Xe graphics ;<br/>
          Оперативная память 16 ГБ, LPDDR4x;<br/>
          Диск: SSD 512 ГБ;<br/>
          Операционная система: Windows 11 Home;<br/>
          Клавиатура: с русскими буквами
        </div>
        <div className={"mt-auto flex flex-col gap-1" + (discount ? "" : " pt-4")}>
          <div className="card__info-bottom flex justify-between relative">
            <div className="card__info-price">
              <Price price={price} oldPrice={oldPrice} discount={discount}/>
            </div>
            <div>
              <div className="card__bookmark absolute right-0 top-[-286px] cursor-pointer text-gray-400 hover:text-sky-500">
                <Bookmark status={false}/>
              </div>
              <div className="card__button-buy absolute right-0 bottom-0">
                <ButtonBuy />
              </div>
            </div>
          </div>
          <div className="text-sm">
            <div>В наличии <span className="underline font-medium cursor-pointer hover:text-sky-500">в 20 магазинах</span></div>
            <div>Привезём <span className="underline font-medium cursor-pointer hover:text-sky-500">в 500 пунктов</span></div>
          </div>
        </div>
      </div>
    </a>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
  discount: PropTypes.number,
  listBadges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  reviewsNumber: PropTypes.number,
  rating: PropTypes.number
};

export default Card;
