import { useState } from "react";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

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
    <ExpandableText maxChars={50}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nostrum
      esse eligendi molestiae hic unde, maxime totam corrupti eaque architecto
      quibusdam saepe cum quaerat obcaecati ab laudantium dolor cupiditate
      ratione at? Saepe, aliquid? Dolores ipsum minus inventore illum tempora
      reiciendis necessitatibus delectus nihil in, cupiditate libero quas vero
      illo possimus eius perferendis sequi labore sed non, quis nostrum maxime
      qui magni! Corporis ipsa temporibus deserunt, veritatis cupiditate
      laudantium illum soluta vero commodi odit hic alias eligendi rem esse,
      expedita doloribus amet perferendis quam, provident ipsum rerum. Quaerat
      reiciendis amet, quos omnis iste perspiciatis magni aliquam mollitia
      voluptatum dolore? Adipisci, ducimus?babababa Lorem ipsum.
    </ExpandableText>
  );
}

export default App;
