import React, { Fragment } from "react";
import { InputProps } from "../../../types/input";

import classes from "./Input.module.scss";

const Input: React.FC<InputProps> = ({
  id,
  type,
  value,
  hasError,
  onChange,
  placeholder,
  messageError,
}) => {
  return (
    <div className={classes.container_input}>
      <input
        id={id}
        name={id}
        className={hasError ? classes.input_error : classes.input}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        value={value}
      />
      <p className={classes.msg_error}>
        <em>{messageError}</em>
      </p>
    </div>
  );
};

export default Input;
