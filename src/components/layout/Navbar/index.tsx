import React from "react";
import { uiActions } from "../../../store/ui-slice";
import { menuItem } from "../../../constant";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { Buttons, ModalNav } from "../../ui";

import { RootState } from "../../../store";
import { useAppSelector, useAppDispatch } from "../../../hook";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const showModal = useAppSelector((state: RootState) => state.ui.navModalIsShow);

  const toggleModalHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <header>
      <nav className={classes.nav}>
        <section className={classes.nav_direction}>
          <h1 className={classes.logo}>Shortly</h1>
          <ul className={classes.nav}>
            {menuItem.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </section>
        <section className={classes.nav_hamburger} onClick={toggleModalHandler}>
          {!showModal ? (
            <GiHamburgerMenu size={24} />
          ) : (
            <MdOutlineClose size={24} />
          )}
        </section>
        <section className={classes.nav_buttons}>
          <Buttons type="button" isSecondary>
            <a
              href="https://iqballa24.github.io/SignIn-SignUp_Form/"
              target="_blank"
            >
              Login
            </a>
          </Buttons>
          <Buttons type="button" isPrimary>
            <a
              href="https://iqballa24.github.io/SignIn-SignUp_Form/"
              target="_blank"
            >
              Sign in
            </a>
          </Buttons>
        </section>
      </nav>
      {showModal && <ModalNav />}
    </header>
  );
};

export default React.memo(Navbar);
