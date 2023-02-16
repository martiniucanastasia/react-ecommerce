import { RatingStyled as S } from "./RatingStyled";

import { ReactComponent as StarSvg } from "../../assets/images/star.svg";

interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  if (!rating) {
    console.log("Ooops, something wrong with your {rating} prop!");
  }

  const array = new Array(Math.floor(rating)).fill(1);

  while (array.length < 5) {
    array.push(0);
  }

  return (
    <>
      {array.map((item, index) => {
        return item === 1 ? (
          <S.ActiveStar key={index}>
            <StarSvg />
          </S.ActiveStar>
        ) : (
          <S.InactiveStar key={index}>
            <StarSvg />
          </S.InactiveStar>
        );
      })}
    </>
  );
};
