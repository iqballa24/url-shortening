import { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import classes from "./Main.module.scss";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
