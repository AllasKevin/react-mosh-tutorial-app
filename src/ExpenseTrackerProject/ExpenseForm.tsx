import React, { FormEvent, useRef, useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./ExpenseForm.css";

interface item {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface ExpenseFormProps {
  items?: item[];
  onAdd: (description: string, amount: number, category: string) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Descrpition must be at least 3 characters." }),
  amount: z
    .number({ invalid_type_error: "Amount field is required." })
    .min(1, { message: "Amount must be larger than 0." }),
  category: z.string().min(1, { message: "Category is required." }),
});
// Detta är istället för att skapa ett FormData interface
type FormData = z.infer<typeof schema>;

const categories = ["Groceries", "Utilities", "Entertainment"];

const ExpenseForm = ({ onAdd, items }: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });
  const selectedCategory = watch("category"); // Default text

  //console.log(errors);

  const onSubmit = (data: FieldValues) => {
    onAdd(data.description, data.amount, data.category);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="MyDescription" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="MyDescription"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="MyAmount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="MyAmount"
          type="number"
          step="any"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3 dropdown">
        <label htmlFor="MyCategory" className="form-label">
          Category
        </label>
        <button
          {...register("category")}
          className="dropdown-toggle form-control .dropdown-toggle"
          id="MyCategory"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedCategory} {/* Selected value updates here */}
        </button>
        <ul className="dropdown-menu form-control">
          {categories.map((category) => (
            <li key={category}>
              <a
                className="dropdown-item"
                href="#"
                onClick={() =>
                  setValue("category", category, { shouldValidate: true })
                } /* This sets selectedCategory */
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button
        disabled={!isValid}
        className="btn btn-primary mb-3"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
