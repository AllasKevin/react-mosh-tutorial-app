import { useState } from "react";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

// This is a component
function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const changeQuantity = () => {};

  return (
    <div>
      <Form></Form>
    </div>
  );
}

export default App;
