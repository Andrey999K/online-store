import React from "react";
import { BadgeProduct } from "@/components/common/Badge";
import { ButtonBuy } from "@/components/ui/ButtonBuy";
import { Icon } from "@/components/common/Icon";
import { Price } from "@/components/ui/Price";
import { Link } from "react-router-dom";
import { Rating } from "@/components/ui/Rating";
import { FavoritesButton } from "@/components/ui/Bookmark";
import { CardProps } from "@/types";
import { useCard } from "@/hooks/useCard.ts";

const InnerCardRow: React.FC<CardProps> = ({ product }) => {
  const {
    id,
    name,
    price,
    discount,
    oldPrice,
    badges,
    rating,
    reviewsNumber,
    handlerLoadImageError
  } = useCard(product);
  return (
    <div className="self-start w-full hover:shadow-2xl duration-300 z-10 md:max-w-full xl:max-w-full">
      <Link
        to={`/product/${id}`}
        className="group relative rounded flex gap-3 max-w-full w-full flex-row p-6"
      >
        <div className="lg:min-w-[200px] relative pt-8 min-w-[200px]">
          <div className="flex gap-2 flex-wrap pr-5 absolute top-0">
            {!!badges.length &&
              badges.map(badge => (
                <BadgeProduct
                  key={badge.id}
                  text={badge.text}
                  type={badge.type}
                />
              ))}
          </div>
          <div className="w-auto rounded-2xl overflow-hidden">
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
        <div className="flex flex-col w-full gap-1 h-full">
          <div className="flex items-center gap-3">
            {!!reviewsNumber && (
              <>
                <Rating rating={rating} />
                <div className="flex items-center gap-1">
                  <Icon
                    name="review"
                    className="text-gray-400 w-[16px] h-[16px]"
                  />
                  <span>{reviewsNumber}</span>
                </div>
              </>
            )}
          </div>
          <div className="order-[-1] line-clamp-3 hover:text-sky-500 max-w-[400px]">
            {name}
          </div>
          <div className="text-sm max-w-[400px]">
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
          <div
            className={
              "mt-auto flex flex-col gap-1" + (discount ? "" : " pt-4")
            }
          >
            <div className="absolute bottom-6 right-6 flex justify-between">
              <div className="relative bottom-12 order-[-1]">
                <Price
                  price={price}
                  oldPrice={oldPrice}
                  discount={discount}
                  hover
                />
              </div>
              <div>
                <div className="top-[-260px] absolute right-4">
                  <FavoritesButton product={product} />
                </div>
                <div className="bottom-0 right-0 absolute">
                  <ButtonBuy product={product} />
                </div>
              </div>
            </div>
            <div className="text-sm">
              <div>
                В наличии{" "}
                <span className="underline font-medium cursor-pointer hover:text-sky-500">
                  в 20 магазинах
                </span>
              </div>
              <div>
                Привезём{" "}
                <span className="underline font-medium cursor-pointer hover:text-sky-500">
                  в 500 пунктов
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const CardRow = React.memo(InnerCardRow);
