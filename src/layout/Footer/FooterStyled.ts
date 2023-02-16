import styled from "styled-components";
import { Link } from "react-router-dom";
import { converter } from "../../styles/global";
import { device } from "../../styles/devices";

export const FooterStyled = {
  Footer: styled.div`
    background-color: var(--pantone-purple-color);
    width: auto;
    padding: ${converter(100)} 0rem;
    display: flex;
  `,
  Table: styled.div`
    display: flex;
    justify-content: center;
    gap: ${converter(95)};

    @media ${device.tabletL} {
      gap: ${converter(40)};
    }
    @media ${device.tablet} {
      flex-direction: column;
      align-items: center;
    }
  `,
  Logo: styled(Link)`
    text-decoration: none;
    font-family: "Josefin Bold";
    font-size: var(--text-3xxl);
    color: var(--off-blue-color);
  `,
  Form: styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white-color);
    border-radius: ${converter(3)};
    padding: ${converter(2)};
    max-width: ${converter(377)};
    width: 100%;
    margin: ${converter(30)} 0rem;
    input {
      height: ${converter(44)};
      border: none;
      border-radius: ${converter(3)};
      appearance: none;
      outline: none;
      padding: 0rem ${converter(16)};
      flex: 1;
      font-family: "Lato";
      color: var(--sub-text-color);
      font-size: var(--text-base);
    }
  `,

  Info: styled.div`
    font-family: "Lato";
    color: var(--sub-text-color);
    p {
      padding-bottom: ${converter(10)};
    }
  `,
  Box: styled.div`
    h3 {
      font-family: "Josefin";
      color: var(--off-blue-color);
      font-size: var(--text-1xl);
      line-height: ${converter(25)};
      margin: 0;
      padding-bottom: ${converter(40)};
    }
    ul {
      list-style-type: none;
      margin: 0rem;
      padding: 0rem;
    }
    li {
      &:not(:last-child) {
        padding: 0rem 0rem ${converter(20)} 0rem;
      }
      a {
        text-decoration: none;
        font-family: "Lato";
        line-height: ${converter(19)};
        color: var(--sub-text-color);
      }
    }
  `,
};
