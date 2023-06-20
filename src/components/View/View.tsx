import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFormData } from "../../store/actions";
import { RootState, AppDispatch } from "../../store/store";
import { Sidebar, Form, viewStyles } from "../index";
import FormInterface from "../../interfaces/FormInterface";
import Alert from "../Alert/Alert";

const View: React.FC = () => {
  const [step, setStep] = React.useState<number>(1);
  const formData: FormInterface = {
    name: useSelector((state: RootState) => state.name),
    email: useSelector((state: RootState) => state.email),
    number: useSelector((state: RootState) => state.number),
    billing: useSelector((state: RootState) => state.billing),
    billingPrice: useSelector((state: RootState) => state.billingPrice),
    plan: useSelector((state: RootState) => state.plan),
    addons: useSelector((state: RootState) => state.addons),
    addonsPrices: useSelector((state: RootState) => state.addonsPrices),
    total: useSelector((state: RootState) => state.total),
  };
  const dispatch: AppDispatch = useDispatch();
  const [addonsChecked, setAddonsChecked] = React.useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const [properlyFilled, setProperlyFilled] = React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [succesOpen, setSuccesOpen] = React.useState(false);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleInfoFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setFormData({ ...formData, [name]: value }));
  };

  const handleFormConfirm = () => {
    setStep(step + 1);
    console.log(formData);
  };

  const handleSidebarNavigation: React.MouseEventHandler<HTMLDivElement> = (
    e
  ) => {
    if (properlyFilled) {
      if (step === 5) {
        setSuccesOpen(true);
      } else {
        setStep(parseInt(e.currentTarget.id));
        // If the user navigates to the summary step, the total price is calculated
        if (e.currentTarget.id === "4") {
          dispatch(
            setFormData({
              ...formData,
              ["total"]:
                formData.billingPrice +
                formData.addonsPrices.reduce((a, b) => a + b, 0),
            })
          );
        }
      }
    }
  };

  const handleAddonsCheck = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newChecked = [...addonsChecked];
    newChecked[index] = !newChecked[index];
    setAddonsChecked(newChecked);

    if (e.target.checked === true) {
      dispatch(
        setFormData({
          ...formData,
          [e.target.name]: [...formData.addons, e.target.value],
          ["addonsPrices"]: [...formData.addonsPrices, parseInt(e.target.id)],
        })
      );
    } else {
      dispatch(
        setFormData({
          ...formData,
          [e.target.name]: formData.addons.filter(
            (addon) => addon !== e.target.value
          ),
          ["addonsPrices"]: formData.addonsPrices.filter(
            (price) => price !== parseInt(e.target.id)
          ),
        })
      );
    }
  };

  return (
    <div id="container" className={viewStyles.container}>
      <div id="view-wrapper" className={viewStyles.viewWrapper}>
        <Sidebar navigate={handleSidebarNavigation} step={step} />
        <Form
          prev={handlePrevStep}
          next={handleNextStep}
          confirm={handleFormConfirm}
          step={step}
          formData={formData}
          handleChange={handleInfoFromChange}
          handleCheck={handleAddonsCheck}
          checked={addonsChecked}
          setProperlyFilled={setProperlyFilled}
          alertOpen={alertOpen}
          setAlertOpen={setAlertOpen}
        />
      </div>
      <Alert
        type="success"
        text="Form was submitted successfully!"
        open={succesOpen}
        set={setSuccesOpen}
      />
    </div>
  );
};

export default View;
