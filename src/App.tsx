import { useState } from "react";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

// This is a component
function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [pizza, setPizza] = useState({
    name: "Kevins Special",
    toppings: ["Mushroom"],
  });

  const addTopping = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Bacon"] });
  };

  return (
    <div>
      <p>{pizza.toppings.toString()}</p>
      <button onClick={addTopping}>Change Name</button>
    </div>
  );
}

export default App;
