import { SliderWrap } from "./SliderStyled";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper";

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

interface SliderProps {
  children: string[];
  settings: any;
}

export const Slider = ({ children, settings }: SliderProps) => {
  const sliderOptions = {
    slidesPerView: 1,
    pagination: true,
    navigation: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    ...settings,
  };

  return (
    <SliderWrap
      // @ts-ignore
      dots={sliderOptions?.pagination}
      // @ts-ignore
      arrows={sliderOptions?.navigation}
    >
      <Swiper {...sliderOptions}>{children}</Swiper>
    </SliderWrap>
  );
};

export { SwiperSlide as Slide };
