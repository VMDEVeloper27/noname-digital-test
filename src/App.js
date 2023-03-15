import { Route, Routes, BrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import "./App.css";
const Main = lazy(() => import("../src/pages/main/Main"));
const Products = lazy(() => import("../src/pages/products/ProductsPage"));
const Product = lazy(() => import("../src/pages/product/ProductPage"));
const Cart = lazy(() => import("../src/pages/cart/Cart"));
const Registration = lazy(() =>
  import("../src/pages/registration/RegistrationPage")
);

const Profile = lazy(() => import("../src/pages/profile/Profile"));
function App() {
  return (
    <BrowserRouter basename="/noname-digital-test/">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path="profile" element={<Profile />} />
          <Route path="basket" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<Product />} />
          <Route path="singup" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
