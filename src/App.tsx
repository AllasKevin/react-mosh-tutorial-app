import Alert from "./components/Alert";

// This is a component
function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="alert alert-primary">
      <Alert>
        Hello <span>world</span>
      </Alert>
    </div>
  );
}

export default App;
