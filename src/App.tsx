import { useCallback, useState } from "react";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseForm from "./ExpenseTrackerProject/ExpenseForm";
import ExpenseList from "./ExpenseTrackerProject/ExpenseList";
interface item {
  id: number;
  description: string;
  amount: number;
  category: string;
}
// This is a component
function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [items, setItems] = useState<item[]>([]);

  const changeQuantity = () => {};

  const addItem = (desc: string, amount: number, category: string) => {
    const id = Math.random();
    setItems((prevItems) => [
      ...prevItems,
      { id: id, description: desc, amount: amount, category: category },
    ]);
    console.log(items);
  };

  const deleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    console.log(items);
  };

  return (
    <div>
      <ExpenseForm
        onAdd={(description, amount, category) =>
          addItem(description, amount, category)
        }
      ></ExpenseForm>
      <ExpenseList
        onDelete={(id) => deleteItem(id)}
        items={items}
      ></ExpenseList>
    </div>
  );
}

export default App;
