import { Link } from "react-router-dom";
import styled from "styled-components";
import { converter } from "../../../styles/global";

export const TopCategoriesStyled = {
  GeneralTitle: styled.h3`
    display: flex;
    justify-content: center;
    font-family: "Josefin Bold";
    font-size: var(--text-4xxl);
    color: var(--in-blue-color);
  `,

  Box: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 ${converter(10)};
    padding: ${converter(100)} 0 ${converter(150)} 0;
  `,
};

export const ShadowBox = styled.div`
  border-radius: 50%;
  display: none;
  position: absolute;
  width: ${converter(250)};
  height: ${converter(250)};
  border-radius: 50%;
  border: ${converter(13)} solid #9877e7;
  z-index: -1;
  bottom: ${converter(62)};
  left: ${converter(-10)};
  box-shadow: 0 ${converter(8)} ${converter(40)} rgba(49, 32, 138, 0.05);
`;

export const ButtonBox = styled.div`
  display: none;
  position: absolute;
  bottom: 30%;
  left: 30%;
`;

export const TopProduct = {
  Item: styled(Link)`
    position: relative;
    text-decoration: none;
    a {
      text-decoration: none;
    }
    :hover {
      ${ShadowBox} {
        display: flex;
      }
      ${ButtonBox} {
        display: flex;
      }
    }
  `,
  Image: styled.div`
    border-radius: 50%;
    img {
      width: ${converter(270)};
      height: ${converter(270)};
      border-radius: 50%;
      object-fit: cover;
    }
  `,
  Info: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
  `,
  Title: styled.p`
    font-family: "Josefin";
    font-size: var(--text-xl);
    line-height: ${converter(23)};
    color: var(--in-blue-color);
    padding: ${converter(25)} 0 ${converter(13)} 0;
    display: -webkit-box;
    max-width: ${converter(300)};
    text-align: center;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    height: ${converter(11)};
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  Price: styled.p`
    font-family: "Josefin";
    font-size: var(--text-base);
    line-height: ${converter(18)};
    color: var(--in-blue-color);
  `,
};
