import React from "react";

interface CartProps {
  cartItems: string[];
  onClear: () => void;
  onAdd: () => void;
}

const Cart = ({ cartItems, onClear, onAdd }: CartProps) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
      <button onClick={onAdd}>Add</button>
    </>
  );
};

export default Cart;
