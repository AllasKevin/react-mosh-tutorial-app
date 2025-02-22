import React from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button/Button";

interface item {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface ExpenseListProps {
  items?: item[];
  onDelete: (id: number) => void;
}

const categories = ["Groceries", "Utilities", "Entertainment"];

const ExpenseList = ({ items, onDelete }: ExpenseListProps) => {
  const { register, watch, setValue } = useForm();
  const selectedCategory = watch("listCategory", "All Categories"); // Default text

  if (items?.length === 0) return null;

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr key="headRow">
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody key="tableBody">
          {items?.map(
            (item, index) =>
              (item.category === selectedCategory ||
                selectedCategory === "All Categories") && (
                <tr key={item.id}>
                  <td>{item.description}</td>
                  <td>${item.amount}</td>
                  <td>{item.category}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => {
                        onDelete(item.id);
                        console.log("clicked button");
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
        <tfoot className="fw-bold">
          <tr key="summaryRow">
            <td>Total:</td>
            <td>
              $
              {items
                ?.reduce((totalAmount, item) => item.amount + totalAmount, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
