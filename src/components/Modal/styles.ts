import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const ModalOverlay = styled(Dialog.Overlay)`
  background-color: rgba(46, 46, 46, 0.6);
  position: fixed;
  inset: 0;
`;

export const ModalContent = styled(Dialog.Content)`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  box-shadow: 0px 15px 15.58px rgba(31, 30, 44, 0.18),
    0px 1px 3px rgba(31, 30, 44, 0.01);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vh;
  max-width: 658px;
  max-height: 491px;
  padding: 2.5rem;

  &:focus {
    outline: none;
  }
`;

export const ModalTitle = styled(Dialog.Title)`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors["text-black"]};
`;

export const IconButton = styled.button`
  all: unset;
  border-radius: 100%;
  height: 25px;
  width: 25px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors["red-500"]};

  position: absolute;
  top: 10px;
  right: 10px;

  cursor: pointer;

  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors["gray-100"]};
  }
`;

export const FieldSet = styled.fieldset`
  all: unset;
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: ${(props) => props.theme.colors["text-black"]};
  width: 90px;
  text-align: right;
`;

export const Input = styled.input`
  all: unset;
  width: 100%;
  height: 35px;
  flex: 1;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 10px;

  font-size: 1rem;
  line-height: 1rem;
  color: ${(props) => props.theme.colors["text-black"]};
  box-shadow: 0 0 0 1px ${(props) => props.theme.colors["text-black"]};
`;
