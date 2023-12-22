import React from "react";

const Button = (props) => {
  const { onClick, text, backgroundColor } = props;
  return (
    <button
      className={`text-sm py-2 px-4  text-white  rounded-lg bg-[${backgroundColor}] font-medium`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
