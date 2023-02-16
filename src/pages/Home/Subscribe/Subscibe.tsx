import { SubscribeStyled as S } from "./Subscribe";
import { Button } from "../../../components/Button/Button";

import SubscribeImg from "../../../assets/images/subscribebg.jpg";

export const Subscribe = () => {
  return (
    <>
      <S.Container>
        <img src={SubscribeImg} alt="" />
        <S.Info>
          <S.Title>Get Leatest Update By Subscribe 0ur Newslater</S.Title>
          <Button>Subscribe</Button>
        </S.Info>
      </S.Container>
    </>
  );
};
