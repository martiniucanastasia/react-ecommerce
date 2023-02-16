import styled from "styled-components";
import { converter } from "../../styles/global";

export const ProductDetailsStyled = {
  Box: styled.div`
    padding: ${converter(15)};
    margin: ${converter(130)} 0rem;
    box-shadow: 0 0 ${converter(25)} ${converter(10)} var(--shadow-gray-color);
  `,
  Info: styled.div`
    display: flex;
  `,

  Pictures: styled.div`
    display: flex;
    flex-direction: column;
    gap: ${converter(10)};

    img {
      width: ${converter(150)};
      height: ${converter(155)};
      object-fit: cover;
    }
  `,
  GeneralInfo: styled.div`
    display: flex;

    img {
      width: ${converter(375)};
      height: ${converter(480)};
      object-fit: cover;
      margin: 0rem ${converter(40)} 0rem ${converter(20)};
    }
  `,
  InfoBox: styled.div`
    padding: ${converter(70)} 0rem ${converter(50)} 0rem;
  `,
  Title: styled.h3`
    font-family: "Josefin SemiBold";
    color: var(--off-blue-color);
    font-size: var(--text-2xxl);
  `,
  Rating: styled.div`
    padding: ${converter(10)} 0rem ${converter(20)} 0rem;
    & :not(:last-child) {
      margin-right: ${converter(3)};
    }
  `,
  Prices: styled.div`
    display: flex;
    flex-direction: row;
    gap: ${converter(20)};
  `,
  PriceNew: styled.div`
    color: var(--in-blue-color);
    font-family: "Josefin";
    font-size: var(--text-base);
    line-height: ${converter(18)};
  `,
  PriceOld: styled.div`
    color: var(--pink-color);
    font-family: "Josefin";
    font-size: var(--text-base);
    line-height: ${converter(18)};
    text-decoration: line-through;
  `,
  Description: styled.p`
    font-size: var(--text-base);
    color: var(--text-color);
    font-family: "Josefin";
    padding: ${converter(20)} 0rem ${converter(30)} 0rem;
    max-width: ${converter(550)};
    line-height: ${converter(28)};
  `,
  Buttons: styled.div`
    display: flex;
    gap: ${converter(20)};
    margin-left: ${converter(70)};
  `,

  Button: styled.button`
    border: none;
    outline: none;
    background-color: #fff;
    color: var(--in-blue-color);
    font-size: var(--text-base);
    font-family: "Josefin";
    cursor: pointer;

    svg path {
      fill: ${({ isLiked }: { isLiked?: boolean }) =>
        isLiked ? `var(--pink-color)` : `var(--in-blue-color)`};
    }
  `,
  ParametersBox: styled.div`
    display: flex;
    flex-direction: column;
    padding: ${converter(20)} 0rem ${converter(30)} 0rem;
    gap: ${converter(20)};
  `,
  Parameters: styled.h2`
    font-size: var(--text-base);
    color: var(--in-blue-color);
    font-family: "Josefin";
  `,
  ShareBox: styled.div`
    display: flex;
    flex-direction: row;
  `,
  LinkBox: styled.div`
    margin-left: ${converter(20)};
    display: flex;
    flex-direction: row;
  `,

  Link: styled.a`
    background-color: var(--in-blue-color);
    border-radius: ${converter(50)};
    width: ${converter(15)};
    height: ${converter(15)};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    cursor: pointer;

    svg {
      width: ${converter(7)};
      height: ${converter(7)};
    }
    &:not(:last-child) {
      margin-right: ${converter(10)};
    }
  `,
};
