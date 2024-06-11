import React from "react";
import { Badge } from "../ui/badge";
import { Category } from "../../types/Category";

interface Props {
  category: Category;
}

const colors = [
  { bg: "bg-amber-100", text: "text-amber-400" },
  { bg: "bg-orange-100", text: "text-orange-400" },
  { bg: "bg-sky-100", text: "text-sky-400" },
  { bg: "bg-rose-100", text: "text-rose-400" },
  { bg: "bg-purple-100", text: "text-purple-400" },
  { bg: "bg-emerald-100", text: "text-emerald-400" },
  { bg: "bg-indigo-100", text: "text-indigo-400" },
  { bg: "bg-neutral-100", text: "text-neutral-400" },
];

export default function CategoryBadge({ category }: Props) {
  const colorIndex = category.categoryId - 1;
  const { bg, text } = colors[colorIndex] || {
    bg: "bg-neutral-100",
    text: "text-neutral-400",
  };

  return <Badge className={`${bg} ${text}`}>{category.name}</Badge>;
}
