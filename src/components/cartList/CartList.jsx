import { FlexContainer } from "../productList/ProductList.styled";
import { useSelector } from "react-redux";
import CartItem from "../cartItem/CartItem";
export default function CartList() {
  const cart = useSelector((state) => state.products.cart);
  return (
    <FlexContainer>
      {cart.map((product) => {
        return <CartItem product={product} />;
      })}
    </FlexContainer>
  );
}
