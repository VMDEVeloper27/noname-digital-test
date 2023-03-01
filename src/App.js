import { Route, Routes, BrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import "./App.css";
import SomeButton from "./components/sumBtn/SomeBtn";
function App() {
  return (
    <BrowserRouter basename="/noname-digital-test/">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<div>Main</div>} />
          <Route path="profile" element={<div>Profile</div>} />
          <Route path="basket" element={<div>Basket</div>} />
          <Route path="products" element={<div>Products</div>} />
          <Route path="products/:1" element={<div>product page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
