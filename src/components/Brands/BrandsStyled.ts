import styled from "styled-components";
import { device } from "../../styles/devices";
import { converter } from "../../styles/global";

export const BrandsStyled = {
  Box: styled.div`
    padding: ${converter(100)} 0;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
      object-fit: cover;
      @media ${device.tabletL} {
      }
    }
  `,
};
