import styled from "styled-components";
import { converter } from "../../../styles/global";
import { Link } from "react-router-dom";

export const Title = styled.h3`
  font-family: "Josefin SemiBold";
  font-size: var(--text-lg);
  color: var(--in-blue-color);
  transition: all 0.3s;
  padding: ${converter(30)} 0 ${converter(20)} 0;
`;

export const Article = styled(Link)`
  text-decoration: none;
  transition: all 0.3s;
  border-bottom: ${converter(1)} solid var(--in-blue-color);
  width: fit-content;
  font-family: "Lato";
  font-size: var(--text-base);
  color: var(--in-blue-color);
  line-height: ${converter(30)};
  margin-top: ${converter(20)};
`;

export const BlogCardsStyled = {
  GeneralTitle: styled.h2`
    display: flex;
    justify-content: center;
    font-family: "Josefin Bold";
    font-size: var(--text-4xxl);
    color: var(--in-blue-color);
  `,
  Box: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${converter(55)};
    padding: ${converter(80)} 0 ${converter(115)} 0;
    text-decoration: none;
  `,
  Card: styled.div`
    display: block;
    max-width: ${converter(370)};
    box-shadow: 0 0 ${converter(25)} ${converter(10)} var(--shadow-gray-color);
    &:hover {
      ${Title} {
        color: var(--pink-color);
      }
      ${Article} {
        color: var(--pink-color);
        border-bottom: ${converter(1)} solid var(--pink-color);
      }
    }
  `,

  AuthorDateBox: styled.div`
    display: flex;
    flex-direction: row;
    svg {
      margin-right: ${converter(5)};
    }
  `,
  Info: styled.span`
    font-family: "Josefin";
    font-size: var(--text-sm);
    color: var(--in-blue-color);
    :not(:last-child) {
      margin-right: ${converter(15)};
    }
  `,
  ImageBox: styled.div`
    aspect-ratio: 74/51;
    img {
      border-radius: ${converter(10)};
      object-fit: cover;
    }
  `,

  InfoBox: styled.div`
    display: flex;
    flex-direction: column;
    padding: ${converter(20)} 0 ${converter(35)} ${converter(20)};
  `,
  Text: styled.p`
    font-family: "Lato";
    font-size: var(--text-base);
    color: var(--text-color);
    line-height: ${converter(30)};
  `,
};
