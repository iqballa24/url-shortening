import classes from "./MainSection.module.scss";
import { BoxShortenLink, BoxFeature } from "../ui/";
import { advanced_features } from "../../constant";

const MainSection = () => {
  return (
    <section className={classes.section}>
      <div className={classes.section_boxshorten}>
        <BoxShortenLink />
      </div>
      <div className={classes.section_title}>
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className={classes.section_feature}>
        <ul className={classes.ul}>
          {advanced_features.map((feature) => (
            <li key={feature.id}>
              <BoxFeature
                img={feature.img}
                title={feature.title}
                text={feature.text}
              />
            </li>
          ))}
        </ul>
        <div className={classes.line_feature}></div>
      </div>
    </section>
  );
};

export default MainSection;
