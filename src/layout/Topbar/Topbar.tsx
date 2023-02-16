import { TopbarStyled as T } from "./TopbarStyled";
import { GlobalContainer } from "../../styles/global";
import { Burger } from "../../components/Burger/Burger";
import { languages, currency } from "./data";

import { ReactComponent as MailSvg } from "../../assets/images/mail.svg";
import { ReactComponent as PhoneSvg } from "../../assets/images/phone.svg";
import { ReactComponent as UserSvg } from "../../assets/images/user.svg";
import { ReactComponent as LikeSvg } from "../../assets/images/like.svg";
import { ReactComponent as CartSvg } from "../../assets/images/cart.svg";

export const Topbar = () => {
  return (
    <T.Background>
      <GlobalContainer>
        <T.Box>
          <T.Contacts>
            <T.AStyled href="mailto:mhhasanul@gmail.com">
              <MailSvg />
              <span>mhhasanul@gmail.com</span>
            </T.AStyled>
            <T.AStyled href="tel:(12345)67890">
              <PhoneSvg />
              <span>(12345)67890</span>
            </T.AStyled>
          </T.Contacts>

          <T.Menu>
            <T.Select>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </T.Select>
            <T.Select>
              {currency.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </T.Select>

            <T.LinkStyled to="#">
              <span>Login</span>
              <UserSvg />
            </T.LinkStyled>
            <T.LinkStyled to="#">
              <span>Wishlist</span>
              <LikeSvg />
            </T.LinkStyled>

            <T.LinkStyled to={`/cart`}>
              <CartSvg />
              {/* TODO: Show length of how many products are in cart */}
              <span>5</span>
            </T.LinkStyled>
          </T.Menu>

          <T.WhiteLogo to={"/"}>Hekto</T.WhiteLogo>
        </T.Box>
        <Burger />
      </GlobalContainer>
    </T.Background>
  );
};
