import circleStyles from "./circle.module.css";

type Props = {
  number: string;
  filled: boolean;
};

const Circle = (props: Props) => {
  const classes = `${circleStyles.circle} ${
    props.filled ? circleStyles.filled : ""
  }`;
  return (
    <div className={classes}>
      <span className={circleStyles.number}>{props.number}</span>
    </div>
  );
};

export default Circle;
