import React, { useRef } from "react";
import { InputProps } from "../../../types/input";

import classes from "./Input.module.scss";

const Input: React.FC<InputProps> = ({ type, placeholder, changeHandler }) => {
  const enteredInput = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeHandler(e.target.value.toString());
  };

  return (
    <input
      className={classes.input}
      type={type}
      placeholder={placeholder}
      onChange={onChangeHandler}
      ref={enteredInput}
    />
  );
};

export default Input;
