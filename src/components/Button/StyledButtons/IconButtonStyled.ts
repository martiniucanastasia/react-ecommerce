import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from "styled-components";
import { converter } from "../../../styles/global";
import { ButtonBase } from "../ButtonBase";
import { ButtonBaseProps, VariantType } from "../types";

const getVariantStyles = ({
  variant,
}: ThemedStyledProps<Pick<ButtonBaseProps, "variant">, DefaultTheme>) => {
  const mapper: Record<VariantType, FlattenSimpleInterpolation> = {
    primary: css``,
    secondary: css`
      --bg-color: var(--white-color);
      --text-color: var(--mix-purple-blue-color);
      --size: ${converter(31)};
      --p: ${converter(6)};
      --border-radius: 50%;

      box-shadow: 0 0 ${converter(25)} rgba(0, 0, 0, 0.05);
    `,
  };
  return mapper[variant];
};

export const IconButtonStyled = {
  Button: styled(ButtonBase)<Pick<ButtonBaseProps, "size" | "variant">>`
    --border-radius: none;
    --p: ${converter(0, 15)};
    min-width: var(--size);
    display: flex;
    justify-content: center;
    align-items: center;

    ${getVariantStyles};

    color: var(--text-color);
    padding: var(--p);

    & svg {
      width: ${(props) =>
        props.size === "base" ? "${converter(20)}" : "${converter(20)}"};
      height: ${(props) =>
        props.size === "base" ? "${converter(20)}" : "${converter(20)}"};
    }
  `,
};
