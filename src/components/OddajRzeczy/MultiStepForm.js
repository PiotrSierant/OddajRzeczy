import React from "react";
import styles from "./MultiStepForm.module.scss";
import { Important } from "./Important";
import { Form } from "./Form";

export function MultiStepForm({
  formInformation,
  nextStep,
  prevStep,
  handleChange,
}) {
  return (
    <div className={styles.headContainer}>
      <Important formInformation={formInformation} />
      <Form
        formInformation={formInformation}
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
      />
    </div>
  );
}
