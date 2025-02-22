import { useCallback, useState } from "react";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseForm from "./ExpenseTrackerProject/ExpenseForm";
import ExpenseList from "./ExpenseTrackerProject/ExpenseList";
import ExpenseFilter from "./ExpenseTrackerProject/ExpenseFilter";
import categories from "./ExpenseTrackerProject/categories";

interface item {
  id: number;
  description: string;
  amount: number;
  category: string;
}

// This is a component
function App() {
  const [items, setItems] = useState<item[]>([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const visibleItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  const deleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    console.log(items);
  };

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onAdd={(item) => setItems([...items, { ...item, id: Math.random() }])}
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(selected) => setSelectedCategory(selected)}
        />
      </div>
      <ExpenseList onDelete={(id) => deleteItem(id)} items={visibleItems} />
    </div>
  );
}

export default App;
