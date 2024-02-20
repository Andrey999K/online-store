import React from "react";
import Badge from "../Badge";
import ButtonBuy from "../UI/ButtonBuy";
import PropTypes from "prop-types";
import Icon from "../UI/Icon";
import Price from "../Price";
import Bookmark from "../Bookmark";
import "./card.scss";
import { Link } from "react-router-dom";
import Rating from "../Rating";

const Card = ({ product, inGrid }) => {
  const { id, name, price, discount, oldPrice, badges, reviews, ratingProduct: rating } = product;
  const reviewsNumber = reviews.length;
  const handlerLoadImageError = e => {
    e.target.classList.add("opacity-0");
    e.target.parentElement.classList.add("bg-black/5");
  };
  return (
    <div
      className={`self-start w-full hover:shadow-2xl duration-300 z-10 max-w-[50%] md:max-w-[33%] ${
        inGrid ? "xl:max-w-[25%]" : "md:max-w-full xl:max-w-full"
      }`}
    >
      <Link
        to={`${process.env.PUBLIC_URL}/product/${id}`}
        className="group relative pb-4 pt-2 px-4 rounded flex flex-col gap-3 card"
      >
        <div className={`lg:min-w-[200px] relative pt-8${inGrid ? "" : " min-w-[200px]"}`}>
          <div className="flex gap-2 flex-wrap pr-5 absolute top-0">
            {!!badges.length && badges.map(badge => <Badge key={badge.id} text={badge.text} type={badge.name} />)}
          </div>
          <div className="h-[150px] lg:h-[150px] w-auto rounded-2xl overflow-hidden">
            {id && (
              <img
                className="w-full h-full object-contain mx-auto"
                src={`https://thumb.cloud.mail.ru/weblink/thumb/xw1/9Q7k/wEByutoNc/${id}.jpg`}
                alt="Ноутбук"
                onError={handlerLoadImageError}
              />
            )}
          </div>
        </div>
        <div className="card__info gap-1 h-full flex flex-col">
          <div className="flex items-center gap-3">
            {!!reviewsNumber && (
              <>
                <Rating rating={rating} />
                <div className="flex items-center gap-1">
                  <Icon name="review" className="text-gray-400 w-[16px] h-[16px]" />
                  <span>{reviewsNumber}</span>
                </div>
              </>
            )}
          </div>
          <div className="card__info-name line-clamp-3 hover:text-sky-500">{name}</div>
          <div className="card__info-description hidden text-sm">
            Экран: 16; 1920х1200; IPS;
            <br />
            Процессор: Intel Core i7 12700H 2.3 ГГц (4.7 ГГц, в режиме Turbo)
            <br />
            Графический процессор: Intel Iris Xe graphics ;<br />
            Оперативная память 16 ГБ, LPDDR4x;
            <br />
            Диск: SSD 512 ГБ;
            <br />
            Операционная система: Windows 11 Home;
            <br />
            Клавиатура: с русскими буквами
          </div>
          <div className={"mt-auto flex flex-col gap-1" + (discount ? "" : " pt-4")}>
            <div className="card__info-bottom flex justify-between">
              <div className="card__info-price">
                <Price price={price} oldPrice={oldPrice} discount={discount} hover={true} />
              </div>
              <div>
                <div className="card__bookmark absolute right-4 top-4">
                  <Bookmark product={product} />
                </div>
                <div className="card__button-buy absolute right-4 lg:bottom-[56px]">
                  <ButtonBuy min={inGrid} product={product} />
                </div>
              </div>
            </div>
            <div className="text-sm">
              <div>
                В наличии{" "}
                <span className="underline font-medium cursor-pointer hover:text-sky-500">в 20 магазинах</span>
              </div>
              <div>
                Привезём <span className="underline font-medium cursor-pointer hover:text-sky-500">в 500 пунктов</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
  // id: PropTypes.number,
  // name: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
  // oldPrice: PropTypes.number,
  // discount: PropTypes.number,
  // listBadges: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     text: PropTypes.string.isRequired,
  //     name: PropTypes.string.isRequired
  //   })
  // ),
  // reviewsNumber: PropTypes.number,
  // rating: PropTypes.number,
  inGrid: PropTypes.bool
};

export default React.memo(Card);
