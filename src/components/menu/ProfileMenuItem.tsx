import React, { ReactElement } from "react";

interface Props {
  icon: ReactElement;
  text: string;
  line?: boolean;
}

export default function ProfileMenuItem({ icon, text, line }: Props) {
  return (
    <>
      <div className="flex gap-4 items-center text-lg px-4 py-2 hover:bg-amber-400/10 cursor-pointer transition-all">
        {icon}
        <p className="text-[16px]">{text}</p>
      </div>
      {line && <hr />}
    </>
  );
}
