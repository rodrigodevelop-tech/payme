import styled from "styled-components";

interface ButtonContainerProps {
  color?: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background: ${(props) => props.color};
  padding: 0.6875rem 3.6875rem;
  border-radius: 8px;

  font-weight: 700;
  line-height: 19px;
  color: ${(props) => props.theme.colors.white};

  cursor: pointer;

  transition: filter 0.3s;
  &:hover {
    filter: brightness(0.9);
  }
`;
