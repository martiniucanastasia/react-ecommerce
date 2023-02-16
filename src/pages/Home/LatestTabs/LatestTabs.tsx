import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../../../types";

import {
  Buttons,
  Item as I,
  LatestProductsStyled as T,
} from "./LatestTabsStyled";
import { IconButton } from "../../../components/Button/IconButton";
import { GlobalContainer } from "../../../styles/global";

import { ReactComponent as CartBlueSvg } from "../../../assets/images/cart-blue.svg";
import { ReactComponent as HeartSvg } from "../../../assets/images/heart.svg";
import { ReactComponent as SizerSvg } from "../../../assets/images/sizer.svg";
import { useCartContext } from "../../../context/CartContext";

export const LatestTabs = ({
  latestProducts,
}: {
  latestProducts: ProductType[];
}) => {
  const [active, setActive] = useState<number | boolean>(0);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLButtonElement;
    const index = parseInt(target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <T.Box>
      <T.GeneralTitle>Latest Products</T.GeneralTitle>
      <T.Tabs>
        <T.Tab onClick={handleClick} active={active === 0} id={"0"}>
          New Arrival
        </T.Tab>
        <T.Tab onClick={handleClick} active={active === 1} id={"1"}>
          Best Seller
        </T.Tab>
        <T.Tab onClick={handleClick} active={active === 2} id={"2"}>
          Featured
        </T.Tab>
        <T.Tab onClick={handleClick} active={active === 3} id={"3"}>
          Special Offer
        </T.Tab>
      </T.Tabs>

      <GlobalContainer>
        <T.Content active={active === 0}>
          <I.Items>
            {latestProducts.slice(17, 23).map((product: ProductType) => (
              <Product product={product} key={product.id} />
            ))}
          </I.Items>
        </T.Content>
        <T.Content active={active === 1}>
          <I.Items>
            {latestProducts.slice(23, 29).map((product: ProductType) => (
              <Product product={product} key={product.id} />
            ))}
          </I.Items>
        </T.Content>
        <T.Content active={active === 2}>
          <I.Items>
            {latestProducts.slice(29, 35).map((product: ProductType) => (
              <Product product={product} key={product.id} />
            ))}
          </I.Items>
        </T.Content>
        <T.Content active={active === 3}>
          <I.Items>
            {latestProducts.slice(35, 41).map((product: ProductType) => (
              <Product product={product} key={product.id} />
            ))}
          </I.Items>
        </T.Content>
      </GlobalContainer>
    </T.Box>
  );
};

const Product = ({ product }: { product: ProductType }) => {
  const { addProductToCart } = useCartContext();
  return (
    <>
      <I.Item key={product.id}>
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
        <Link to={`/product/${product.id}`}>
          <img src={product.thumbnail} alt={product.title} />
          <I.Info>
            <I.Title>{product.title}</I.Title>
            <I.Price>
              <I.PriceNew>${product.price}</I.PriceNew>
              <I.PriceOld>
                $
                {(
                  product.price +
                  (product.price / 100) * product.discountPercentage
                ).toFixed(0)}
              </I.PriceOld>
            </I.Price>
          </I.Info>
        </Link>
      </I.Item>
    </>
  );
};
