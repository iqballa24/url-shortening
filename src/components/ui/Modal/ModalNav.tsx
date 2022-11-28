import ReactDOM from "react-dom";

import classes from "./ModalNav.module.scss";
import { menuItem } from "../../../constant";
import { Buttons } from "../";

const portalElement = document.getElementById("modal");

const ModalOverlay = () => {
  return (
    <div className={classes.modal}>
      <div className={classes.modal_content}>
        <ul>
          {menuItem.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
          <li className={classes.line_break}></li>
          <li>
            <Buttons type="button" isSecondaryOnMobile>
              Login
            </Buttons>
          </li>
          <li>
            <Buttons type="button" isPrimaryOnMobile>
              Sign up
            </Buttons>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ModalNav = () => {
  return ReactDOM.createPortal(<ModalOverlay />, portalElement!);
};

export default ModalNav;
