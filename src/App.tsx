import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DissmissableAlert from "./components/DissmissableAlert";
import ListGroup from "./components/ListGroup";
import "./App.css";

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
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={(item) => console.log(item)}
      ></ListGroup>
    </div>
  );
}

export default App;
