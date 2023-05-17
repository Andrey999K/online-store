import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Price from "../../components/Price";
import ButtonBuy from "../../components/UI/ButtonBuy";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const showProduct = () => {
    if (product) {
      return (
        <div className="pt-8 pb-20 flex flex-col gap-20">
          <div>
            <h2 className="text-2xl">{product.name}</h2>
            <div className="flex gap-10 w-full mt-6">
              <div className="basis-1/2">
                <img className="w-full h-full object-contain mx-auto" src={`https://thumb.cloud.mail.ru/weblink/thumb/xw1/9Q7k/wEByutoNc/${productId}.jpg`} alt="Ноутбук" />
              </div>
              <div className="basis-1/2 flex flex-col gap-5">
                <div>
                  Экран: 16; 1920х1200; IPS;<br/>
                  Процессор: Intel Core i7 12700H 2.3 ГГц (4.7 ГГц, в режиме Turbo)<br/>
                  Графический процессор: Intel Iris Xe graphics ;<br/>
                  Оперативная память 16 ГБ, LPDDR4x;<br/>
                  Диск: SSD 512 ГБ;<br/>
                  Операционная система: Windows 11 Home;<br/>
                  Клавиатура: с русскими буквами
                </div>
                <div>
                  <Price price={product.price} oldPrice={product.oldPrice} discount={product.discount} />
                </div>
                <div className="max-w-xs">
                  <ButtonBuy />
                </div>
              </div>
            </div>
          </div>
          <div className="mt">
            <h3 className="text-3xl max-w-3xl mx-auto">Отзывы {product.reviews.length}</h3>
            <ul className="flex flex-col gap-16 items-center mt-10">
              {product.reviews.map(review =>
                <li key={review.reviewId}>
                  <div className="flex gap-5">
                    <span>{review.name}</span>
                    <div>{review.rating}</div>
                  </div>
                  <div className="max-w-3xl">{review.text}</div>
                </li>
              )}
            </ul>
          </div>
        </div>
      );
    }
    return <div className="flex justify-center text-3xl">Loading...</div>;
  };

  useEffect(() => {
    setTimeout(() => {
      api.catalog.getById(productId)
        .then(response => {
          setProduct(response);
        });
    }, 1000);
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto px-8">
      {showProduct()}
    </div>
  );
};

export default ProductPage;
