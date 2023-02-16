import styled from "styled-components";
import { Link } from "react-router-dom";
import { converter } from "../../styles/global";
import { device } from "../../styles/devices";

export const RoadStyled = {
  Background: styled.div`
    background-color: var(--pantone-purple-color);
    width: auto;
    padding: ${converter(115)} 0rem;

    @media ${device.tablet} {
      padding: ${converter(80)} 0rem;
    }
  `,
  Title: styled.div`
    font-family: "Josefin Bold";
    font-size: ${converter(36)};
    color: var(--blue-color);
    padding-bottom: ${converter(16)};
  `,
  Road: styled(Link)`
    font-family: "Lato";
    text-decoration: none;
    color: var(--off-blue-color);

    &:hover {
      color: var(--pink-color);
    }

    &:not(:last-child) {
      margin-right: ${converter(16)};
    }
  `,
};

export const ActiveRoad = styled(Link)`
  text-decoration: none;
  font-family: "Lato";
  color: var(--pink-color);
`;
