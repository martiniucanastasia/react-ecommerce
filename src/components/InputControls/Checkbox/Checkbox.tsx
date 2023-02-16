import { ChangeEvent } from "react";

import { StyledCheckBoxMask as M, Icon } from "./CheckboxStyled";
import { FilterMenuStyled as F } from "../../FilterMenu/FilterMenuStyled";
import { colors } from "../colors";

interface CheckboxProps {
  onChange(value: string, isChecked: boolean): void;
  value: string;
  isChecked: boolean;
}

export const Checkbox = ({ onChange, value, isChecked }: CheckboxProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.name, event.target.checked);
  };

  return (
    <F.Label htmlFor={value}>
      <input
        id={value}
        type="checkbox"
        name={value}
        onChange={handleChange}
        checked={isChecked}
      />
      <M.CheckboxMask
        isChecked={isChecked}
        checkedColor={colors.checkbox.checked}
        uncheckedColor={colors.checkbox.unchecked}
      >
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </M.CheckboxMask>
      <span>{value}</span>
    </F.Label>
  );
};
