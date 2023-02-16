import { GlobalContainer } from "../../styles/global";

import { HeaderStyled as H } from "./HeaderStyled";
import { StyledLink } from "./HeaderActiveStyled";
import { IconButton } from "../../components/Button/IconButton";

import { ReactComponent as SearchSvg } from "../../assets/images/search.svg";

export const Header = () => {
  return (
    <GlobalContainer>
      <H.Header>
        <H.LeftSide>
          <H.Logo to={"/"}>Hekto</H.Logo>
          <H.Menu>
            <StyledLink to={"/"}>Home</StyledLink>
            <StyledLink to={"/pages"}>Pages</StyledLink>
            <StyledLink to={"products"}>Products</StyledLink>
            <StyledLink to={"/blog"}>Blog</StyledLink>
            <StyledLink to={"/shop"}>Shop</StyledLink>
            <StyledLink to={"/contact"}>Contact</StyledLink>
          </H.Menu>
        </H.LeftSide>
        <H.Search>
          <input type="text" />
          <IconButton>
            <SearchSvg />
          </IconButton>
        </H.Search>
      </H.Header>
    </GlobalContainer>
  );
};
