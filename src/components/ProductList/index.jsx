import React from "react";
import Card from "../Card";
import PropTypes from "prop-types";
const ProductList = ({ products, grid }) => {
  return (
    <div className={
      "flex flex-wrap h-full w-full gap-y-5 justify-start max-w-screen-lg items-stretch" + (grid ? " items-start" : " list-layout flex-col")
    }>
      {products.map(product => (
        <div key={product.id} className="flex justify-center">
          <Card
            product={product}
            inGrid={grid}
          />
        </div>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    badges: PropTypes.array,
    reviewsCount: PropTypes.number.isRequired,
    ratingProduct: PropTypes.number.isRequired
  })).isRequired,
  grid: PropTypes.bool.isRequired
};

export default ProductList;
