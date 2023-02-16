import { BaseButtonStyled as S } from "./StyledButtons/BaseButtonStyled";
import { ButtonBaseProps } from "./types";

export const ButtonBase = ({
  size = "base",
  variant,
  children,
  className,
  onClick,
}: ButtonBaseProps) => {
  return (
    <S.Button
      className={className}
      variant={variant}
      size={size}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
};
