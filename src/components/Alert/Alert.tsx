import { AlertStyled as A } from "./AlertStyled";

interface AlertProps {
  message: string;
}

export const Alert = ({ message }: AlertProps) => {
  return <A.Wrapper>{message}</A.Wrapper>;
};
