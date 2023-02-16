import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Slider, Slide } from "./Slider/Slider";

import { images, PictureType } from "./Slider/data";
import Lamp from "../../../assets/images/lamphome.png";

import { InfoSlide as I } from "./MainSliderStyled";
import { GlobalContainer } from "../../../styles/global";
import { Button } from "../../../components/Button/Button";

export const MainSlider = () => {
  return (
    <>
      {/* @ts-ignore */}
      <Slider
        settings={{
          navigation: true,
        }}
      >
        {images.map((picture: PictureType) => (
          <Slide key={picture.id}>
            <I.ImageLamp src={Lamp} alt={picture.title} />
            <I.Wrapper>
              <GlobalContainer>
                <I.Box>
                  <I.Label>Best Furniture For Your Castle....</I.Label>
                  <I.Title>New Furniture Collection Trends in 2020</I.Title>
                  <I.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
                  </I.Text>
                  <I.ButtonBox>
                    <Button size={"medium"}>Shop Now</Button>
                  </I.ButtonBox>
                </I.Box>
              </GlobalContainer>
            </I.Wrapper>
            <I.ImageMain
              src={picture.thumbnail}
              alt={picture.title}
            ></I.ImageMain>
          </Slide>
        ))}
      </Slider>
    </>
  );
};
