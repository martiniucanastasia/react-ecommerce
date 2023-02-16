import { css } from "styled-components";

const colors = css`
  --white-color: #fff;
  --black-color: #000;
  --pink-color: #fb2e86;
  --light-pink-color: #ffdbf1;
  --greater-pink-color: #ff2aaa;
  --purple-color: #7e33e0;
  --off-purple-color: #603eff;
  --pantone-purple-color: #f6f5ff;
  --pastel-purple-color: #e7e4f8;
  --half-purple-color: #F9F8FE;
  --mix-purple-blue-color: #535399;
  --blue-color: #101750;
  --in-blue-color: #151875;
  --off-blue-color: #0d0e43;
  --navy-blue-color: #a9acc6;
  --light-blue-color: #3f509e;
  --orange-color: #ffcc2e;
  --light-orange-color: #fff6da;
  --half-white-color: #f1f1f1;
  --green-color: #19D16F;
 
  
  //Texts and underlines
  --shadow-gray-color: #F6F4FD;
  --block-gray-color: #F4F4FC;
  --border-gray-color: #e7e6ef;
  --info-gray-color: #C5CBE3;
  --underline-gray-color: #E8E6F1;
  --copyright-gray-color: #9da0ae;
  --dark-gray-text-color: #7E81A2;
  --light-gray-text-color: #989BB5;
  --light-gray-color: #EEEFFB;
  --text-color: #9295AA;
  --light-text-color: #B7BACB;
  --sub-text-color: #8a8fb9;
  --quantity-box-color: #F0EFF2;
  --quantity-text-color:#BEBFC2;
  --quantity-symbols-color: #E7E7EF;


  //Accents and hovers
  --light-lavender: #EEEFFB;
  --light-sky-blue: #1389FF;
  --dark-sky-blue: #2F1AC4;
  --green-color: #08D15F;
  --light-sky-pink-color: #FEBAD7;

  //Product's colors
  --dirty-orange-color: #de9034;
  --girl-pink-color: #ec42a2;
  --lavender-color: #8568ff;

  //Filters
  --dark-purple-color: #603EFF;
  --light-purple-color: #E5E0FC;

  --dark-pink-color: #FF3EB2;
  --light-pink-color: #ffdbf1;

  --dark-orange-color: #ffcc2e;
  --light-orange-color: #fff6da;

  //Stars
  --yellow-color: #FFC107;
  --grey-color: #B2B2B2;

  // Slider Backgrounds
  --purple-100: #F2F0FF;

`;

const fontSizes = css`
  --text-5xxl: clamp(2.625rem, calc(1.7656rem + 2.75vw), 3.3125rem);// max 53, min 42
  --text-4xxl: clamp(1.88rem, calc(1.66rem + 1.07vw), 2.63rem); // max 42, min 30
  --text-3xxl: clamp(1.75rem, calc(1.57rem + 0.89vw), 2.38rem); // max 38, min 28
  --text-2xxl: clamp(1.63rem, calc(1.45rem + 0.89vw), 2.25rem); // max 36, min 26
  --text-1xxl: clamp(1.5rem, calc(1.32rem + 0.89vw), 2.13rem); // max 34, min 24
  --text-xxl: clamp(1.25rem, calc(1.07rem + 0.89vw), 1.88rem); // max 30, min 20
  --text-3xl: clamp(1.44rem, calc(1.38rem + 0.27vw), 1.63rem); // max 26, min 23
  --text-2xl: clamp(1.38rem, calc(1.34rem + 0.18vw), 1.5rem); // max 24, min 22
  --text-1xl: clamp(1.25rem, calc(1.21rem + 0.18vw), 1.38rem); // max 22, min 20
  --text-xl: clamp(1.13rem, calc(1.09rem + 0.18vw), 1.25rem); // max 20, min 18
  --text-lg: clamp(1rem, calc(0.96rem + 0.18vw), 1.13rem); // max 18, min 16
  --text-base: clamp(0.88rem, calc(0.84rem + 0.18vw), 1rem); // max 16, min 14
  --text-1sm: clamp(0.81rem, calc(0.78rem + 0.18vw), 0.94rem); // max 15, min 13
  --text-sm: clamp(0.75rem, calc(0.71rem + 0.18vw), 0.88rem); // max 14, min 12
  --text-1xs: clamp(0.63rem, calc(0.59rem + 0.18vw), 0.75rem); // max 12, min 10
  --text-xs: clamp(0.56rem, calc(0.53rem + 0.18vw), 0.69rem); // max 11, min 9
`;



export const variables = css`
  :root {
    ${colors};
    ${fontSizes}

    --font-primary: "Josefin";
    --font-secondary: "Lato";

  }
`;
