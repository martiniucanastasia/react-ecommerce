import { Dispatch, SetStateAction, useState } from "react";

import { BurgerMenuStyled as M } from "./BurgerStyled";
import { StyledBurger } from "./BurgerStyled";
import { IconButton } from "../Button/IconButton";
import { languages, currency } from "../../layout/Topbar/data";

import { ReactComponent as MailSvg } from "../../assets/images/mail.svg";
import { ReactComponent as PhoneSvg } from "../../assets/images/phone.svg";
import { ReactComponent as UserSvg } from "../../assets/images/user.svg";
import { ReactComponent as LikeSvg } from "../../assets/images/like.svg";
import { ReactComponent as CartSvg } from "../../assets/images/cart.svg";
import { ReactComponent as SearchSvg } from "../../assets/images/search.svg";
import { useOutsideClick } from "../../hooks/useOutsideClick";

interface BurgerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Burger = () => {
  const [open, setOpen] = useState<boolean>(false);

  const BurgerBase = ({ open, setOpen }: BurgerProps) => {
    return (
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    );
  };

  const BugerMenu = ({ open, setOpen }: BurgerProps) => {
    const handleClickOutside = () => setOpen(false);
    const ref = useOutsideClick(handleClickOutside);
    return (
      <M.StyledMenu ref={ref} open={open}>
        <M.StyledNav>
          <M.StyledLinkBurger onClick={() => setOpen(false)} to={"/"}>
            Home
          </M.StyledLinkBurger>
          <M.StyledLinkBurger onClick={() => setOpen(false)} to={"/pages"}>
            Pages
          </M.StyledLinkBurger>
          <M.StyledLinkBurger onClick={() => setOpen(false)} to={"products"}>
            Products
          </M.StyledLinkBurger>
          <M.StyledLinkBurger onClick={() => setOpen(false)} to={"/blog"}>
            Blog
          </M.StyledLinkBurger>
          <M.StyledLinkBurger onClick={() => setOpen(false)} to={"/shop"}>
            Shop
          </M.StyledLinkBurger>
          <M.StyledLinkBurger onClick={() => setOpen(false)} to={"/contact"}>
            Contact
          </M.StyledLinkBurger>
          <M.StyledLinkBurger onClick={() => setOpen(false)} to={"/login"}>
            <M.Wrapper>
              <span>Login</span>
              <UserSvg />
            </M.Wrapper>
          </M.StyledLinkBurger>
          <M.StyledLinkBurger onClick={() => setOpen(false)} to={"/wishlist"}>
            <M.Wrapper>
              <span>Wishlist</span>
              <LikeSvg />
            </M.Wrapper>
          </M.StyledLinkBurger>
          <M.StyledLinkBurger onClick={() => setOpen(false)} to={"/cart"}>
            <M.Wrapper>
              <span>Cart</span>
              <CartSvg />
            </M.Wrapper>
          </M.StyledLinkBurger>
          <M.Search>
            <input type="text" />
            <IconButton variant="primary">
              <SearchSvg />
            </IconButton>
          </M.Search>
          <M.Selects>
            <M.BurgerSelect>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </M.BurgerSelect>
            <M.BurgerSelect>
              {currency.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </M.BurgerSelect>
          </M.Selects>
          <M.Contacts>
            <M.LinkStyled href={"mailto:mhhasanul@gmail.com"}>
              <MailSvg />
              <span>mhhasanul@gmail.com</span>
            </M.LinkStyled>
            <M.LinkStyled href="tel:(12345)67890">
              <PhoneSvg />
              <span>(12345)67890</span>
            </M.LinkStyled>
          </M.Contacts>
        </M.StyledNav>
      </M.StyledMenu>
    );
  };
  return (
    <>
      <BurgerBase open={open} setOpen={setOpen} />
      <BugerMenu open={open} setOpen={setOpen} />
    </>
  );
};
