import React from "react";

const Button = ({ label, color, textColor, visible, px, py, fontSize }) => {
  return (
    <button
      className={`max-md:${!visible ? "hidden" : "block"} border-none rounded-2xl ${color} hover:opacity-80 text-${textColor} flex justify-center items-center px-${px} py-${py} border font-montserrat text-${fontSize} `}
    >
      {label}
    </button>
  );
};

export default Button;
