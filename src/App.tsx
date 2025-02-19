import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DissmissableAlert from "./components/DissmissableAlert";
import ListGroup from "./components/ListGroup";
import "./App.css";
import { FcCalendar } from "react-icons/fc";
import { BsFillCalendarFill } from "react-icons/bs";
import "./components/Calendar.css";

// This is a component
function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "Shanghai",
    "Stockholm",
    "London",
  ];
  return (
    <div>
      <FcCalendar className="calendar-icon" color="red" size="300" />
      <BsFillCalendarFill className="calendar-icon" size="300" />
    </div>
  );
}

export default App;
