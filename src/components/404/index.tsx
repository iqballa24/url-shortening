import classes from "./404.module.scss";

const NotFound = () => {
  return (
    <section className={classes.section_404}>
      <img src="/public/404.svg" alt="404" />
    </section>
  );
};

export default NotFound;
