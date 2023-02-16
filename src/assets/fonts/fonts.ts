import { css } from "styled-components";

import JosefinRegular from "../fonts/JosefinRegular/josefin-sans-300.woff2";
import JosefinBold from "../fonts/JosefinBold/josefin-sans-700.woff2";
import JosefinSemiBold from "../fonts/JosefinSemiBold/josefin-sans-600.woff2";
import Lato from "../fonts/LatoRegular/lato-latin-300.woff2";
import LatoBold from "../fonts/LatoBold/lato-latin-700.woff2";

export const fontStyles = css`
  // Josefin Sans Regular
  @font-face {
    font-display: swap;
    font-family: "Josefin";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${JosefinRegular}) format("woff2");
  }
  // Josefin Sans Bold 700
  @font-face {
    font-display: swap;
    font-family: "Josefin Bold";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${JosefinBold}) format("woff2");
  }
  // Josefin Sans Bold 600
  @font-face {
    font-display: swap;
    font-family: "Josefin SemiBold";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${JosefinSemiBold}) format("woff2");
  }
  // Lato Regular
  @font-face {
    font-display: swap;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${Lato}) format("woff2");
  }
  @font-face {
    font-display: swap;
    font-family: "Lato Bold";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${LatoBold}) format("woff2");
  }
`;
