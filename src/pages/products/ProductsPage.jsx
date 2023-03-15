import ProductList from "../../components/productList/ProductList";
import { useState, useEffect } from "react";
import { fetchProducts } from "../../services/productsApi";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/ProductSlice/ProductSlice";
import { useSelector } from "react-redux";
const ProductsPage = () => {
  // const [products, setProducts] = useState([]);
  const location = useLocation();
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProducts()
      .then((response) => response.json())
      .then((data) => {
        dispatch(getProducts(data));
      });
  }, []);

  return (
    <section>
      <ProductList products={products} location={location} />
    </section>
  );
};
export default ProductsPage;
