import ProductList from "../../components/productList/ProductList";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/ProductSlice/ProductSlice";
import { useSelector } from "react-redux";
import { FlexContainer } from "../../components/productList/ProductList.styled";
import CartList from "../../components/cartList/CartList";
const Cart = () => {
  return (
    <section>
      <CartList />
    </section>
  );
};
export default Cart;
