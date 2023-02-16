import React, { useState } from "react";

import { DiscountItemStyled as T } from "./DiscountTabsStyled";
import { GlobalContainer } from "../../../styles/global";
import { Button } from "../../../components/Button/Button";

import WoodChair from "../../../assets/images/slider3.png";
import PlasticChair from "../../../assets/images/slider2.png";
import SofaChair from "../../../assets/images/slider1.png";
import { ReactComponent as CheckmarkSvg } from "../../../assets/images/checkmark.svg";

export const DiscountTabs = () => {
  const [active, setActive] = useState<number | boolean>(0);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLButtonElement;
    const index = parseInt(target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <div>
      <GlobalContainer>
        <T.Box>
          <T.GeneralTitle>Discount Item</T.GeneralTitle>
          <T.Tabs>
            <T.Tab onClick={handleClick} active={active === 0} id={"0"}>
              Wood Chair
            </T.Tab>
            <T.Tab onClick={handleClick} active={active === 1} id={"1"}>
              Plastic Chair
            </T.Tab>
            <T.Tab onClick={handleClick} active={active === 2} id={"2"}>
              Sofa Collection
            </T.Tab>
          </T.Tabs>
          <>
            <T.Content active={active === 0}>
              <ToggleTab />
              <T.ImageChair>
                <img src={WoodChair} alt="Wood Chair" />
              </T.ImageChair>
            </T.Content>
            <T.Content active={active === 1}>
              <ToggleTab />
              <T.ImageChair>
                <img src={PlasticChair} alt="Plastic Chair" />
              </T.ImageChair>
            </T.Content>
            <T.Content active={active === 2}>
              <ToggleTab />
              <T.ImageChair>
                <img src={SofaChair} alt="Sofa Chair" />
              </T.ImageChair>
            </T.Content>
          </>
        </T.Box>
      </GlobalContainer>
    </div>
  );
};

const ToggleTab = () => {
  return (
    <T.DescriptionBox>
      <T.SubTitle>20% Discount Of All Products</T.SubTitle>
      <T.Label>Eams Sofa Compact</T.Label>
      <T.TextWrapper>
        <T.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          feugiat habitasse nec, bibendum condimentum.
        </T.Text>
      </T.TextWrapper>
      <T.FeatureBox>
        <div>
          <T.CheckBox>
            <CheckmarkSvg />
            <T.Text>Material expose like metals</T.Text>
          </T.CheckBox>
          <T.CheckBox>
            <CheckmarkSvg />
            <T.Text>Simple neutral colours</T.Text>
          </T.CheckBox>
        </div>
        <div>
          <T.CheckBox>
            <CheckmarkSvg />
            <T.Text>Clear lines and geomatric figures</T.Text>
          </T.CheckBox>
          <T.CheckBox>
            <CheckmarkSvg />
            <T.Text>Material expose like metals</T.Text>
          </T.CheckBox>
        </div>
      </T.FeatureBox>
      <T.ButtonBox to={`/`}>
        <Button size={"medium"}>Shop Now</Button>
      </T.ButtonBox>
    </T.DescriptionBox>
  );
};
