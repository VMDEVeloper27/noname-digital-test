import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import { Btn, BtnBarSt } from "../categoriesBtnBar/CategoriesBtn.styled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { filterProducts } from "../../redux/ProductSlice/ProductSlice";
import { fetchProducts } from "../../services/productsApi";

import {
  getProducts,
  filterPrice,
  filterDownPrice,
  filterPopularity,
} from "../../redux/ProductSlice/ProductSlice";

export const BtnBar = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const onBtnFilterClick = (evt) => {
    fetchProducts()
      .then((response) => response.json())
      .then((data) => {
        dispatch(getProducts(data));
        dispatch(filterProducts(evt.target.textContent));
      });
  };

  const onBtnAllClick = (evt) => {
    fetchProducts()
      .then((response) => response.json())
      .then((data) => {
        dispatch(getProducts(data));
      });
  };
  const onBtnPriceClick = (evt) => {
    fetchProducts()
      .then((response) => response.json())
      .then((data) => {
        dispatch(getProducts(data));
        dispatch(filterPrice());
      });
  };
  const onBtnPriceDownClick = (evt) => {
    fetchProducts()
      .then((response) => response.json())
      .then((data) => {
        dispatch(getProducts(data));
        dispatch(filterDownPrice());
      });
  };
  const onBtnPopularityClick = (evt) => {
    fetchProducts()
      .then((response) => response.json())
      .then((data) => {
        dispatch(getProducts(data));
        dispatch(filterPopularity());
      });
  };
  return (
    <BtnBarSt>
      <li>
        <Btn onClick={onBtnAllClick}>ALL</Btn>
      </li>
      <li>
        <Btn onClick={onBtnFilterClick}>Licensed</Btn>
      </li>
      <li>
        <Btn onClick={onBtnFilterClick}>Recycled</Btn>
      </li>
      <li>
        <Btn onClick={onBtnFilterClick}>Luxurious</Btn>
      </li>
      <li>
        <Btn onClick={onBtnPriceClick}>price up</Btn>
      </li>
      <li>
        <Btn onClick={onBtnPriceDownClick}>price down</Btn>
      </li>
      <li>
        <Btn onClick={onBtnPopularityClick}>popularity</Btn>
      </li>
    </BtnBarSt>
  );
};
