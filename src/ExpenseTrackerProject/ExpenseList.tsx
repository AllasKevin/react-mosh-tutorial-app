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

  const calculateTotal = (items: item[]) => {
    var totalAmount = 0;
    items.map((item) => {
      if (
        item.category === selectedCategory ||
        selectedCategory === "All Categories"
      )
        totalAmount += item.amount;
    });
    return totalAmount;
  };

  return (
    <div>
      <div className="mb-3 dropdown">
        <label htmlFor="MyCategory" className="form-label"></label>
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
        <ul key="dropdownMenu" className="dropdown-menu form-control">
          <li key="AllCategories">
            <a
              className="dropdown-item"
              href="#"
              onClick={() =>
                setValue("listCategory", "All Categories", {
                  shouldValidate: true,
                })
              }
            >
              All Categories
            </a>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <a
                className="dropdown-item"
                href="#"
                onClick={() =>
                  setValue("listCategory", category, { shouldValidate: true })
                }
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul
        key="topRow"
        className="list-group list-group-horizontal fw-bold d-flex w-100"
      >
        <li key="desc" className="list-group-item flex-fill">
          Description
        </li>
        <li key="amount" className="list-group-item flex-fill">
          Amount
        </li>
        <li key="category" className="list-group-item flex-fill">
          Category
        </li>
        <li key="delete" className="list-group-item flex-fill"></li>
      </ul>
      {items?.map(
        (item, index) =>
          (item.category === selectedCategory ||
            selectedCategory === "All Categories") && (
            <ul
              key={index}
              className="list-group list-group-horizontal d-flex w-100"
            >
              <li key="desc" className="list-group-item flex-fill">
                {item.description}
              </li>
              <li key="amount" className="list-group-item flex-fill">
                ${item.amount}
              </li>
              <li key="category" className="list-group-item flex-fill">
                {item.category}
              </li>
              <li key="delete" className="list-group-item flex-fill">
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
              </li>
            </ul>
          )
      )}
      <ul
        key="bottomRow"
        className="list-group list-group-horizontal fw-bold d-flex w-100"
      >
        <li key="total" className="list-group-item flex-fill">
          total
        </li>
        <li key="totalAmount" className="list-group-item flex-fill">
          ${calculateTotal(items ?? [])}
        </li>
        <li key="empty1" className="list-group-item flex-fill"></li>
        <li key="empty2" className="list-group-item flex-fill"></li>
      </ul>
    </div>
  );
};

export default ExpenseList;
