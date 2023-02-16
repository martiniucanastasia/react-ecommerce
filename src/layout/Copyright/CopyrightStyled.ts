import styled from "styled-components";
import { converter } from "../../styles/global";

export const CopyrightStyled = {
  Background: styled.div`
    background-color: var(--pastel-purple-color);
  `,

  Container: styled.div`
    display: flex;
    justify-content: space-between;
    max-width: ${converter(1100)};
    margin: 0 auto;
    padding: ${converter(16)} 0;

    p {
      font-family: "Lato";
      font-weight: 600;
      line-height: ${converter(19)};
      color: var(--copyright-gray-color);
    }
  `,
  Socials: styled.div`
    display: flex;
    align-items: center;
  `,
  Link: styled.a`
    background-color: var(--in-blue-color);
    border-radius: ${converter(50)};
    width: ${converter(20)};
    height: ${converter(20)};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: ${converter(10)};
    }
  `,
};
