import classes from "./Footer.module.scss";
import { Buttons } from "../../ui";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section className={classes.footer_cta}>
        <h1>Boost your links today</h1>
        <div className={classes.footer_cta_button}>
          <Buttons type="button" isPrimary>
            Get Started
          </Buttons>
        </div>
      </section>
      <section className={classes.footer_nav}>
        <div className={classes.footer_nav_title}>
          <h1>Shortly</h1>
        </div>
        <div className={classes.footer_nav_link}>
          <div className={classes.nav_link_items}>
            <h1 className={classes.nav_link_items_title}>Features</h1>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className={classes.nav_link_items}>
            <h1 className={classes.nav_link_items_title}>Resources</h1>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className={classes.nav_link_items}>
            <h1 className={classes.nav_link_items_title}>Company</h1>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className={classes.footer_nav_social}>
          <FaFacebookSquare size={28}/>
          <FaTwitter size={28}/>
          <FaPinterest size={28}/>
          <FaInstagram size={28}/>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
