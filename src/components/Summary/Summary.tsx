import summaryStyles from "./summary.module.css";
import BillingEnum from "../../enums/BillingEnum";
import { buttonStyles, Button, Headline, Wrapper } from "../../layout";
import FormInterface from "../../interfaces/FormInterface";

type Props = {
  handleConfirm: () => void;
  handlePrevStep: () => void;
  formData: FormInterface;
};

const Summary = ({ handleConfirm, handlePrevStep, formData }: Props) => {
  const billingType = formData.billing === BillingEnum[0] ? "mo" : "yr";

  return (
    <Wrapper>
      <Headline
        title="Finishing up"
        description="Double-check everything looks OK before confirming"
      />
      <div className={summaryStyles.summaryWrapper}>
        <div className={summaryStyles.planInfo}>
          <div id="plan-type">
            <p>{`${formData.plan} (${formData.billing})`} </p>
            <button className={summaryStyles.changeButton}>Change</button>
          </div>
          <p
            className={summaryStyles.price}
          >{`$${formData.billingPrice}/${billingType}`}</p>
        </div>
        <hr className={summaryStyles.line} />
        <div
          className={summaryStyles.addonsInfo}
          style={formData.addons.length === 0 ? { alignItems: "center" } : {}}
        >
          {formData.addons.length === 0 ? (
            <p className={summaryStyles.emptyAddons}>No addons</p>
          ) : (
            formData.addons.map((addon, index) => (
              <div key={index} className={summaryStyles.addonsElements}>
                <p>{addon}</p>
                <p
                  className={summaryStyles.price}
                >{`+$${formData.addonsPrices[index]}/${billingType}`}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <div className={summaryStyles.totalWrapper}>
        <p className={summaryStyles.totalText}>{`Total (per ${
          formData.billing === BillingEnum[0] ? "month" : "year"
        })`}</p>
        <p
          className={summaryStyles.totalPrice}
        >{`$${formData.total}/${billingType}`}</p>
      </div>
      <div className={buttonStyles.navigationWrapper}>
        <Button
          text="Go back"
          color="transparent"
          textColor="hsl(231, 11%, 63%)"
          click={handlePrevStep}
        />
        <Button
          text="Confirm"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          click={handleConfirm}
        />
      </div>
    </Wrapper>
  );
};

export default Summary;
