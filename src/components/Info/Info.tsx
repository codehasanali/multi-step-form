import infoStyles from "./info.module.css";
import { Button, Headline, Label, Wrapper } from "../../layout";
import React, { Dispatch } from "react";

type Props = {
  tempData: { name: string; email: string; number: string };
  handleTempData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValid: { name: boolean; email: boolean; number: boolean };
  setInputValid: Dispatch<
    React.SetStateAction<{ name: boolean; email: boolean; number: boolean }>
  >;
};

const Info = ({
  tempData,
  handleTempData,
  handleNextStep,
  change,
  inputValid,
  setInputValid,
}: Props) => {
  const nameExpression = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const emailExpression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const phoneExpression = /^\+[1-9]{1}[0-9]{1,14}$/;

  const validateInputs = () => {
    setInputValid({
      name: nameExpression.test(tempData.name),
      email: emailExpression.test(tempData.email),
      number: phoneExpression.test(tempData.number),
    });
  };

  return (
    <Wrapper>
      <Headline
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />
      <Label
        name="name"
        labelText="Name"
        valid={inputValid.name}
        errorText="Please provide properly name!"
      />
      <input
        type="text"
        name="name"
        onBlur={() => {
          change;
          setInputValid({
            ...inputValid,
            name: nameExpression.test(tempData.name),
          });
        }}
        placeholder="e.g Stephen King"
        onChange={handleTempData}
        value={tempData.name}
        style={{ borderColor: inputValid.name ? "" : "hsl(0, 100%, 74%)" }}
        autoFocus
      />
      <Label
        name="email"
        labelText="Email Address"
        valid={inputValid.email}
        errorText="Please provide properly email address!"
      />
      <input
        type="text"
        name="email"
        onBlur={() => {
          change;
          setInputValid({
            ...inputValid,
            email: emailExpression.test(tempData.email),
          });
        }}
        placeholder="e.g stephenking@lorem.com"
        onChange={handleTempData}
        value={tempData.email}
        style={{ borderColor: inputValid.email ? "" : "hsl(0, 100%, 74%)" }}
      />
      <Label
        name="number"
        labelText="Phone Number"
        valid={inputValid.number}
        errorText="Please provide properly phone number!"
      />
      <input
        type="text"
        name="number"
        onBlur={() => {
          change;
          setInputValid({
            ...inputValid,
            number: phoneExpression.test(tempData.number),
          });
        }}
        placeholder="e.g +1234567890"
        onChange={handleTempData}
        value={tempData.number}
        style={{ borderColor: inputValid.number ? "" : "hsl(0, 100%, 74%)" }}
      />
      <div className={infoStyles.navWrapper}>
        <Button
          text="Next Step"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          alignSelf="end"
          click={() => {
            validateInputs();
            if (inputValid.name && inputValid.email && inputValid.number) {
              handleNextStep();
            }
          }}
        />
      </div>
    </Wrapper>
  );
};

export default Info;
