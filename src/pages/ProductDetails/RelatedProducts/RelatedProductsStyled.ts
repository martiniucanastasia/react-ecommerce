import styled from "styled-components";
import { converter } from "../../../styles/global";
import { Link } from "react-router-dom";

export const RelatedProductsStyled = {
  GlobalTitle: styled.h3`
    font-size: var(--text-2xxl);
    color: var(--blue-color);
    font-family: "Josefin";
    padding-bottom: ${converter(50)}; ;
  `,
  Box: styled.div`
    padding-top: ${converter(120)};
  `,
  Items: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,

  Item: styled(Link)`
    text-decoration: none;
    img {
      width: ${converter(270)};
      height: ${converter(340)};
      object-fit: cover;
    }
  `,
  Line: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${converter(20)} 0rem ${converter(15)} 0rem;
  `,

  Title: styled.h4`
    font-size: var(--text-base);
    color: var(--blue-color);
    font-family: "Josefin";
  `,
  Price: styled.div`
    color: var(--in-blue-color);
    font-family: "Josefin";
    font-size: var(--text-sm);
    line-height: ${converter(20)};
    margin-right: ${converter(5)};
  `,
  Rating: styled.div`
    & :not(:last-child) {
      margin-right: ${converter(3)};
    }
  `,
};
