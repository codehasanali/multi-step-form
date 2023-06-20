import headlineStyles from "./headline.module.css";

type Props = {
  title: string;
  description: string;
};

const Headline = (props: Props) => {
  return (
    <>
      <h1 className={headlineStyles.title}>{props.title}</h1>
      <p className={headlineStyles.desc}>{props.description}</p>
    </>
  );
};

export default Headline;
