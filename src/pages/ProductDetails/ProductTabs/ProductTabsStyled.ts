import styled from "styled-components";
import { converter } from "../../../styles/global";

export const ToggleTabsStyled = {
  Box: styled.div`
    text-align: start;
    padding: ${converter(100)} 0rem ${converter(100)} 0rem;
  `,
  Background: styled.div`
    background-color: var(--half-purple-color);
  `,
  Tabs: styled.div`
    background-color: var(--half-purple-color);
    font-family: "Josefin SemiBold";
    font-size: var(--text-1xxl);
    padding-bottom: ${converter(60)};
  `,
  Tab: styled.button`
    position: relative;
    border: none;
    outline: none;
    margin: 0;
    width: fit-content;
    border-bottom: ${({ active }: { active: boolean }) =>
      active ? "2px solid var(--in-blue-color)" : ""};
    background-color: var(--half-purple-color);
    color: var(--in-blue-color);
    cursor: pointer;

    &:not(:last-child) {
      margin-right: ${converter(85)};
    }
  `,
  Content: styled.div`
    ${({ active }: { active: boolean }) => (active ? "" : "display:none")}
  `,
  DescriptionBox: styled.div`
    margin-bottom: ${converter(35)};
  `,

  SubTitle: styled.h3`
    color: var(--in-blue-color);
    font-size: var(--text-1xl);
    font-family: "Josefin";
    margin-bottom: ${converter(14)};
  `,

  AdditionalInfo: styled.a`
    display: flex;
    align-items: center;
    font-size: var(--text-base);
    color: var(--text-color);
    line-height: ${converter(29)};
    font-family: "Josefin";
    cursor: pointer;

    svg {
      opacity: 0.6;
      margin-right: ${converter(12)};
      &:hover {
        opacity: 1;
      }
    }
  `,
};
