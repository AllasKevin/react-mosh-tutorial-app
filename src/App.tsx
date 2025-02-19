import { useState } from "react";
import Alert from "./components/Alert";
import DissmissableAlert from "./components/DissmissableAlert";
import ListGroup from "./components/ListGroup";
import "./App.css";
import { FcCalendar } from "react-icons/fc";
import { BsFillCalendarFill } from "react-icons/bs";
import "./components/Calendar.css";
import Like from "./components/Like";

// This is a component
function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [drink, setDrink] = useState({ title: "Americano", price: 5 });

  const HandleClick = () => {
    setDrink({ ...drink, price: drink.price + 1 });
  };

  return (
    <div>
      {drink.price}
      <button onClick={HandleClick}>Click Me</button>
    </div>
  );
}

export default App;
