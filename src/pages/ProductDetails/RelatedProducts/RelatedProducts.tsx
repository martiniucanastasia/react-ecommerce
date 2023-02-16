import { ProductType } from "../../../types";

import { RelatedProductsStyled as R } from "./RelatedProductsStyled";
import { GlobalContainer } from "../../../styles/global";
import { Rating } from "../../../components/Rating/Rating";

interface RelatedProductsProps {
  relatedProducts: ProductType[];
}

export const RelatedProducts = ({ relatedProducts }: RelatedProductsProps) => {
  return (
    <GlobalContainer>
      <R.Box>
        <R.GlobalTitle>Related Products</R.GlobalTitle>
        <R.Items>
          {relatedProducts.map((relatedProduct: ProductType) => {
            return (
              <R.Item
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
              >
                <img
                  src={relatedProduct.thumbnail}
                  alt={relatedProduct.title}
                />

                <R.Line>
                  <R.Title>{relatedProduct.title}</R.Title>
                  <R.Rating>
                    <Rating rating={relatedProduct.rating} />
                  </R.Rating>
                </R.Line>
                <R.Price>{relatedProduct.price}</R.Price>
              </R.Item>
            );
          })}
        </R.Items>
      </R.Box>
    </GlobalContainer>
  );
};
