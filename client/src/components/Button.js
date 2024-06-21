import React from "react";

const Button = ({
  type = "primary",
  size = "sm",
  text = "Submit",
  handleClick,
}) => {
  return (
    <button onClick={handleClick} className={`btn btn-${type} btn-${size}`}>
      {text}
    </button>
  );
};

export default Button;
