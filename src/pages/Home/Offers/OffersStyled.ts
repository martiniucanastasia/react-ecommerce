import styled from "styled-components";
import { converter } from "../../../styles/global";

export const OffersStyled = {
  Wrapper: styled.div`
    padding-top: ${converter(60)};
  `,
  GeneralTitle: styled.h2`
    display: flex;
    justify-content: center;
    font-family: "Josefin Bold";
    font-size: var(--text-4xxl);
    color: var(--in-blue-color);
    padding-bottom: ${converter(50)};
  `,
  Cards: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: ${converter(30)};
  `,
  Card: styled.div`
    max-width: ${converter(220)};
    padding: ${converter(50)} ${converter(25)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 8px 40px rgba(49, 32, 138, 0.05);
  `,
  CardImage: styled.img`
    width: ${converter(65)};
    height: ${converter(65)};
  `,
  CardTitle: styled.h3`
    margin-top: ${converter(25)};
    margin-bottom: ${converter(20)};
    font-family: "Josefin";
    font-size: var(--text-1xl);
    line-height: ${converter(26)};
    color: var(--in-blue-color);
  `,
  CardParagraph: styled.p`
    margin: 0;
    text-align: center;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: var(--text-base);
    line-height: ${converter(26)};
    text-align: center;
    color: var(--sub-text-color);
  `,
};
