import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  &.active {
    color: var(--pink-color);
  }
`;
