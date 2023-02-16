import React, { useState } from "react";
import { ProductType } from "../../../types";

import { ToggleTabsStyled as T } from "./ProductTabsStyled";
import { GlobalContainer } from "../../../styles/global";
import { Rating } from "../../../components/Rating/Rating";

import { ReactComponent as ArrowSvg } from "../../../assets/images/arrow.svg";

interface ToggleTabsProps {
  product: ProductType;
}

export const ProductTabs = ({ product }: ToggleTabsProps) => {
  const [active, setActive] = useState<number | boolean>(0);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLButtonElement;
    const index = parseInt(target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <T.Background>
      <GlobalContainer>
        <T.Box>
          <T.Tabs>
            <T.Tab onClick={handleClick} active={active === 0} id={"0"}>
              Description
            </T.Tab>

            <T.Tab onClick={handleClick} active={active === 1} id={"1"}>
              Additional Info
            </T.Tab>

            <T.Tab onClick={handleClick} active={active === 2} id={"2"}>
              Rewiews
            </T.Tab>

            <T.Tab onClick={handleClick} active={active === 3} id={"3"}>
              Video
            </T.Tab>
          </T.Tabs>
          <>
            <T.Content active={active === 0}>
              <T.DescriptionBox>
                <T.SubTitle>Description</T.SubTitle>
                <T.AdditionalInfo>{product.description}</T.AdditionalInfo>
              </T.DescriptionBox>
              <T.SubTitle>More details</T.SubTitle>
              <T.AdditionalInfo>
                <ArrowSvg />
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </T.AdditionalInfo>
              <T.AdditionalInfo>
                <ArrowSvg />
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </T.AdditionalInfo>
              <T.AdditionalInfo>
                <ArrowSvg />
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </T.AdditionalInfo>
              <T.AdditionalInfo>
                <ArrowSvg />
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </T.AdditionalInfo>
            </T.Content>

            <T.Content active={active === 1}>
              <T.DescriptionBox>
                <T.SubTitle>Additional Info</T.SubTitle>
                <T.AdditionalInfo>
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus
                  dolor ornare faucibus vel sed et eleifend habitasse amet.
                  Montes, mauris varius ac est bibendum. Scelerisque a, risus ac
                  ante. Velit consectetur neque, elit, aliquet. Non varius proin
                  sed urna, egestas consequat laoreet diam tincidunt. Magna eget
                  faucibus cras justo, tortor sed donec tempus. Imperdiet
                  consequat, quis diam arcu, nulla lobortis justo netus dis. Eu
                  in fringilla vulputate nunc nec. Dui, massa viverr .
                </T.AdditionalInfo>
              </T.DescriptionBox>
            </T.Content>
            <T.Content active={active === 2}>
              <T.DescriptionBox>
                <T.SubTitle>Rewiews</T.SubTitle>
                <T.AdditionalInfo>
                  <Rating rating={product.rating} />
                </T.AdditionalInfo>
              </T.DescriptionBox>
              <T.SubTitle>More details</T.SubTitle>
              <T.AdditionalInfo>
                <ArrowSvg />
                I'm in love with this one! - Maria
              </T.AdditionalInfo>
              <T.AdditionalInfo>
                <ArrowSvg />I waited 2 weeks for delivery from China to Moldova!
                It was really fast! - Josh
              </T.AdditionalInfo>
            </T.Content>
            <T.Content active={active === 3}>
              <T.SubTitle>Video</T.SubTitle>
              <a href="https://www.youtube.com/watch?v=ux6zXguiqxM">
                {" "}
                https://www.youtube.com/watch?v=ux6zXguiqxM
              </a>
            </T.Content>
          </>
        </T.Box>
      </GlobalContainer>
    </T.Background>
  );
};
