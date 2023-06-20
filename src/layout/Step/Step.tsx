import Circle from "../Circle/Circle";
import ClickableDiv from "../ClickableDiv/ClickableDiv";
import stepStyles from "./step.module.css";

type Props = {
  number: string;
  title: string;
  description: string;
  filled: boolean;
  navigate: React.MouseEventHandler<HTMLDivElement>;
};

const Step = (props: Props) => {
  return (
    <ClickableDiv onClick={props.navigate} id={props.number}>
      <Circle number={props.number} filled={props.filled} />
      <div className={`${stepStyles.textContainer}`}>
        <p className={stepStyles.title}>{props.title}</p>
        <p className={stepStyles.description}>{props.description}</p>
      </div>
    </ClickableDiv>
  );
};

export default Step;
