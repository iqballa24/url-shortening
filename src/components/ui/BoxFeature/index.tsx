import classes from "./BoxFeature.module.scss";

const BoxFeature: React.FC<{ img: string; title: string; text: string }> = ({
  img,
  title,
  text,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <img src={img} alt={title} />
      </div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default BoxFeature;
