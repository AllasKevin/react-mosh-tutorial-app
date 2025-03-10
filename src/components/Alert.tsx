import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return <div className="alert alert-primary">Alert: {children}</div>;
};

export default Alert;
