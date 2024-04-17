import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import { Price } from "../../components/ui/Price";
import { ButtonBuy } from "../../components/ui/ButtonBuy";
import { ScreenLoader } from "../../components/ui/ScreenLoader";
import { Review } from "../../components/ui/Review";
import paginate from "../../utils/paginate";
import { Pagination } from "../../components/ui/Pagination/index.js";
import { SortOptions } from "../../components/ui/SortOptions";
import { orderBy } from "lodash";
import { Wrapper } from "../../components/common/Wrapper";
import { Bookmark } from "../../components/ui/Bookmark";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [currentPageReview, setCurrentPageReview] = useState(1);
  const [sortReviewBy, setSortReviewBy] = useState({
    iter: "rating",
    order: "desc"
  });
  const reviewOnPage = 5;
  let reviews = [];
  if (product) reviews = product.reviews;

  const sortReviewsOptions = [
    { field: "rating", text: "По рейтингу" },
    { field: "date", text: "По дате" }
  ];

  const handleSortReviews = value => {
    setSortReviewBy(value);
    setCurrentPageReview(1);
  };

  const handlePageReviewChange = pageNumber => {
    setCurrentPageReview(pageNumber);
  };

  const sortByDate = items => {
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
                  <Bookmark product={product} />
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
              <div className="hidden md:block">
                <Pagination
                  pageSize={reviewOnPage}
                  onPageChange={handlePageReviewChange}
                  currentPage={currentPageReview}
                  itemsCount={reviews.length}
                />
              </div>
            </div>
            <ul className="flex flex-col gap-8 items-center">
              {reviewsCrop.map(review => (
                <li key={review.reviewId}>
                  <Review data={review} />
                </li>
              ))}
            </ul>
            <div className="flex justify-center md:justify-start">
              <Pagination
                pageSize={reviewOnPage}
                onPageChange={handlePageReviewChange}
                currentPage={currentPageReview}
                itemsCount={reviews.length}
              />
            </div>
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
      api.catalog.getById(productId).then(response => {
        setProduct(response);
      });
    }, 2000);
  }, []);

  return <Wrapper>{showProduct()}</Wrapper>;
};

export default ProductPage;
