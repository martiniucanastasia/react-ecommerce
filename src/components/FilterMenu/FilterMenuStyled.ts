import styled from "styled-components";
import { converter } from "../../styles/global";
import { device } from "../../styles/devices";

export const FilterMenuStyled = {
  Category: styled.div`
    padding-bottom: ${converter(45)};
    @media ${device.tablet} {
      padding-left: ${converter(30)};
    }
  `,
  Title: styled.h4`
    font-family: "Josefin";
    color: var(--in-blue-color);
    font-size: var(--text-xl);
    margin-bottom: ${converter(25)};
    border-bottom: ${converter(2)} solid var(--in-blue-color);
    width: fit-content;
  `,
  List: styled.ul`
    list-style: none;
  `,
  Label: styled.label`
    display: flex;
    position: relative;
    align-items: center;
    user-select: none;
    font-family: "Lato";
    color: var(--light-gray-text-color);
    font-size: var(--text-base);
    margin-bottom: ${converter(20)};
    cursor: pointer;
    input {
      opacity: 0;
      margin-right: ${converter(10)};
    }
  `,
};

export const FilterBox = {
  Box: styled.div`
    width: ${converter(200)};
  `,
  ResetButton: styled.button`
    background: none;
    border: none;
    padding: 0;
    outline: inherit;
    padding: ${converter(15)} ${converter(15)};
    margin-bottom: ${converter(20)};
    font-family: "Josefin SemiBold";
    border: ${converter(1)} solid var(--light-blue-color);
    font-size: var(--text-lg);
    color: var(--light-blue-color);
    transition: all 0.3s;
    cursor: pointer;
    line-height: 0;
    :hover {
      transition: 0.5s;
      background-color: var(--light-blue-color);
      color: var(--white-color);
    }
  `,
};
