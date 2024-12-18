import { PropsWithChildren } from "react";
import "./Button.css";

interface IButtonProps extends PropsWithChildren {}

const Button = ({ children }: IButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
