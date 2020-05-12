import React from "react";
import "../../assets/styles/button.scss";

const Button = ({ text, className }) => {
  return <button className={className}>{text}</button>;
};

export default Button;
