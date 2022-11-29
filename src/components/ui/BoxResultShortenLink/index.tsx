import React from "react";
import classes from "./BoxResultShortenLink.module.scss";
import { ButtonCopy } from "../";

const BoxResultShortenLink: React.FC<{ longUrl: string; shortUrl: string }> = ({
  longUrl,
  shortUrl,
}) => {
  return (
    <div className={classes.container}>
      <h1>{longUrl}</h1>
      <div className={classes.result}>
        <p>{shortUrl}</p>
        <ButtonCopy type="button" value={shortUrl} isPrimary noRounded />
      </div>
    </div>
  );
};

export default React.memo(BoxResultShortenLink);
