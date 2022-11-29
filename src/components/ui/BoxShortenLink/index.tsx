import { useRef, useState } from "react";
import { Buttons, Input } from "../";
import { RootState } from "../../../store";
import { useAppSelector } from "../../../hook";

import classes from "./BoxShortenLink.module.scss";

const BoxShortenLink: React.FC<{ onSubmit: (data: string) => void }> = ({
  onSubmit,
}) => {
  const [value, setValue] = useState("");
  const { error, loading } = useAppSelector(
    (state: RootState) => state.shortLink
  );
  const { message: messageError, status: hasError } = error;

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(value);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <Input
          id="shortenLink"
          type="text"
          placeholder="Shorten a link here..."
          value={value}
          hasError={hasError}
          messageError={messageError}
          onChange={onChangeHandler}
        />
        <div className={classes.form_button}>
          <Buttons type="submit" isPrimary noRounded full>
            {loading ? "loading..." : "Shorten it!"}
          </Buttons>
        </div>
      </form>
    </div>
  );
};

export default BoxShortenLink;
