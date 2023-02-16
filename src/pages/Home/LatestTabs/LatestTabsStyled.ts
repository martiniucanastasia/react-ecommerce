import styled from "styled-components";
import { converter } from "../../../styles/global";
import { device } from "../../../styles/devices";

export const LatestProductsStyled = {
  Box: styled.div`
    padding-top: ${converter(70)};
  `,
  GeneralTitle: styled.h2`
    display: flex;
    justify-content: center;
    font-family: "Josefin Bold";
    font-size: var(--text-4xxl);
    color: var(--in-blue-color);
    padding-bottom: ${converter(30)};
  `,
  Tabs: styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: ${converter(60)};
  `,
  Tab: styled.button`
    position: relative;
    border: none;
    outline: none;
    margin: 0;
    width: fit-content;
    background-color: var(--white-color);
    border-bottom: ${({ active }: { active: boolean }) =>
      active ? "2px solid var(--pink-color)" : ""};
    color: ${({ active }: { active: boolean }) =>
      active ? "var(--pink-color)" : "var(--in-blue-color)"};
    cursor: pointer;
    font-family: "Lato";
    font-size: var(--text-lg);
    line-height: ${converter(21)};

    &:not(:last-child) {
      margin-right: ${converter(60)};
    }
  `,
  Content: styled.div`
    ${({ active }: { active: boolean }) => (active ? "" : "display:none")}
  `,
};

export const Buttons = styled.div`
  display: none;
  position: absolute;
  flex-direction: column;
  bottom: 15%;
  left: ${converter(15)};
  gap: ${converter(5)};
  z-index: 888;
  button {
    :hover {
      background-color: var(--light-lavender);
      svg path {
        fill: var(--dark-sky-blue);
      }
    }
  }
`;
export const Item = {
  Items: styled.div`
    display: grid;
    grid-gap: ${converter(100)} ${converter(40)};
    grid-template-columns: repeat(auto-fill, minmax(${converter(360)}, 1fr));

    @media ${device.tablet} {
      grid-gap: ${converter(50)} ${converter(20)};
    }
  `,
  Item: styled.div`
    position: relative;
    a {
      text-decoration: none;
    }
    &:hover {
      ${Buttons} {
        display: flex;
      }
    }

    img {
      width: 100%;
      height: ${converter(270)};
      object-fit: cover;
    }
  `,
  Info: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: ${converter(5)};
  `,
  Title: styled.h3`
    font-family: "Josefin";
    color: var(--in-blue-color);
    font-size: var(--text-base);
    line-height: ${converter(18)};
    padding-bottom: ${converter(2)};
    border-bottom: ${converter(2)} solid var(--light-gray-color);
  `,
  Price: styled.div`
    display: flex;
    flex-direction: row;
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
};
