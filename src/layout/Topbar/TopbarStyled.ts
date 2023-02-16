import styled from "styled-components";
import { converter } from "../../styles/global";
import { device } from "../../styles/devices";
import { Link } from "react-router-dom";

export const TopbarStyled = {
  Background: styled.div`
    background-color: var(--purple-color);
    padding: ${converter(16)} 0rem;

    @media ${device.tablet} {
      padding: ${converter(35)} 0rem;
      position: relative;
    }
  `,
  Box: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${device.tabletL} {
      flex-direction: column;
      gap: ${converter(20)};
    }
  `,
  Contacts: styled.div`
    display: flex;

    a {
      &:not(:last-child) {
        margin-right: ${converter(48)};

        @media ${device.tabletL} {
          margin-right: ${converter(10)};
        }
      }

      svg {
        margin-right: ${converter(16)};
      }
      @media ${device.tablet} {
        display: none;
      }
    }
  `,
  Menu: styled.div`
    display: flex;
    align-items: center;
    @media ${device.tablet} {
      display: none;
    }
  `,

  Select: styled.select`
    background-color: var(--purple-color);
    font-family: "Josefin";
    color: var(--white-color);
    border: none;
    :not(:last-child) {
      margin-right: ${converter(20)};
    }
    @media ${device.mobileL} {
      margin-right: ${converter(10)};
    }
  `,

  AStyled: styled.a`
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: var(--half-white-color);
    font-family: "Josefin";

    :not(:last-child) {
      margin-right: ${converter(20)};
    }

    span {
      margin-right: ${converter(4)};
    }

    &:last-child {
      margin-left: ${converter(16)};
    }
  `,

  LinkStyled: styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: var(--half-white-color);
    font-family: "Josefin";

    :not(:last-child) {
      margin-right: ${converter(20)};
    }

    span {
      margin-right: ${converter(4)};
    }

    &:last-child {
      margin-left: ${converter(16)};
    }
  `,

  WhiteLogo: styled(Link)`
    display: none;
    text-decoration: none;
    font-family: "Josefin Bold";
    font-size: var(--text-2xxl);
    color: var(--white-color);
    margin: 0;
    padding: 0;
    position: absolute;
    top: 25%;
    right: ${converter(36)};

    @media ${device.tablet} {
      display: block;
    }
  `,
};
