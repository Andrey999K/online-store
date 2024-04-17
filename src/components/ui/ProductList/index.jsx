import { Card } from "../Card";
import PropTypes from "prop-types";
export const ProductList = ({ products, grid }) => {
  return (
    <div
      className={
        "flex flex-wrap h-full w-full gap-y-5 lg:justify-start items-stretch" +
        (grid ? " items-start" : " list-layout flex-col")
      }
    >
      {products.map(product => (
        <Card key={product.id} product={product} inGrid={grid} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      oldPrice: PropTypes.number,
      badges: PropTypes.array,
      reviewsCount: PropTypes.number.isRequired,
      ratingProduct: PropTypes.number.isRequired
    })
  ).isRequired,
  grid: PropTypes.bool.isRequired
};
