import { Select } from "@chakra-ui/react";
import React from "react";

interface Props {
  nullable: Boolean;
  values: any[];
}

export default function SelectBox({ nullable, values }: Props) {
  return nullable ? (
    <Select placeholder="선택 안함">
      {values.map((value) => (
        <option value={value}>{value}</option>
      ))}
    </Select>
  ) : (
    <Select>
      {values.map((value) => (
        <option value={value}>{value}</option>
      ))}
    </Select>
  );
}
