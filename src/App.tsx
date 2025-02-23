import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

// This is a component
function App() {
  const [category, setCategory] = useState("");

  return (
    <div>
      <select
        name=""
        id=""
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App;
