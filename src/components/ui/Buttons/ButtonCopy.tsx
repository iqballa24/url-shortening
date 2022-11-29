import React, { useState, useCallback, useEffect } from "react";
import { ButtonsProps } from "../../../types/button";

import "./Button.scss";

const ButtonCopy: React.FC<ButtonsProps> = ({
  type,
  isPrimary,
  isSecondary,
  noRounded,
  full,
  value,
}) => {
  const className = ["buttons"];
  const [textButton, setTextButton] = useState<string>("copy");

  isPrimary && className.push("primary");
  isSecondary && className.push("secondary");
  noRounded && className.push("no-rounded");
  full && className.push("full");

  const onClickHandler = useCallback(() => {
    navigator.clipboard.writeText(value!);
    setTextButton("Copied!");

    setTimeout(() => {
      setTextButton("Copy");
    }, 5000);
  }, []);

  useEffect(() => {}, [onClickHandler]);

  const classNameString = className.join(" ");
  const isCopied = textButton === "Copied!";

  return (
    <button
      type={type}
      className={`${classNameString}${isCopied ? " copy" : " "}`}
      onClick={onClickHandler}
      disabled={isCopied}
    >
      {textButton}
    </button>
  );
};

export default React.memo(ButtonCopy);
