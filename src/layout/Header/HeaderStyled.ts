import styled from "styled-components";
import { Link } from "react-router-dom";
import { converter } from "../../styles/global";
import { device } from "../../styles/devices";

export const HeaderStyled = {
  Header: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${converter(32)} 0rem;
    background-color: #fff;
    @media ${device.tabletL} {
      flex-direction: column;
      gap: ${converter(20)};
    }

    @media ${device.tablet} {
      display: none;
    }
  `,
  LeftSide: styled.div`
    display: flex;
    align-items: center;
    gap: ${converter(90)};
    @media ${device.tablet} {
      gap: 0;
    }
  `,
  Logo: styled(Link)`
    text-decoration: none;
    font-family: "Josefin Bold";
    font-size: var(--text-1xxl);
    color: var(--off-blue-color);
  `,

  Menu: styled.nav`
    a {
      text-decoration: none;
      font-family: "Lato";
      color: var(--off-blue-color);
      margin-right: ${converter(35)};

      &:hover {
        color: var(--pink-color);
      }
    }
  `,
  Search: styled.div`
    display: flex;
    input {
      width: ${converter(255)};
      padding-left: ${converter(16)};
      border: none;
      appearance: none;
      outline: none;
      border-left: solid ${converter(2)};
      border-top: solid ${converter(2)};
      border-bottom: solid ${converter(2)};
      border-color: var(--border-gray-color);
      font-family: "Lato";
    }
  `,
};
