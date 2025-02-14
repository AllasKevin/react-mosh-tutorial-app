import { MouseEvent } from "react";

function ListGroup() {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "Shanghai",
    "Stockholm",
    "London",
  ];
  let selectedIndex = 0;
  //items = [];
  /*
  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );
*/

  const message = items.length === 0 ? <p>No item found</p> : null;

  // The benefit of using a function to the constant above is that it can have parameters. But if you dont have a parameter then it is better to use a constant
  const getMessage = () => {
    items.length === 0 ? <p>No item found</p> : null;
  };

  // Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {/*items.length === 0 ? <p>No item found</p> : null*/}
      {/*message*/}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
