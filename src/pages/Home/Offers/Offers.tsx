import { OffersStyled as O } from "./OffersStyled";
import { GlobalContainer } from "../../../styles/global";

import OffersOne from "../../../assets/images/offers-1.png";
import OffersTwo from "../../../assets/images/offers-2.png";
import OffersThree from "../../../assets/images/offers-3.png";
import OffersFour from "../../../assets/images/offers-4.png";

export const Offers = () => {
  const cardsArr = [OffersOne, OffersTwo, OffersThree, OffersFour];

  return (
    <O.Wrapper>
      <GlobalContainer>
        <O.GeneralTitle>What Shopex Offer!</O.GeneralTitle>
        <O.Cards>
          {cardsArr.map((cardContent, index) => {
            return (
              <O.Card key={index}>
                <O.CardImage src={cardContent} alt="24/7 Support" />
                <O.CardTitle>24/7 Support</O.CardTitle>
                <O.CardParagraph>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam, asperiores!
                </O.CardParagraph>
              </O.Card>
            );
          })}
        </O.Cards>
      </GlobalContainer>
    </O.Wrapper>
  );
};
