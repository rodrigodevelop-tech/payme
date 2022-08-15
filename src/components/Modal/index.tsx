import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import {
  FieldSet,
  IconButton,
  Input,
  Label,
  ModalContent,
  ModalOverlay,
  ModalTitle,
} from "./styles";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

export default function Modal({ openModal, setOpenModal }: ModalProps) {
  return (
    <>
      <Dialog.Root open={openModal}>
        <Dialog.Trigger />
        <Dialog.Portal>
          <ModalOverlay />
          <ModalContent>
            <ModalTitle>Inserir Despesa</ModalTitle>
            <FieldSet>
              <Label>Título</Label>
              <Input id="title" />
            </FieldSet>
            <FieldSet>
              <Label>Descrição</Label>
              <Input id="description" />
            </FieldSet>
            <Dialog.Close asChild>
              <IconButton
                aria-label="Close"
                onClick={() => setOpenModal(false)}
              >
                <X size={18} />
              </IconButton>
            </Dialog.Close>
          </ModalContent>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
