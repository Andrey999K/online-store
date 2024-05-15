import React from "react";
import { Link } from "react-router-dom";
import { CardProps } from "@/types";
import { BadgeProduct } from "@/components/common/Badge";
import { Rating } from "@/components/ui/Rating";
import { Icon } from "@/components/common/Icon";
import { Price } from "@/components/ui/Price";
import { FavoritesButton } from "@/components/ui/Bookmark";
import { ButtonBuy } from "@/components/ui/ButtonBuy";
import { useCard } from "@/hooks/useCard.ts";

const InnerCardGrid: React.FC<CardProps> = ({ product }) => {
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
    <div className="self-start w-full hover:shadow-2xl duration-300 z-10 xl:max-w-[25%] md:max-w-[33%]">
      <Link
        to={`/product/${id}`}
        className="group relative pb-4 pt-2 px-4 rounded flex flex-col gap-3"
      >
        <div className="lg:min-w-[200px] relative pt-8">
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
        <div className="gap-1 h-full flex flex-col">
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
          <div className="line-clamp-3 hover:text-sky-500">{name}</div>
          <div
            className={
              "mt-auto flex flex-col gap-1" + (discount ? "" : " pt-4")
            }
          >
            <div className="flex justify-between">
              <div>
                <Price
                  price={price}
                  oldPrice={oldPrice}
                  discount={discount}
                  hover
                />
              </div>
              <div>
                <div className="absolute right-4 top-4">
                  <FavoritesButton product={product} />
                </div>
                <div className="absolute right-4 lg:bottom-[56px]">
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

export const CardGrid = React.memo(InnerCardGrid);
