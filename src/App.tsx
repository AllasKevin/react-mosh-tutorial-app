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
      <Like
        onClick={() => {
          console.log("Clicked!!");
        }}
      ></Like>
    </div>
  );
}

export default App;
