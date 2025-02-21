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

  const [tags, setTags] = useState(["happy ", "cheerful "]);

  const HandleClick = () => {
    // Add
    //setTags([...tags, "exicited "]);

    // Remove
    //setTags(tags.filter((tag) => tag !== "happy "));

    // Update
    setTags(tags.map((tag) => (tag === "happy " ? "happiness " : tag)));
  };

  return (
    <div>
      {tags}
      <button onClick={HandleClick}>Click Me</button>
    </div>
  );
}

export default App;
