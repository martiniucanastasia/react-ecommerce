import { Link } from "react-router-dom";
import styled from "styled-components";
import { converter } from "../../../styles/global";
import { device } from "../../../styles/devices";

export const DiscountItemStyled = {
  GeneralTitle: styled.h2`
    display: flex;
    justify-content: center;
    font-family: "Josefin Bold";
    font-size: var(--text-4xxl);
    color: var(--in-blue-color);
    padding-bottom: ${converter(30)};
  `,
  Box: styled.div`
    padding: ${converter(120)} 0rem ${converter(100)} 0rem;
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
    font-family: "Josefin";
    font-size: var(--text-lg);
    cursor: pointer;

    &:not(:last-child) {
      margin-right: ${converter(25)};
    }
  `,
  Content: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ active }: { active: boolean }) => (active ? "" : "display:none")};
    @media ${device.laptopXS} {
      flex-direction: column;
    }
  `,
  DescriptionBox: styled.div`
    max-width: ${converter(600)};
  `,

  SubTitle: styled.h3`
    color: var(--in-blue-color);
    font-size: var(--text-1xxl);
    font-family: "Josefin Bold";
    margin-bottom: ${converter(14)};
  `,

  Label: styled.span`
    color: var(--pink-color);
    font-size: var(--text-xl);
    font-family: "Josefin";
  `,
  TextWrapper: styled.div`
    padding: ${converter(20)} 0;
  `,
  Text: styled.p`
    font-family: "Lato";
    font-size: var(--text-lg);
    line-height: ${converter(30)};
    color: var(--light-text-color);
    padding-bottom: ${converter(10)};
    letter-spacing: 0.02em;
  `,
  FeatureBox: styled.div`
    display: flex;
    flex-direction: row;
    gap: ${converter(30)};
    margin-bottom: ${converter(20)};
  `,
  CheckBox: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      padding-right: ${converter(10)};
      padding-bottom: ${converter(10)};
    }
  `,
  ButtonBox: styled(Link)``,
  ImageChair: styled.div`
    img {
      width: ${converter(600)};
      height: ${converter(500)};

      @media ${device.laptopXS} {
        width: ${converter(400)};
        height: ${converter(300)};
      }
    }
  `,
};
