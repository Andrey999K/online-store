import PropTypes from "prop-types";
import sprite from "../../../img/sprite.svg";

export const Icon = ({ name, className }) => (
  <svg className={`icon ${className}`}>
    <use xlinkHref={`${sprite}#${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

Icon.defaultProps = {
  className: "w-[24px] h-[24px]"
};
