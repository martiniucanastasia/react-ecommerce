import styled from "styled-components";
import { converter } from "../../../styles/global";

export const HoverButtons = styled.div`
  display: none;
  position: absolute;
  flex-direction: row;
  left: ${converter(10)};
  top: ${converter(10)};
  gap: ${converter(10)};
  z-index: 888;

  svg path {
    fill: var(--light-sky-blue);
  }
  button {
    :hover {
      background-color: var(--light-lavender);
      svg path {
        fill: var(--dark-sky-blue);
      }
    }
  }
`;
export const ButtonBox = styled.div`
  display: none;
  position: absolute;
  bottom: 38%;
  left: 30%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: ${converter(15)} ${converter(10)};
  transition: all 0.3s;
`;

export const FeaturedProductSliderStyled = {
  GeneralTitle: styled.h3`
    display: flex;
    justify-content: center;
    font-family: "Josefin Bold";
    font-size: var(--text-4xxl);
    color: var(--in-blue-color);
    padding-top: ${converter(130)};
  `,
  Box: styled.div`
    padding: ${converter(50)} 0 ${converter(50)} 0;
  `,
  Item: styled.div`
    position: relative;
    box-shadow: 0 0 ${converter(25)} rgba(0, 0, 0, 0.1);
    a {
      text-decoration: none;
    }
    &:hover {
      ${Info} {
        background-color: var(--pastel-purple-color);
      }
      ${HoverButtons} {
        display: flex;
      }
      ${ButtonBox} {
        display: flex;
      }
    }

    img {
      width: ${converter(270)};
      height: ${converter(240)};
      object-fit: cover;
      width: 100%;
    }
  `,

  Title: styled.p`
    font-family: "Lato Bold";
    font-size: var(--text-lg);
    color: var(--pink-color);
    line-height: ${converter(21)};
    padding-bottom: ${converter(15)};
  `,
  Text: styled.span`
    font-family: "Lato";
    font-size: var(--text-sm);
    color: var(--in-blue-color);
    line-height: ${converter(16)};

    :not(:last-child) {
      padding-bottom: ${converter(10)};
    }
  `,
  ColorsSet: styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: ${converter(15)};
    gap: ${converter(8)};
  `,
  ColorOne: styled.div`
    background-color: var(--dirty-orange-color);
    border-radius: ${converter(10)};
    width: ${converter(14)};
    height: ${converter(4)};
  `,
  ColorTwo: styled.div`
    background-color: var(--girl-pink-color);
    border-radius: ${converter(10)};
    width: ${converter(14)};
    height: ${converter(4)};
  `,
  ColorThree: styled.div`
    background-color: var(--lavender-color);
    border-radius: ${converter(10)};
    width: ${converter(14)};
    height: ${converter(4)};
  `,
};
