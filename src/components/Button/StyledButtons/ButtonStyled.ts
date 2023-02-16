import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from "styled-components";
import { converter } from "../../../styles/global";
import { ButtonBase } from "../ButtonBase";
import { ButtonBaseProps, SizeType } from "../types";

const getSizeStyles = ({
  size = "base",
}: ThemedStyledProps<Pick<ButtonBaseProps, "size">, DefaultTheme>) => {
  const mapper: Record<SizeType, FlattenSimpleInterpolation> = {
    base: css`
      --p: ${converter(11, 20)};
    `,
    medium: css`
      --p: ${converter(11, 40)};
    `,
    large: css`
      --p: ${converter(14, 36)};
    `,
  };

  return mapper[size];
};

export const ButtonStyled = {
  Button: styled(ButtonBase)`
    ${getSizeStyles};
  `,
};
