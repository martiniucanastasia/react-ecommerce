import { IconButtonStyled as S } from "./StyledButtons/IconButtonStyled";
import { IconButtonProps } from "./types";

export const IconButton = ({ size = "base", ...props }: IconButtonProps) => {
  return <S.Button {...props} size={size} />;
};
