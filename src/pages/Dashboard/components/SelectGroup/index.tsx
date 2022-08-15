import * as Select from "@radix-ui/react-select";
import { CaretDown } from "phosphor-react";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectViewport,
} from "./styles";

export default function SelectGroup() {
  return (
    <>
      <Select.Root>
        <SelectTrigger>
          <Select.Value placeholder="Selecione um grupo" />
          <Select.Icon>
            <CaretDown size={15} weight="fill" />
          </Select.Icon>
        </SelectTrigger>

        <Select.Portal>
          <SelectContent>
            <Select.ScrollUpButton />
            <SelectViewport>
              <SelectItem value="1">
                <Select.ItemText>La casa</Select.ItemText>
                <Select.ItemIndicator />
              </SelectItem>

              <SelectItem value="2">
                <Select.ItemText>Churras</Select.ItemText>
                <Select.ItemIndicator />
              </SelectItem>
            </SelectViewport>
            <Select.ScrollDownButton />
          </SelectContent>
        </Select.Portal>
      </Select.Root>
    </>
  );
}
