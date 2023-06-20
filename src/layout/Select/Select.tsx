import BillingEnum from "../../enums/BillingEnum";
import selectStyles from "./select.module.css";

type Props = {
  name: string;
  description: string;
  price: number;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  value: string;
  billing: string;
};

const Select = (props: Props) => {
  const billingType = props.billing === BillingEnum[0] ? "mo" : "yr";
  return (
    <div
      className={`${selectStyles.selectWrapper} ${
        props.checked ? selectStyles.active : ""
      }`}
    >
      <input
        id={props.price.toString()}
        type="checkbox"
        onChange={props.change}
        checked={props.checked}
        value={props.value}
        name="addons"
      />
      <div className={`${selectStyles.infoWrapper}`}>
        <div className={selectStyles.textWrapper}>
          <p className={selectStyles.name}>{props.name}</p>
          <p className={selectStyles.desc}>{props.description}</p>
        </div>
        <p className={selectStyles.price}>{`+${props.price}/${billingType}`}</p>
      </div>
    </div>
  );
};

export default Select;
