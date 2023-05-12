import React from "react";
import Card from "../Card";
import PropTypes from "prop-types";
const ProductList = ({ products, grid }) => {
  return (
    <div className={
      "flex flex-wrap gap-y-5 justify-start max-w-screen-lg mx-auto" + (grid ? "" : " list-layout flex-col")
    }>
      {products.map(item => (
        <div key={item.id} className="basis-1/4 flex justify-center">
          <Card
            id={item.id}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            listBadges={item.badges}
            reviewsNumber={item.reviewsCount}
            rate={item.rateProduct}
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
    rateProduct: PropTypes.number.isRequired
  })).isRequired,
  grid: PropTypes.bool.isRequired
};

export default ProductList;
