import React from "react";
import { Badge } from "../ui/badge";
import { Category } from "../../types/Category";

interface Props {
  category: Category;
}

export default function CategoryBadge({ category }: Props) {
  var color = [
    "amber",
    "orange",
    "sky",
    "rose",
    "purple",
    "emerald",
    "indigo",
    "neutral",
  ];

  var bgColor = `${color[category.categoryId - 1]}-100`;
  var textColor = `${color[category.categoryId - 1]}-400`;

  return (
    <Badge className={`bg-${bgColor} text-${textColor}`}>{category.name}</Badge>
  );
}
