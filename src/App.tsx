import { useState } from "react";
import produce from "immer";

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
    setBugs(
      // draft is a proxy object for the bugs array so it is like a copy of the bugs array that records all changes to it.
      // This will allow us to modify the bug object directly but behind the scenes 'immer' is switching it to a new object.
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <button onClick={HandleClick}>Click Me</button>
    </div>
  );
}

export default App;
