import Alert from "./components/Alert";
import Button from "./components/Button";

// This is a component
function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Button onClick={() => console.log("Clicked.")} color="primary">
        BestestButton
      </Button>
    </div>
  );
}

export default App;
