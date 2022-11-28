import React from "react";
import { ButtonsProps } from "../../../types/button";

import "./Button.scss";

const Buttons: React.FC<ButtonsProps> = ({
  children,
  type,
  isPrimary,
  isSecondary,
  isPrimaryOnMobile,
  isSecondaryOnMobile,
  noRounded,
}) => {
  const className = ["buttons"];

  isPrimary && className.push("primary");
  isSecondary && className.push("secondary");
  isPrimaryOnMobile && className.push("primary_mobile");
  isSecondaryOnMobile && className.push("secondary_mobile");
  noRounded && className.push("no-rounded");

  return (
    <button type={type} className={className.join(" ")}>
      {children}
    </button>
  );
};

export default Buttons;
