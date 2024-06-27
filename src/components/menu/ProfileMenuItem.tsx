import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import React, { ReactElement } from "react";

interface Props {
  icon: ReactElement;
  text: string;
  line?: boolean;
}

export default function ProfileMenuItem({ icon, text, line }: Props) {
  return (
    <>
      <div className="flex gap-4 items-center text-lg font-extralight px-4 py-2 hover:bg-amber-400/10 cursor-pointer transition-all">
        {icon}
        <p>{text}</p>
      </div>
      {line && <hr />}
    </>
  );
}
