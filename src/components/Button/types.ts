import { MouseEventHandler, PropsWithChildren } from "react";

export type SizeType = "base" | "medium" | "large";

export type VariantType = "primary" | "secondary";

export type ButtonBaseProps = PropsWithChildren<{
  size?: SizeType;
  variant?: VariantType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}>;

export type ButtonProps = ButtonBaseProps;

export type IconButtonProps = ButtonBaseProps;
