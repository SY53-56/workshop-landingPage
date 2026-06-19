import React from "react";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  type?: "button"| "submit"
};

export default function Button({
  onClick,
  className,
  children,
  type="submit"
}: ButtonProps) {
  return (
    <button onClick={onClick} type={type} className={`${className} transition `}>
      {children}
    </button>
  );
}