import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import DissmissableAlert from "./components/DissmissableAlert";
import ListGroup from "./components/ListGroup";
import "./App.css";
import { FcCalendar } from "react-icons/fc";
import { BsFillCalendarFill } from "react-icons/bs";
import "./components/Calendar.css";
import MyButton from "./components/MyButton/MyButton";

// This is a component
function App() {
  return (
    <div>
      <MyButton onClick={() => {}}>My Button</MyButton>
      <Button color="primary" onClick={() => {}}>
        His Button
      </Button>
    </div>
  );
}

export default App;
