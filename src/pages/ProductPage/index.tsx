import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/api";
import { Price } from "@/components/ui/Price";
import { ButtonBuy } from "@/components/ui/ButtonBuy";
import { ScreenLoader } from "@/components/ui/ScreenLoader";
import { ReviewBlock } from "@/components/ui/ReviewBlock";
import { paginate } from "@/utils/paginate.ts";
import { Pagination } from "@/components/ui/Pagination";
import { SortOptions } from "@/components/ui/SortOptions";
import { orderBy } from "lodash";
import { Wrapper } from "@/components/common/Wrapper";
import { FavoritesButton } from "@/components/ui/Bookmark";
import { Product, Review, SetState, SortOption } from "@/types";

type ParamProductId = {
  productId: string;
};

const INITIAL_PAGE = 1;

export const ProductPage = () => {
  const { productId } = useParams<ParamProductId>();
  const [product, setProduct] = useState<Product | null>(null);
  const [currentPageReview, setCurrentPageReview] =
    useState<number>(INITIAL_PAGE);
  const [sortReviewBy, setSortReviewBy] = useState<SortOption>({
    iter: "rating",
    order: "desc"
  });
  const reviewOnPage = 5;
  let reviews: Array<Review> = [];
  if (product) reviews = product.reviews;
  const paginationShow = Math.floor(reviews.length / reviewOnPage) > 0;

  const sortReviewsOptions = [
    { field: "rating", text: "По рейтингу" },
    { field: "date", text: "По дате" }
  ];

  const handleSortReviews: SetState<SortOption> = value => {
    setSortReviewBy(value);
    setCurrentPageReview(1);
  };

  const handlePageReviewChange = (pageNumber: number) => {
    setCurrentPageReview(pageNumber);
  };

  const sortByDate = (items: Array<Review>) => {
    return orderBy(
      items,
      [
        item => {
          const [day, month, year] = item.date.split(".");
          return new Date(`${year}-${month}-${day}`);
        }
      ],
      [sortReviewBy.order]
    );
  };

  let sortedReviews = reviews;
  if (sortReviewBy) {
    sortedReviews =
      sortReviewBy.iter === "date"
        ? sortByDate(reviews)
        : orderBy(reviews, [sortReviewBy.iter], [sortReviewBy.order]);
  }
  const reviewsCrop = paginate(sortedReviews, reviewOnPage, currentPageReview);
  const showProduct = () => {
    if (product) {
      return (
        <div className="pt-8 pb-20 flex flex-col gap-20">
          <div>
            <h2 className="text-2xl">{product.name}</h2>
            <div className="flex gap-10 w-full mt-6 flex-col md:flex-row">
              <div className="basis-1/2">
                <img
                  className="w-full h-full object-contain mx-auto"
                  src={`https://thumb.cloud.mail.ru/weblink/thumb/xw1/9Q7k/wEByutoNc/${productId}.jpg`}
                  alt="Ноутбук"
                />
              </div>
              <div className="basis-1/2 flex flex-col gap-5">
                <div>
                  Экран: 16; 1920х1200; IPS;
                  <br />
                  Процессор: Intel Core i7 12700H 2.3 ГГц (4.7 ГГц, в режиме
                  Turbo)
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
                <div className="flex gap-3">
                  <Price
                    price={product.price}
                    oldPrice={product.oldPrice}
                    discount={product.discount}
                  />
                  <FavoritesButton product={product} />
                </div>
                <div className="sm:max-w-xs">
                  <ButtonBuy product={product} />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-3xl flex flex-col gap-10">
            <div className="flex justify-between">
              <h3 className="text-3xl">Отзывы {product.reviews.length}</h3>
              <div>
                <SortOptions
                  onSort={handleSortReviews}
                  selectedSort={sortReviewBy}
                  items={sortReviewsOptions}
                />
              </div>
              {paginationShow && (
                <div className="hidden md:block">
                  <Pagination
                    pageSize={reviewOnPage}
                    onPageChange={handlePageReviewChange}
                    currentPage={currentPageReview}
                    itemsCount={reviews.length}
                  />
                </div>
              )}
            </div>
            <ul className="flex flex-col gap-8 items-center">
              {reviewsCrop.map(review => (
                <li key={review.reviewId}>
                  <ReviewBlock data={review} />
                </li>
              ))}
            </ul>
            {paginationShow && (
              <div className="flex justify-center md:justify-start">
                <Pagination
                  pageSize={reviewOnPage}
                  onPageChange={handlePageReviewChange}
                  currentPage={currentPageReview}
                  itemsCount={reviews.length}
                />
              </div>
            )}
          </div>
        </div>
      );
    }
    return (
      <div className="flex justify-center text-3xl text-sky-500">
        <ScreenLoader />
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      if (productId) {
        api.catalog.getById(productId).then(response => {
          setProduct(response);
        });
      }
    }, 2000);
  }, []);

  return <Wrapper>{showProduct()}</Wrapper>;
};
