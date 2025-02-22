import React, { FormEvent, useRef, useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./ExpenseForm.css";
import categories from "./categories";

interface ExpenseFormProps {
  onAdd: (item: FormData) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Descrpition must be at least 3 characters." }),
  amount: z
    .number({ invalid_type_error: "Amount field is required." })
    .min(0.01, { message: "Amount must be larger than 0.01." })
    .max(100_000),
  category: z.enum(categories),
});
// Detta är istället för att skapa ett FormData interface
type FormData = z.infer<typeof schema>;

const ExpenseForm = ({ onAdd }: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onAdd(data);
        reset();
      })}
    >
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
        <select
          {...register("category")}
          className="form-select"
          id="MyCategory"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
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
