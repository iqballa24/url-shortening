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
  full,
  onClick
}) => {
  const className = ["buttons"];

  isPrimary && className.push("primary");
  isSecondary && className.push("secondary");
  isPrimaryOnMobile && className.push("primary_mobile");
  isSecondaryOnMobile && className.push("secondary_mobile");
  noRounded && className.push("no-rounded");
  full && className.push("full");

  return (
    <button type={type} className={className.join(" ")} onClick={onClick??onClick}>
      {children}
    </button>
  );
};

export default Buttons;
