import classes from "./BoxShortenLink.module.scss";
import { Buttons, Input } from "../";

const BoxShortenLink = () => {
  const onChangeHandler = (value: string) => {
    console.log(value);
  };

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <Input
          type="text"
          placeholder="Shorten a link here..."
          changeHandler={onChangeHandler}
        />
        <div className={classes.form_button}>
          <Buttons type="submit" isPrimary noRounded>
            Shorten it!
          </Buttons>
        </div>
      </form>
    </div>
  );
};

export default BoxShortenLink;
