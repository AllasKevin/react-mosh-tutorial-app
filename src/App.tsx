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

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const HandleClick = () => {
    // Here a new array is created with a new bug object at the first index that has a modified value
    // But the bug object at the second index will be the same object as in the original array, this will save memory.
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      {bugs[0].fixed.toString()}
      <button onClick={HandleClick}>Click Me</button>
    </div>
  );
}

export default App;
