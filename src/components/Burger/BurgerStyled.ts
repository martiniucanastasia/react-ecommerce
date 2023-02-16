import styled from "styled-components";
import { device } from "../../styles/devices";
import { converter } from "../../styles/global";
import { NavLink } from "react-router-dom";

export const BurgerMenuStyled = {
  StyledMenu: styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: ${({ open }: { open: boolean }) =>
      open ? "translateX(0)" : "translateX(-100%)"};
    background: var(--pastel-purple-color);
    height: 100vh;
    text-align: left;
    padding: ${converter(80)} ${converter(36)};
    width: 40%;
    top: 0;
    left: 0;
    z-index: 10;

    @media ${device.tablet} {
      justify-content: flex-start;
    }

    @media ${device.mobileL} {
      width: 100%;
    }
  `,
  StyledLinkBurger: styled(NavLink)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    font-family: "Lato";
    color: var(--off-blue-color);

    &.active {
      color: var(--pink-color);
    }
    &:hover {
      color: var(--pink-color);
    }

    :not(:last-child) {
      margin-bottom: ${converter(20)};
    }
  `,
  StyledNav: styled.div`
    padding-bottom: ${converter(20)};

    svg path {
      fill: var(--off-blue-color);
    }
  `,
  Search: styled.div`
    display: flex;
    input {
      width: ${converter(160)};
      padding-left: ${converter(16)};
      border: none;
      appearance: none;
      outline: none;
      border-left: solid ${converter(2)};
      border-top: solid ${converter(2)};
      border-bottom: solid ${converter(2)};
      border-color: var(--white-color);
      font-family: "Lato";
    }
  `,

  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    gap: ${converter(5)};
    align-items: center;
  `,
  Contacts: styled.div`
    display: flex;
    flex-direction: column;
    gap: ${converter(10)};
    padding: ${converter(20)} 0;

    cursor: pointer;
    span {
      margin-left: ${converter(5)};
    }
    svg path {
      fill: var(--sub-text-color);
    }
  `,
  LinkStyled: styled.a`
    text-decoration: none;
    font-family: "Lato";
    line-height: ${converter(20)};
    color: var(--sub-text-color);
  `,
  Selects: styled.div`
    display: flex;
    padding-top: ${converter(20)};
    gap: ${converter(20)};
  `,
  BurgerSelect: styled.select`
    background-color: var(--pastel-purple-color);
    font-family: "Josefin";
    color: var(--off-blue-color);
    border: none;
  `,
};

export const StyledBurger = styled.button`
  position: absolute;
  top: 25%;
  left: ${converter(36)};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${converter(32)};
  height: ${converter(32)};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;

  div {
    width: ${converter(32)};
    height: ${converter(4)};
    background: ${({ open }: { open: boolean }) =>
      open ? "#0D0C1D" : "#EFFFFA"};
    border-radius: ${converter(10)};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: ${converter(1)};
    display: none;

    @media ${device.tablet} {
      display: block;
    }

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
