import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: string;
}

export default function Button({ children, color, ...props }: ButtonProps) {
  return (
    <ButtonContainer color={color} {...props}>
      {children}
    </ButtonContainer>
  );
}
