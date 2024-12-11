import { IconProps } from "@/types/icon";
import React from "react";

export const SentenceIcon: React.FC<IconProps> = ({
  size = "1em",
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
    >
      <path
        fill={color}
        d="M29 23h-5a2.003 2.003 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2h-5v6h5zM18 13h-4V9h-2v14h6a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m-4 8v-6h4v6zM8 9H4a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2m-4 7v-5h4v5z"
      />
    </svg>
  );
};
