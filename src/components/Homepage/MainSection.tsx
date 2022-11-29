import React from "react";
import classes from "./MainSection.module.scss";
import { BoxShortenLink, BoxFeature, BoxResultShortenLink } from "../ui/";
import { advanced_features } from "../../constant";
import { ItemsProps } from "../../types/RootState";

interface PropsData {
  data: ItemsProps[];
  onSubmit: (data: string) => void;
}

const MainSection = React.forwardRef<HTMLDivElement, PropsData>(
  (props, ref) => {

    return (
      <section className={classes.section}>
        <div className={classes.section_boxshorten} ref={ref}>
          <BoxShortenLink onSubmit={props.onSubmit} />
        </div>
        {props.data.length > 0 && (
          <div className={classes.section_result}>
            {props.data.map((item) => (
              <BoxResultShortenLink
                key={item.id}
                longUrl={item.longUrl}
                shortUrl={item.shortUrl}
              />
            ))}
          </div>
        )}
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
  }
);

export default MainSection;
