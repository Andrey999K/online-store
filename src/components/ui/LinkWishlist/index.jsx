import { useAppSelector } from "../../../store/hooks";
import { ControlButton } from "../../common/ControlButton";

export const LinkWishlist = () => {
  const count = useAppSelector(
    state => state.favoritesReducer.favorites.length
  );
  return (
    <ControlButton
      icon="bookmark"
      text="Избранное"
      url="/profile/wishlist"
      count={count}
    />
  );
};
