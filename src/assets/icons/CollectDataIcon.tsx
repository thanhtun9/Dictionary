import { IconProps } from "@/types/icon";
import React from "react";

export const CollectDataIcon: React.FC<IconProps> = ({
  size = "1em",
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
        <rect width="14" height="12" x="2" y="6" rx="2" />
      </g>
    </svg>
  );
};
