import styled from "styled-components";
import { converter } from "../../../styles/global";

export const ProductTableStyled = {
  GridSquares: styled.div`
    margin: 0 auto;
    display: grid;
    grid-gap: ${converter(45)} ${converter(45)};
    grid-template-columns: repeat(auto-fill, minmax(${converter(270)}, 1fr));
  `,
  GridLines: styled.div`
    display: grid;
    gap: ${converter(20)};
    grid-template-columns: repeat(auto-fit, (${converter(920)}, 1fr));
  `,
};
