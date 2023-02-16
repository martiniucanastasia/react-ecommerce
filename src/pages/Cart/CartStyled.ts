import styled from "styled-components";
import { converter } from "../../styles/global";
import { device } from "../../styles/devices";

export const CartStyled = {
  CartWrapper: styled.div`
    display: flex;
    padding-top: 130px;
    padding-bottom: 145px;

    @media ${device.laptopS} {
      flex-direction: column;
      align-items: center;
    }
  `,

  // Left Side
  CartInfo: styled.div`
    max-width: 720px;
    width: 100%;
  `,
  CartInfoHeading: styled.div`
    display: flex;

    h2 {
      font-family: "Josefin Bold";
      font-size: var(--text-xl);
      color: var(--in-blue-color);
      line-height: ${converter(23)};
      padding-bottom: ${converter(45)};
      margin-right: 120px;

      &:first-child {
        margin-right: 225px;
      }

      &:nth-child(2) {
        margin-right: 110px;
      }

      &:nth-child(3) {
        margin-right: 130px;
      }

      &:last-child {
        margin: 0;
      }
    }
  `,
  CartItem: styled.div``,
  CartItemWrapper: styled.div`
    display: flex;
    align-items: center;
    padding-bottom: ${converter(15)};
    border-bottom: ${converter(1)} solid var(--border-gray-color);
    margin-bottom: ${converter(15)};
  `,
  CartImage: styled.div`
    display: flex;
    position: relative;
    align-items: center;

    img {
      width: ${converter(83)};
      height: ${converter(87)};
      aspect-ratio: 83/87;
      object-fit: cover;
      margin-right: ${converter(10)};
    }
  `,
  DeleteProduct: styled.button`
    border: none;
    appearance: none;
    outline: none;
    background-color: black;
    color: white;
    height: 15px;
    width: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 50%;
    font-weight: bold;
    left: 75px;
    top: -2.5px;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  `,
  CartTitle: styled.span`
    font-family: "Josefin";
    font-size: var(--text-sm);
    width: 190px;
  `,
  PriceBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Josefin";
    font-size: var(--text-sm);
    color: var(--in-blue-color);
    width: 75px;
  `,
  QuantityWrapper: styled.div`
    display: flex;
    justify-content: center;
    width: 275px;
    margin-left: 15px;
  `,
  QuantityBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--quantity-box-color);
    width: ${converter(50)};
    height: ${converter(15)};
    color: var(--quantity-text-color);
    font-size: var(--text-1xs);
  `,
  QuantityButton: styled.button`
    outline: none;
    appearance: none;
    border: none;
    width: ${converter(12)};
    height: ${converter(15)};
    color: var(--quantity-text-color);
    background-color: var(--quantity-symbols-color);
    cursor: pointer;
  `,
  TotalBox: styled.div`
    display: flex;
    justify-content: flex-end;
    font-family: "Josefin";
    font-size: var(--text-sm);
    color: var(--in-blue-color);
    width: 90px;
    margin-right: 15px;
  `,
  ButtonsContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
};

export const TotalsAndShippingBoxes = {
  CartCheckout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 80px;

    @media ${device.laptopS} {
      flex-direction: row;
      margin-left: 0;
      margin-top: 50px;
    }

    @media ${device.tabletM} {
      flex-direction: column;
    }

    h2 {
      font-family: "Josefin Bold";
      font-size: var(--text-xl);
      color: var(--in-blue-color);
      line-height: ${converter(23)};
      padding-bottom: ${converter(45)};
    }
  `,
  CartCheckoutBlock: styled.div`
    padding-bottom: ${converter(30)};

    @media ${device.laptopS} {
      flex-direction: column;
    }
  `,
  Box: styled.div`
    padding: ${converter(30)};
    border-radius: ${converter(3)};
    background-color: var(--block-gray-color);
  `,
  SmallWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: ${converter(320)};
    border-bottom: ${converter(1)} solid var(--underline-gray-color);
    padding-bottom: ${converter(10)};

    p {
      font-family: "Josefin";
      font-size: var(--text-sm);
      color: var(--info-gray-color);
    }
    :not(:last-child) {
      margin-bottom: ${converter(30)};
    }
  `,
  TextTotal: styled.span`
    font-family: "Lato";
    font-weight: 600;
    font-size: var(--text-lg);
    color: var(--in-blue-color);
  `,

  CalcPrice: styled.span`
    font-family: "Lato";
    font-size: var(--text-base);
    color: var(--in-blue-color);
  `,
  AddInfo: styled.span`
    font-family: "Lato";
    font-size: var(--text-1xs);
    color: var(--light-gray-text-color);
    margin-left: ${converter(10)};
    padding-top: ${converter(25)};
  `,
  ButtonCheckoutBox: styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${converter(35)};

    button {
      width: ${converter(315)};
    }
  `,
};
