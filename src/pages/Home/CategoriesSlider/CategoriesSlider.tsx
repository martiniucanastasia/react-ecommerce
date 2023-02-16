import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import {
  TopProduct as T,
  TopCategoriesStyled as C,
} from "./CategoriesSliderStyled";
import { ShadowBox, ButtonBox } from "./CategoriesSliderStyled";
import { Button } from "../../../components/Button/Button";
import { GlobalContainer } from "../../../styles/global";
import { ProductType } from "../../../types";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";

interface TopProductProps {
  product: ProductType;
}

interface TopCategoriesProps {
  topProducts: ProductType[];
}

export const CategoriesSlider = ({ topProducts }: TopCategoriesProps) => {
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
    <GlobalContainer>
      <C.GeneralTitle>Top Categories</C.GeneralTitle>
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
        {topProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <C.Box>
              <TopProduct product={product} key={product.id} />
            </C.Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </GlobalContainer>
  );
};

const TopProduct = ({ product }: TopProductProps) => {
  return (
    <T.Item to={`/product/${product.id}`} key={product.id}>
      <ButtonBox>
        <Button variant={"secondary"}>View Shop</Button>
      </ButtonBox>
      <ShadowBox />
      <T.Image>
        <img src={product.thumbnail} alt={product.title} />
      </T.Image>
      <T.Info>
        <T.Title>{product.title}</T.Title>
        <T.Price>${product.price}</T.Price>
      </T.Info>
    </T.Item>
  );
};
