import React from "react";

const Button: React.FC<{
  label: string;
  linkTo: string;
  type?: "primary" | "secondary" | "tertiary";
}> = ({ label, type, linkTo }) => {
  let buttonClass = "text-2xl";
  if (type === "primary") {
    buttonClass += " bg-black text-white px-4 py-2 rounded-md cursor-pointer";
  } else if (type === "secondary") {
    buttonClass += " animate-underline italic text-gray-600";
  } else {
    buttonClass += " rounded-md";
  }

  return (
    <a className={buttonClass} href={linkTo}>
      {label}
    </a>
  );
};

export default Button;
