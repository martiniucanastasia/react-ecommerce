import styled from "styled-components";
import { converter } from "../../../styles/global";

export const SubscribeStyled = {
  Container: styled.div`
    position: relative;
    margin-top: ${converter(100)};
    img {
      width: 100%;
      height: ${converter(450)};
      object-fit: cover;
    }
  `,
  Info: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    max-width: ${converter(680)};
  `,
  Title: styled.h3`
    font-size: var(--text-2xxl);
    font-family: "Josefin Bold";
    line-height: ${converter(55)};
    color: var(--in-blue-color);
    padding-bottom: ${converter(30)};
  `,
};
