import ListGroup from "./components/ListGroup";
// This is a component
function App() {
  // we always have to close our react component, we could also use the self closing syntax <ListGroup /> which is more consice.
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "Shanghai",
    "Stockholm",
    "London",
  ];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      ></ListGroup>
    </div>
  );
}

export default App;
