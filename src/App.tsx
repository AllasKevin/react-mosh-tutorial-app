import { useState } from "react";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

// This is a component
function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const addProduct = () => {
    setCartItems([...cartItems, "Product" + (cartItems.length + 1)]);
  };

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart
        cartItems={cartItems}
        onClear={() => setCartItems([])}
        onAdd={() => addProduct()}
      ></Cart>
    </div>
  );
}

export default App;
