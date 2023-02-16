import { ButtonStyled as S } from "./StyledButtons/ButtonStyled";
import { ButtonProps } from "./types";

export const Button = ({ ...props }: ButtonProps) => {
  return <S.Button {...props} />;
};
