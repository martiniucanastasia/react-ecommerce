import styled from "styled-components";
import { converter } from "../../../styles/global";

export * from "./Radio";

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: ${converter(2)};
`;

export const StyledRadioMask = {
  RadioMask: styled.div`
    position: absolute;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${converter(16)};
    height: ${converter(16)};
    background: ${({
      isChecked,
      checkedColor,
      uncheckedColor,
    }: {
      isChecked: boolean;
      checkedColor: string;
      uncheckedColor: string;
    }) => (isChecked ? checkedColor : uncheckedColor)};

    ${Icon} {
      visibility: ${({ isChecked }: { isChecked: boolean }) =>
        isChecked ? "visible" : "hidden"};
    }
  `,
  RatingBox: styled.div`
    display: flex;
    gap: ${converter(3)};
  `,
};
