import { useState, useEffect } from "react";
import { NavLink, useParams, Outlet, useLocation } from "react-router-dom";
import { fetchProductbyId } from "../../services/productsApi";

import { useDispatch } from "react-redux";
import { getProduct } from "../../redux/ProductSlice/ProductSlice";
import { useSelector } from "react-redux";
import {
  Backdrop,
  Modal,
  ProductImg,
  ModalContentWraper,
} from "../product/Product.styled";
const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const location = useLocation();
  const { productId } = useParams();
  console.log(product);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProductbyId(productId)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [productId]);
  const { avatar, name, price, popularity, category } = product;
  return (
    <section>
      <Backdrop>
        <Modal>
          <ModalContentWraper>
            <ProductImg src={avatar} />
            <h3>{name}</h3>
            <p>price: {price}</p>
            <p>category: {category}</p>
            <p>popularity: {popularity}</p>
            <button>to cart</button>
          </ModalContentWraper>
        </Modal>
      </Backdrop>
    </section>
  );
};
export default ProductPage;
