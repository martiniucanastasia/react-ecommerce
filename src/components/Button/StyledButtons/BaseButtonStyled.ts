import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from "styled-components";
import { converter } from "../../../styles/global";
import { ButtonBaseProps, SizeType, VariantType } from "../types";

const getSizeStyles = ({
  size = "base",
}: ThemedStyledProps<Pick<ButtonBaseProps, "size">, DefaultTheme>) => {
  const mapper: Record<SizeType, FlattenSimpleInterpolation> = {
    base: css`
      --size: ${converter(40)};
    `,
    medium: css`
      --size: ${converter(47)};
    `,
    large: css`
      --size: ${converter(60)};
    `,
  };

  return mapper[size];
};

const getVariantStyles = ({
  variant,
}: ThemedStyledProps<{ variant: VariantType }, DefaultTheme>) => {
  const mapper: Record<VariantType, FlattenSimpleInterpolation> = {
    primary: css``,
    secondary: css`
      --font-weight: 700;
      --font-family: "Josefin";
      --font-size: var(--text-sm);
      --bg-color: var(--green-color);
    `,
  };

  return mapper[variant];
};

export const BaseButtonStyled = {
  Button: styled.button<Pick<ButtonBaseProps, "size" | "variant">>`
    --p: 0;
    --size: $ ${converter(40)};
    --font-family: "Josefin";
    --font-size: var(--text-base);
    --font-weight: 500;
    --border: none;
    --border-radius: ${converter(3)};
    --bg-color: var(--pink-color);
    --text-color: var(--white-color);

    ${getSizeStyles};
    ${getVariantStyles}

    color: var(--text-color);
    padding: var(--p);
    min-height: var(--size);
    background: var(--bg-color);
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    border: var(--border);
    border-radius: var(--border-radius);
    cursor: pointer;
  `,
};
