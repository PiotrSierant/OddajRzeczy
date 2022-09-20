import React, { useState } from "react";
import styles from "./HomeOddajRzeczy.module.scss";
import { Navbar } from "../Navbar/Navbar";
import { HeaderOddajRzeczy } from "./HeaderOddajRzeczy";
import { Contact } from "../Contact/Contact";
import { MultiStepForm } from "./MultiStepForm";
export function HomeOddajRzeczy({ isLogged }) {
  const [formInformation, setFormInformation] = useState({
    step: 1,
    type: "",
    bags: null,
    localization: "",
    whoWeHelp: "",
    nameOrganization: "",
    street: "",
    city: "",
    postCode: null,
    phone: null,
    date: null,
    hours: null,
    message: "",
  });
  const prevStep = () => {
    const { step } = formInformation;
    if (step === 1) return;

    setFormInformation({
      ...formInformation,
      step: step - 1,
    });
  };

  const nextStep = () => {
    const { step } = formInformation;
    if (step === 6) return;

    setFormInformation({
      ...formInformation,
      step: step + 1,
    });
  };
  const handleChange = (input) => (e) => {
    setFormInformation({
      ...formInformation,
      [input]: e.target.value,
    });
  };

  return (
    <div className={styles.containerOddajRzeczy}>
      <Navbar isLogged={isLogged} />
      <HeaderOddajRzeczy />
      <MultiStepForm
        formInformation={formInformation}
        nextStep={nextStep}
        prevStep={prevStep}
      />
      <Contact />
    </div>
  );
}
