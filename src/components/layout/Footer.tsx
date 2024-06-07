import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const url = "https://github.com/rnignon";

  return (
    <div className="flex bg-neutral-300 w-full min-h-60 py-10 justify-center items-center">
      <div className="flex text-neutral-500 text-lg items-center gap-2">
        <FaGithub />
        <p>Github :: </p>
        <p
          onClick={() => {
            window.open(url);
          }}
        >
          rnignon
        </p>
      </div>
    </div>
  );
}
