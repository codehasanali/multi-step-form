import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { setFormData } from "../../store/actions";
import BillingEnum from "../../enums/BillingEnum";
import planStyles from "./plan.module.css";
import {
  buttonStyles,
  cardStyles,
  Button,
  Card,
  Headline,
  ClickableDiv,
  Wrapper,
} from "../../layout";
import FormInterface from "../../interfaces/FormInterface";
import Alert from "../Alert/Alert";

type Props = {
  handleNextStep: () => void;
  handlePrevStep: () => void;
  checked: boolean;
  billingUpdate: (value: boolean) => void;
  formData: FormInterface;
  activePlan: string;
  setActivePlan: (value: string) => void;
  alertOpen: boolean;
  setAlertOpen: Dispatch<React.SetStateAction<boolean>>;
};

const PlanEnum = ["Arcade", "Advanced", "Pro"] as const;

const plansMonthly = [
  {
    src: "../../assets/images/icon-arcade.svg",
    title: "Arcade",
    priceMonthly: 9,
    priceYearly: 90,
    type: PlanEnum,
  },
  {
    src: "../../assets/images/icon-advanced.svg",
    title: "Advanced",
    priceMonthly: 12,
    priceYearly: 120,
    type: PlanEnum,
  },
  {
    src: "../../assets/images/icon-pro.svg",
    title: "Pro",
    priceMonthly: 15,
    priceYearly: 150,
    type: PlanEnum,
  },
];

const Plan = ({
  handleNextStep,
  handlePrevStep,
  checked,
  billingUpdate,
  formData,
  activePlan,
  setActivePlan,
  alertOpen,
  setAlertOpen,
}: Props) => {
  const dispatch: AppDispatch = useDispatch();

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setActivePlan(e.currentTarget.children[0].id);
    const activeElements = document.getElementsByClassName(cardStyles.active);

    for (let i = 0; i < activeElements.length; i++) {
      activeElements[i].classList.remove(cardStyles.active);
    }

    e.currentTarget.children[0].classList.add(`${cardStyles.active}`);

    dispatch(
      setFormData({
        ...formData,
        ["plan"]: e.currentTarget.children[0].id,
      })
    );
  };

  const handleSwitch: React.ChangeEventHandler<HTMLLabelElement> = () => {
    billingUpdate(!checked);
    dispatch(
      setFormData({
        ...formData,
        ["billing"]: !checked ? BillingEnum[1] : BillingEnum[0],
      })
    );
  };

  return (
    <Wrapper>
      <Headline
        title="Select your plan"
        description="You have the option of monthly or yearly billing"
      />
      <div className={planStyles.optionsWrapper}>
        {plansMonthly.map((plan, index) => (
          <ClickableDiv key={index} onClick={handleClick}>
            <Card
              src={plan.src}
              title={plan.title}
              price={!checked ? plan.priceMonthly : plan.priceYearly}
              id={plan.type[index]}
              billing={formData.billing}
              active={activePlan === plan.type[index]}
            />
          </ClickableDiv>
        ))}
      </div>
      <div className={planStyles.switchWrapper}>
        <p className={!checked ? planStyles.active : planStyles.inactive}>
          Monthly
        </p>
        <label className={planStyles.switch} onChange={handleSwitch}>
          <input type="checkbox" defaultChecked={checked} />
          <span className={`${planStyles.slider} ${planStyles.round}`}></span>
        </label>
        <p className={checked ? planStyles.active : planStyles.inactive}>
          Yearly
        </p>
      </div>
      <div className={buttonStyles.navigationWrapper}>
        <Button
          text="Go back"
          color="transparent"
          textColor="hsl(231, 11%, 63%)"
          click={handlePrevStep}
        />
        <Button
          text="Next Step"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          click={() => {
            if (formData.plan === "") {
              setAlertOpen(true);
              return;
            } else {
              const price = parseFloat(
                document.getElementsByClassName(cardStyles.active)[0]
                  .children[2].innerHTML
              );
              dispatch(setFormData({ ...formData, ["billingPrice"]: price }));
              handleNextStep();
            }
          }}
        />
      </div>
      <Alert
        type="warning"
        text="Please select a plan"
        open={alertOpen}
        set={setAlertOpen}
      />
    </Wrapper>
  );
};

export default Plan;
