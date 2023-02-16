import { ProductType } from "../../types";

import {
  ProductStyledSquare as S,
  ProductStyledInline as I,
} from "./ProductStyled";
import { Buttons } from "./ProductStyled";
import { Link } from "react-router-dom";
import { IconButton } from "../Button/IconButton";
import { Rating } from "../Rating/Rating";

import { useCartContext } from "../../context/CartContext";

import { ReactComponent as CartBlueSvg } from "../../assets/images/cart-blue.svg";
import { ReactComponent as HeartSvg } from "../../assets/images/heart.svg";
import { ReactComponent as SizerSvg } from "../../assets/images/sizer.svg";

interface ProductProps {
  product: ProductType;
  productsView: string;
}

export const Product = ({ product, productsView }: ProductProps) => {
  const { addProductToCart } = useCartContext();

  return (
    <>
      {productsView === "squares" ? (
        <S.Product key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.thumbnail} alt={product.title} />
            <S.Title>{product.title}</S.Title>
            <S.ColorsSet>
              <S.ColorOne></S.ColorOne>
              <S.ColorTwo></S.ColorTwo>
              <S.ColorThree></S.ColorThree>
            </S.ColorsSet>
            <S.Price>
              <S.PriceNew>${product.price}</S.PriceNew>
              <S.PriceOld>
                $
                {(
                  product.price +
                  (product.price / 100) * product.discountPercentage
                ).toFixed(0)}
              </S.PriceOld>
            </S.Price>
          </Link>
          <Buttons>
            <IconButton
              onClick={() => addProductToCart(product)}
              variant="secondary"
            >
              <CartBlueSvg />
            </IconButton>
            <IconButton variant="secondary">
              <HeartSvg />
            </IconButton>
            <IconButton variant="secondary">
              <SizerSvg />
            </IconButton>
          </Buttons>
        </S.Product>
      ) : (
        <I.Product key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.thumbnail} alt={product.title} />
            <I.Box>
              <I.Title>{product.title}</I.Title>
              <I.ColorsSet>
                <I.ColorOne></I.ColorOne>
                <I.ColorTwo></I.ColorTwo>
                <I.ColorThree></I.ColorThree>
              </I.ColorsSet>
              <I.Line>
                <I.PriceNew>${product.price}</I.PriceNew>
                <I.PriceOld>
                  $
                  {(
                    product.price +
                    (product.price / 100) * product.discountPercentage
                  ).toFixed(0)}
                </I.PriceOld>
                <I.Rating>
                  <Rating rating={product.rating} />
                </I.Rating>
              </I.Line>
              <I.Description>{product.description}</I.Description>
              <I.Buttons>
                <IconButton
                  onClick={() => addProductToCart(product)}
                  variant="secondary"
                >
                  <CartBlueSvg />
                </IconButton>
                <IconButton variant="secondary">
                  <HeartSvg />
                </IconButton>
                <IconButton variant="secondary">
                  <SizerSvg />
                </IconButton>
              </I.Buttons>
            </I.Box>
          </Link>
        </I.Product>
      )}
    </>
  );
};
