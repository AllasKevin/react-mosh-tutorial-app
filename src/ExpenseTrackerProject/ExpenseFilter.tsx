import React from "react";
import { useForm } from "react-hook-form";
import categories from "./categories";

interface ExpenseFilterProps {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProps) => {
  const { register, watch, setValue } = useForm();
  const selectedCategory = watch("listCategory", "All Categories"); // Default text

  return (
    <select
      key="categoryList"
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option key="All Categories" value="All Categories">
        All Categories
      </option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
