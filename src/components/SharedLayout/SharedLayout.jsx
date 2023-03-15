import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";
import { Footer } from "../footer/Footer";
import { Suspense } from "react";
import { TailSpin } from "react-loader-spinner";
import ResponsiveAppBar from "../header/Header";
export const SharedLayout = () => {
  return (
    <Container>
      <ResponsiveAppBar />
      <main>
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
      </main>
      <Footer />
    </Container>
  );
};
