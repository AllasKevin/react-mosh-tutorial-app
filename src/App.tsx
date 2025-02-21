import { useState } from "react";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

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

  const changeQuantity = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <div>
      <p>
        {cart.items.map((item) => {
          if (item.title === "Product 1") return item.quantity;
        })}
      </p>
      <button onClick={changeQuantity}>Change Name</button>
    </div>
  );
}

export default App;
