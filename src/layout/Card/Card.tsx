import BillingEnum from "../../enums/BillingEnum";
import cardStyles from "./card.module.css";

type Props = {
  src: string;
  title: string;
  price: number;
  id?: string;
  billing: string;
  active?: boolean;
};

const Card = (props: Props) => {
  const billingType = props.billing === BillingEnum[0] ? "mo" : "yr";

  return (
    <div
      id={props.id?.toString()}
      className={`${cardStyles.cardWrapper} ${
        props.active ? cardStyles.active : ""
      }`}
    >
      <img src={props.src} alt={props.title} />
      <p className={cardStyles.title}>{props.title}</p>
      <p className={cardStyles.price}>{`${props.price}/${billingType}`}</p>
      {props.billing === BillingEnum[1] ? (
        <p className={cardStyles.dealText}>2 months free</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
