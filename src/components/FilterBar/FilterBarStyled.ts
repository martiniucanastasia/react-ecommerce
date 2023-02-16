import styled from "styled-components";
import { converter } from "../../styles/global";
import { device } from "../../styles/devices";

export const TopFilterStyled = {
  Box: styled.div`
    padding: ${converter(100)} 0rem ${converter(60)} 0rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media ${device.tablet} {
      padding: ${converter(60)} 0rem ${converter(60)} 0rem;
    }
  `,
  Info: styled.div`
    margin-right: ${converter(170)};
    @media ${device.laptop} {
      margin-right: ${converter(70)};
    }
    @media ${device.tabletL} {
      text-align: center;
      margin: 0;
    }
  `,
  ButtonBox: styled.div`
    display: flex;
    justify-content: center;
  `,
  ButtonFilter: styled.button`
    display: flex;
    justify-content: center;
    background: none;
    border: none;
    outline: inherit;
    padding: ${converter(15)} ${converter(15)};
    margin-top: ${converter(30)};
    font-family: "Josefin SemiBold";
    border: ${converter(1)} solid var(--light-blue-color);
    font-size: var(--text-lg);
    color: var(--light-blue-color);
    transition: all 0.3s;
    cursor: pointer;
    line-height: 0;

    @media ${device.tabletL} {
      justify-content: center;
    }
  `,
  Title: styled.div`
    font-family: "Josefin Bold";
    font-size: ${converter(22)};
    line-height: ${converter(26)};
    color: var(--in-blue-color);
    margin-bottom: ${converter(5)};
  `,
  Amt: styled.div`
    font-family: "Lato";
    font-size: ${converter(12)};
    line-height: ${converter(14)};
    color: var(--sub-text-color);
  `,
  Text: styled.div`
    font-family: "Lato";
    font-size: ${converter(16)};
    color: var(--light-blue-color);
    margin-right: ${converter(5)};
  `,

  FilterBox: styled.div`
    display: flex;
    flex-direction: row;
    @media ${device.tabletL} {
      flex-direction: column;
      align-items: center;
      gap: ${converter(20)};
    }
    @media ${device.tablet} {
      flex-direction: column;
    }
  `,

  TopFilters: styled.div`
    display: flex;
    align-items: center;
    gap: ${converter(25)};

    @media ${device.tablet} {
      flex-direction: column;
    }
  `,

  FilterPerPage: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Josefin";
    font-size: var(--text-1xs);
    border: none;
    select {
      width: ${converter(55)};
      height: ${converter(35)};
      padding: ${converter(5)};
      border: none;
      outline: none;
      border: solid ${converter(2)};
      border-color: var(--border-gray-color);
      color: var(--sub-text-color);
      font-family: "Lato";
    }
  `,
  FilterSortBy: styled.div`
    display: flex;
    justify-content: center;
    font-size: var(--text-1xs);
    align-items: center;

    select {
      max-width: ${converter(150)};
      height: ${converter(35)};
      padding: ${converter(5)};
      border: none;
      outline: none;
      border: solid ${converter(2)};
      border-color: var(--border-gray-color);
      color: var(--sub-text-color);
      font-family: "Lato";
      line-height: ${converter(18)};
    }
  `,
  View: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      border: none;
      background: none;
      width: auto;
      height: auto;
      cursor: pointer;
      padding: 0 ${converter(16)} 0 0;
      height: ${converter(10)};
      width: ${converter(15)};
    }
  `,

  Search: styled.div`
    display: flex;
    input {
      width: ${converter(125)};
      height: ${converter(25)};
      appearance: none;
      outline: none;
      border: solid ${converter(2)};
      border-color: var(--border-gray-color);
      padding: 0rem ${converter(16)};
      font-family: "Lato";
      line-height: 0rem;
    }
    button {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      padding: 0;
      outline: inherit;
      margin: ${converter(5)};
      opacity: 0.3;
      font-family: "Lato";
      color: var(--light-blue-color);
      :hover {
        opacity: 1;
      }
    }
  `,
};
