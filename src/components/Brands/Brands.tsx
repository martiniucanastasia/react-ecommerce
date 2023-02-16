import BrandsImage from "../../assets/images/brands.png";

import { GlobalContainer } from "../../styles/global";
import { BrandsStyled as B } from "./BrandsStyled";

export const Brands = () => {
  return (
    <GlobalContainer>
      <B.Box>
        <img src={BrandsImage} alt="Brands" />
      </B.Box>
    </GlobalContainer>
  );
};
