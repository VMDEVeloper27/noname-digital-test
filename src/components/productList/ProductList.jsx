import ProductCard from "../productItem/Card";
import { FlexContainer } from "./../productList/ProductList.styled";
import { BtnBar } from "../categoriesBtnBar/BtnBar";
export default function ProductList({ products, location }) {
  return (
    <>
      {products && <BtnBar />}
      <FlexContainer>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </FlexContainer>
    </>
  );
}
