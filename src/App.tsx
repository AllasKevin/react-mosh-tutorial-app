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

  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  const HandleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  return (
    <div>
      {customer.address.zipCode}
      <button onClick={HandleClick}>Click Me</button>
    </div>
  );
}

export default App;
