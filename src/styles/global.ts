import styled, { createGlobalStyle } from "styled-components";
import { variables } from "./variables";
import { fontStyles } from "../assets/fonts/fonts";

// ${converter(16)}
export const converter = (...px: number[]): string => {
  const oneByOne = 16;
  return px.map((item) => `${item / oneByOne}rem`).join(" ");
};

export const GlobalContainer = styled.div`
  max-width: ${converter(1240)};
  margin: 0 auto;
  padding: 0 ${converter(20)};
`;

export const Global = createGlobalStyle`
  ${variables};
  ${fontStyles};

  * {
    margin: 0;
    padding: 0;

  }

  h1, h2, h3, h4{
    margin: 0;
    padding: 0
  }
`;
