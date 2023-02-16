import styled from "styled-components";
import { converter } from "../../styles/global";
import { device } from "../../styles/devices";

export const Buttons = styled.div`
  display: none;
  position: absolute;
  flex-direction: column;
  bottom: 32%;
  left: 10%;
  gap: ${converter(5)};
  z-index: 888;
`;

export const ProductStyledSquare = {
  Product: styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    position: relative;

    a {
      text-decoration: none;
    }

    img {
      width: ${converter(270)};
      height: ${converter(280)};
      object-fit: cover;

      @media ${device.laptopXS} {
        width: ${converter(220)};
        height: ${converter(230)};
        object-fit: cover;
      }
      @media ${device.tablet} {
        width: ${converter(270)};
        height: ${converter(280)};
        object-fit: cover;
      }
    }
    &:hover {
      ${Buttons} {
        display: flex;
      }
    }
  `,
  Title: styled.h3`
    font-family: "Josefin SemiBold";
    color: var(--in-blue-color);
    font-size: var(--text-lg);
    line-height: ${converter(21)};
    padding: ${converter(20)} 0rem ${converter(10)} 0rem;
  `,
  Price: styled.div`
    display: flex;
    justify-content: center;
  `,
  PriceNew: styled.div`
    color: var(--in-blue-color);
    font-family: "Josefin";
    font-size: var(--text-sm);
    line-height: ${converter(20)};
    margin-right: ${converter(5)};
  `,
  PriceOld: styled.div`
    color: var(--pink-color);
    font-family: "Josefin";
    font-size: var(--text-sm);
    line-height: ${converter(20)};
    text-decoration: line-through;
  `,
  ColorsSet: styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: ${converter(16)};
    gap: ${converter(8)};
  `,

  ColorOne: styled.div`
    background-color: var(--dirty-orange-color);
    border-radius: ${converter(50)};
    width: ${converter(10)};
    height: ${converter(10)};
  `,
  ColorTwo: styled.div`
    background-color: var(--girl-pink-color);
    border-radius: ${converter(50)};
    width: ${converter(10)};
    height: ${converter(10)};
  `,
  ColorThree: styled.div`
    background-color: var(--lavender-color);
    border-radius: ${converter(50)};
    width: ${converter(10)};
    height: ${converter(10)};
  `,
};

export const ProductStyledInline = {
  Product: styled.div`
    padding: ${converter(20, 20, 20, 20)};
    box-shadow: 0 0 ${converter(20)} ${converter(5)} rgba(248, 246, 253, 0.75);

    a {
      text-decoration: none;
      display: flex;
      flex-direction: row;
    }

    img {
      width: ${converter(315)};
      height: ${converter(215)};
      object-fit: cover;
    }
  `,
  Box: styled.div`
    margin-left: ${converter(30)};
  `,
  Line: styled.div`
    display: flex;
    align-items: baseline;
    padding: ${converter(15)} 0rem;
  `,
  Rating: styled.div`
    display: flex;
    gap: ${converter(3)};
  `,
  Title: styled.h3`
    font-family: "Josefin SemiBold";
    color: var(--in-blue-color);
    font-size: var(--text-xl);
    line-height: ${converter(23)};
    padding: ${converter(15)} 0rem;
  `,
  ColorsSet: styled.div`
    display: flex;
    justify-content: flex-start;
    gap: ${converter(8)};
  `,

  ColorOne: styled.div`
    background-color: var(--dirty-orange-color);
    border-radius: ${converter(50)};
    width: ${converter(10)};
    height: ${converter(10)};
  `,
  ColorTwo: styled.div`
    background-color: var(--girl-pink-color);
    border-radius: ${converter(50)};
    width: ${converter(10)};
    height: ${converter(10)};
  `,
  ColorThree: styled.div`
    background-color: var(--lavender-color);
    border-radius: ${converter(50)};
    width: ${converter(10)};
    height: ${converter(10)};
  `,

  PriceNew: styled.div`
    color: var(--in-blue-color);
    font-family: "Josefin";
    font-size: var(--text-base);
    line-height: ${converter(18)};
    margin-right: ${converter(10)};
  `,
  PriceOld: styled.div`
    color: var(--pink-color);
    font-family: "Josefin";
    font-size: var(--text-base);
    line-height: ${converter(18)};
    text-decoration: line-through;
    margin-right: ${converter(15)};
  `,
  Description: styled.p`
    font-size: var(--text-base);
    color: var(--text-color);
    font-family: "Lato";
    padding-bottom: ${converter(30)};
    max-width: ${converter(530)};
    line-height: ${converter(28)};
  `,
  Buttons: styled.div`
    display: flex;

    & :not(:last-child) {
      margin-right: ${converter(20)};
    }
  `,
};
