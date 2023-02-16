import styled from "styled-components";

export const RatingStyled = {
  ActiveStar: styled.span`
    svg path {
      fill: var(--yellow-color) !important;
    }
  `,
  InactiveStar: styled.span`
    svg path {
      fill: var(--grey-color) !important;
    }
  `,
};
