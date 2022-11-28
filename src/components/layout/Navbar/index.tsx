import React, { useState } from "react";
import { menuItem } from "../../../constant";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { Buttons, ModalNav } from "../../ui";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

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
        <section
          className={classes.nav_hamburger}
          onClick={() => setShowModal((prev) => !prev)}
        >
          {!showModal ? (
            <GiHamburgerMenu size={24} />
          ) : (
            <MdOutlineClose size={24} />
          )}
        </section>
        <section className={classes.nav_buttons}>
          <Buttons type="button" isSecondary>
            Login
          </Buttons>
          <Buttons type="button" isPrimary>
            Sign up
          </Buttons>
        </section>
      </nav>
      {showModal && <ModalNav />}
    </header>
  );
};

export default React.memo(Navbar);
