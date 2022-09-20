import React from "react";
import styles from "./MultiStepForm.module.scss";
import { Important } from "./Important";
import { Form } from "./Form";

export function MultiStepForm({ formInformation, nextStep, prevStep }) {
  const {
    step,
    type,
    bags,
    localization,
    whoWeHelp,
    nameOrganization,
    street,
    city,
    postCode,
    phone,
    date,
    hours,
    message,
  } = formInformation;

  return (
    <div className={styles.headContainer}>
      <Important step={step} />
      <Form step={step} nextStep={nextStep} prevStep={prevStep} />
    </div>
  );
}
