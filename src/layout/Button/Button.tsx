import buttonStyles from "./button.module.css";

type Props = {
  text: string;
  color: string;
  textColor: string;
  alignSelf?: string;
  click?: () => void;
};

const Button = (props: Props) => {
  return (
    <button
      style={{
        backgroundColor: props.color,
        color: props.textColor,
        alignSelf: props.alignSelf,
      }}
      onClick={props.click}
      className={buttonStyles.button}
    >
      {props.text}
    </button>
  );
};

export default Button;
