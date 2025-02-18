import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DissmissableAlert from "./components/DissmissableAlert";

// This is a component
function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <DissmissableAlert onClose={() => setAlertVisibility(false)}>
          My DissmissableAlert
        </DissmissableAlert>
      )}
      <Button onClick={() => setAlertVisibility(true)} color="primary">
        BestestButton
      </Button>
    </div>
  );
}

export default App;
