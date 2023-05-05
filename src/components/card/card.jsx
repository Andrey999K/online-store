import React from "react";
import Badge from "../badge/badge";
import ButtonBuy from "../UI/buttonBuy/buttonBuy";
import PropTypes from "prop-types";
import Icon from "../UI/icon/icon";
import Price from "../price/price";
import Bookmark from "../bookmark/bookmark";

const Card = ({ id, name, price, oldPrice, listBadges, reviewsNumber, rate }) => {
  return (
    <a href="#" className="relative pt-2 px-4 pb-4 rounded flex flex-col gap-2 max-w-[230px] hover:shadow-2xl ease-out duration-300">
      <div className="flex gap-2 flex-wrap pr-5">
        {
          listBadges.map(badge =>
            <Badge key={badge.id} text={badge.text} type={badge.name} />
          )
        }
      </div>
      <div>
        {id && (
          <img src={`https://thumb.cloud.mail.ru/weblink/thumb/xw1/9Q7k/wEByutoNc/${id}.jpg`} alt="текст" />
        )}
      </div>
      <div className="flex items-center gap-3">
        {!!reviewsNumber && (
          <>
            <div className="flex items-center gap-1">
              <Icon name="star" className="text-sky-500 w-[16px] h-[16px]" />
              <span>{rate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="review" className="text-gray-400 w-[16px] h-[16px]" />
              <span>{reviewsNumber}</span>
            </div>
          </>
        )}
      </div>
      <div className="line-clamp-3 hover:text-sky-500">{name}</div>
      <div className="flex justify-between relative">
        <Price price={price} oldPrice={oldPrice}/>
        <div>
          <div className="absolute right-0 top-[-255px] cursor-pointer text-gray-400 hover:text-sky-500">
            <Bookmark status={false}/>
          </div>
          <div className="absolute right-0 bottom-0">
            <ButtonBuy />
          </div>
        </div>
      </div>
      <div className="text-sm">
        <div>В наличии <span className="underline font-medium cursor-pointer hover:text-sky-500">в 20 магазинах</span></div>
        <div>Привезём <span className="underline font-medium cursor-pointer hover:text-sky-500">в 500 пунктов</span></div>
      </div>
    </a>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
  listBadges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  reviewsNumber: PropTypes.number,
  rate: PropTypes.number
};

Card.defaultProps = {};

export default Card;
