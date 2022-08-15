import * as Select from "@radix-ui/react-select";
import { CaretDown } from "phosphor-react";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectViewport,
} from "./styles";

interface SelectStyled {
  placeHolder: string;
  items: {
    id: string;
    value: string;
    text: string;
  }[];
}

export function SelectStyled({ placeHolder, items }: SelectStyled) {
  return (
    <>
      <Select.Root>
        <SelectTrigger>
          <Select.Value placeholder={placeHolder} />
          <Select.Icon>
            <CaretDown size={15} weight="fill" />
          </Select.Icon>
        </SelectTrigger>

        <Select.Portal>
          <SelectContent>
            <Select.ScrollUpButton />
            <SelectViewport>
              {items.map((item) => (
                <SelectItem key={item.id} value={item.value}>
                  <Select.ItemText>{item.text}</Select.ItemText>
                  <Select.ItemIndicator />
                </SelectItem>
              ))}
            </SelectViewport>
            <Select.ScrollDownButton />
          </SelectContent>
        </Select.Portal>
      </Select.Root>
    </>
  );
}
