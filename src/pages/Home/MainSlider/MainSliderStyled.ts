import styled from "styled-components";
import { converter } from "../../../styles/global";
import { device } from "../../../styles/devices";

export const InfoSlide = {
  Wrapper: styled.div`
    width: 100%;
    height: ${converter(760)};
    @media ${device.tabletL} {
      height: ${converter(700)};
    }
  `,
  ImageMain: styled.img`
    width: ${converter(700)};
    height: ${converter(690)};
    position: absolute;
    top: ${converter(30)};
    right: 5%;
    z-index: -1;

    @media ${device.laptopS} {
      opacity: 0.5;
    }
  `,

  ImageLamp: styled.img`
    max-width: ${converter(380)};
    max-height: ${converter(380)};
    position: absolute;
    left: ${converter(-60)};
    z-index: -1;

    @media ${device.laptopXL} {
      display: none;
    }
  `,
  Box: styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${converter(640)};
    padding: ${converter(230)} 0 ${converter(160)} 0;

    @media ${device.tabletL} {
      padding: ${converter(170)} 0;
    }
  `,
  Label: styled.div`
    color: var(--pink-color);
    font-size: var(--base-text);
    font-family: "Lato";
  `,
  Title: styled.h3`
    font-size: var(--text-5xxl);
    color: var(--black-color);
    font-family: "Josefin Bold";
    padding: ${converter(15)} 0;
  `,
  Text: styled.p`
    font-size: var(--text-base);
    color: var(--text-color);
    font-family: "Lato";
    padding-bottom: ${converter(30)};
    max-width: ${converter(560)};
    @media ${device.tabletL} {
      color: var(--black-color);
    }
  `,
  ButtonBox: styled.div`
    max-width: ${converter(165)};
  `,
};
