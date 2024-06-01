import { Button, IconProps, useTheme } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface Props {
  importance: "high" | "middle" | "low";
  text: string;
  icon?: ReactElement;
}

export default function CustomButton({ importance, text, icon }: Props) {
  const color = {
    high: {
      scheme: "primary",
      variant: "solid",
    },
    middle: {
      scheme: "primary",
      variant: "outline",
    },
    low: {
      scheme: "tertiary",
      variant: "outline",
    },
  };

  const { scheme, variant } = color[importance];

  return (
    <Button
      variant={variant}
      colorScheme={scheme}
      leftIcon={icon ? icon : undefined}
    >
      {text}
    </Button>
  );
}
