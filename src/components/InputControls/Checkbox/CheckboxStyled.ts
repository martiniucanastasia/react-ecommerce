import styled from "styled-components";
import { converter } from "../../../styles/global";

export * from "./Checkbox";

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: ${converter(2)};
`;

export const StyledCheckBoxMask = {
  CheckboxMask: styled.div`
    position: absolute;
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
};
