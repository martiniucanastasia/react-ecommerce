import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

import { GlobalContainer } from "../../../styles/global";
import { ProductType } from "../../../types";

import { Info, FeaturedProductSliderStyled as F } from "./FeaturedSliderStyled";
import { HoverButtons, ButtonBox } from "./FeaturedSliderStyled";
import { Button } from "../../../components/Button/Button";
import { IconButton } from "../../../components/Button/IconButton";

import { ReactComponent as CartBlueSvg } from "../../../assets/images/cart-blue.svg";
import { ReactComponent as HeartSvg } from "../../../assets/images/heart.svg";
import { ReactComponent as SizerSvg } from "../../../assets/images/sizer.svg";

import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import { useCartContext } from "../../../context/CartContext";

interface FeaturedProductsSliderProps {
  swiperProducts: ProductType[];
}

export const FeaturedSlider = ({
  swiperProducts,
}: FeaturedProductsSliderProps) => {
  const [slidesToShow, setSlidesToShow] = useState<number>(4);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 1300) {
      setSlidesToShow(4);
    }
    if (width <= 1300) {
      setSlidesToShow(3);
    }
    if (width <= 991) {
      setSlidesToShow(2);
    }
    if (width <= 600) {
      setSlidesToShow(1);
    }
  }, [width]);

  return (
    <>
      <GlobalContainer>
        <F.GeneralTitle>Featured Products</F.GeneralTitle>
        <Swiper
          slidesPerView={slidesToShow}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          style={{
            // @ts-ignore
            "--swiper-pagination-color": "var(--pink-color)",
            "--swiper-pagination-bullet-inactive-color":
              "var(--light-sky-pink-color)",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          {swiperProducts.map((product: ProductType) => (
            <SwiperSlide key={product.id}>
              <F.Box>
                <Slide product={product} key={product.id} />
              </F.Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </GlobalContainer>
    </>
  );
};

const Slide = ({ product }: { product: ProductType }) => {
  const { addProductToCart } = useCartContext();

  return (
    <>
      <F.Item key={product.id}>
        <HoverButtons>
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
        </HoverButtons>
        <ButtonBox>
          <Button variant={"secondary"}>View Details</Button>
        </ButtonBox>
        <Link to={`/product/${product.id}`}>
          <img src={product.thumbnail} alt={product.title} />
          <Info>
            <F.ColorsSet>
              <F.ColorOne></F.ColorOne>
              <F.ColorTwo></F.ColorTwo>
              <F.ColorThree></F.ColorThree>
            </F.ColorsSet>
            <F.Title>{product.title}</F.Title>
            <F.Text>{product.rating}</F.Text>
            <F.Text>${product.price}</F.Text>
          </Info>
        </Link>
      </F.Item>
    </>
  );
};
