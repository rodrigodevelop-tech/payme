import styled from "styled-components";
import * as SelectPrimitive from "@radix-ui/react-select";

export const SelectTrigger = styled(SelectPrimitive.Trigger)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  height: 2.1875rem;
  max-width: 12rem;
  width: 100%;
  border-radius: 6px;
  padding: 0 1rem;

  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors["text-black"]};

  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 2px 10px ${(props) => props.theme.colors["gray-300"]};

  &:hover {
    filter: brightness(0.98);
  }

  &:focus {
    outline: none;
  }
`;

export const SelectContent = styled(SelectPrimitive.Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const SelectViewport = styled(SelectPrimitive.Viewport)`
  padding: 0.5rem;
`;

export const SelectItem = styled(SelectPrimitive.Item)`
  all: unset;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 25px 0 15px;
  position: relative;
  user-select: none;

  font-size: 1rem;
  font-weight: 500;

  &[data-highlighted] {
    background: ${(props) => props.theme.colors["blue-400"]};
    color: ${(props) => props.theme.colors.white};
  }
`;
