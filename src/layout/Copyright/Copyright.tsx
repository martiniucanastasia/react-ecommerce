import { CopyrightStyled as C } from "./CopyrightStyled";

import { ReactComponent as FacebookSvg } from "../../assets/images/facebook.svg";
import { ReactComponent as InstagramSvg } from "../../assets/images/inst.svg";
import { ReactComponent as TwitterSvg } from "../../assets/images/twitter.svg";

export const Copyright = () => {
  return (
    <C.Background>
      <C.Container>
        <p>&copy; Webecy - All Rights Reserved</p>
        <C.Socials>
          <C.Link href={"https://www.facebook.com/"}>
            <FacebookSvg />
          </C.Link>
          <C.Link href={"https://www.instagram.com/"}>
            <InstagramSvg />
          </C.Link>
          <C.Link href={"https://twitter.com/"}>
            <TwitterSvg />
          </C.Link>
        </C.Socials>
      </C.Container>
    </C.Background>
  );
};
