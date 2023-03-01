import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";
import { Suspense } from "react";
import { TailSpin } from "react-loader-spinner";
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Main</Link>
          <Link to="/basket">Basket</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Suspense
        fallback={
          <TailSpin
            height="80"
            width="80"
            color="#000"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};
