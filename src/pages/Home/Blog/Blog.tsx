import { GlobalContainer } from "../../../styles/global";
import { Title, Article, BlogCardsStyled as B } from "./BlogStyled";

import BlogFirstJpg from "../../../assets/images/blog1.jpg";
import BlogSecondJpg from "../../../assets/images/blog2.jpg";
import BlogThirdJpg from "../../../assets/images/blog3.jpg";

import { ReactComponent as PenSvg } from "../../../assets/images/pen.svg";
import { ReactComponent as CalendarSvg } from "../../../assets/images/calendar.svg";

export const Blog = () => {
  const slides = [BlogFirstJpg, BlogSecondJpg, BlogThirdJpg];

  return (
    <GlobalContainer>
      <B.GeneralTitle>Latest Blog</B.GeneralTitle>
      <B.Box>
        {slides.map((slide) => {
          return (
            <B.Card key={slide}>
              <B.ImageBox>
                <img src={slide} alt="" />
              </B.ImageBox>
              <B.InfoBox>
                <B.AuthorDateBox>
                  <PenSvg />
                  <B.Info>Author</B.Info>
                  <CalendarSvg />
                  <B.Info>21 August, 2020</B.Info>
                </B.AuthorDateBox>
                <Title>Top esssential Trends in 2021</Title>
                <B.Text>
                  More off this less hello samlande lied much over tightly circa
                  horse taped mightly
                </B.Text>
                <Article to={`/`}>Read More</Article>
              </B.InfoBox>
            </B.Card>
          );
        })}
      </B.Box>
    </GlobalContainer>
  );
};
