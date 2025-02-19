import { MouseEvent } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "success";
  onClick: () => void;
}

const Button = ({ children, color = "success", onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
