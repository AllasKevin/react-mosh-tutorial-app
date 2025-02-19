import { MouseEvent } from "react";
import "./MyButton.css";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "success";
  onClick: () => void;
}

const MyButton = ({ children, color = "success", onClick }: ButtonProps) => {
  return (
    <button type="button" className="my-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
