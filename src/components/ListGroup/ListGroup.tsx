import { useState } from "react";
import "./ListGroup.css";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //items = [];

  // Hook. selectedIndex is a state variable
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleIfNoItems = () => items.length === 0 && <p>No item found</p>;

  return (
    <>
      <h1>{heading}</h1>
      {handleIfNoItems()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
