import { Buttons } from "../ui";
import classes from "./HeroSection.module.scss";

const HeroSection: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <section className={classes.section}>
      <div className={classes.section_hero_title}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Buttons type="button" isPrimary onClick={onClick}>
          Get Started
        </Buttons>
      </div>
      <div className={classes.section_hero_image}>
        <img src="/illustration-working.svg" alt="logo" />
      </div>
    </section>
  );
};

export default HeroSection;
