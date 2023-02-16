import { ChangeEvent, useRef } from "react";

import { Icon, StyledRadioMask as M } from "./RadioStyled";
import { FilterMenuStyled as F } from "../../FilterMenu/FilterMenuStyled";
import { colors } from "../colors";
import { Rating } from "../../Rating/Rating";

interface RadioProps {
  onChange(queryTitle: string, radioValue: string): void;
  value: string;
  title: string;
  type: string;
  query: string;
}

export const Radio = ({ onChange, value, type, query }: RadioProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.name, event.target.value);
  };

  let checkedColor = "";
  let uncheckedColor = "";

  if (type === "discountPercentage") {
    checkedColor = colors.radio.discountPercentage.checked;
    uncheckedColor = colors.radio.discountPercentage.unchecked;
  } else if (type === "rating") {
    checkedColor = colors.radio.rating.checked;
    uncheckedColor = colors.radio.rating.unchecked;
  } else if (type === "price") {
    checkedColor = colors.radio.price.checked;
    uncheckedColor = colors.radio.price.unchecked;
  }

  const radioRef = useRef<null | any>(null);

  let isChecked;

  // If query is empty, all radio buttons get 'false' by default
  query === ""
    ? (isChecked = false)
    : (isChecked = radioRef?.current?.checked!);

  return (
    <F.Label htmlFor={value}>
      <input
        ref={radioRef}
        type="radio"
        id={value}
        name={type}
        value={value}
        onChange={handleChange}
      />

      <M.RadioMask
        isChecked={isChecked}
        checkedColor={checkedColor}
        uncheckedColor={uncheckedColor}
      >
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </M.RadioMask>
      {type === "rating" ? (
        <M.RatingBox>
          <Rating rating={parseInt(value)} />
        </M.RatingBox>
      ) : (
        <span>{value}</span>
      )}
    </F.Label>
  );
};
