import React from "react";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import styles from "./Form.module.scss";

export function Form({ nextStep, prevStep, formInformation, handleChange }) {
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

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div className={styles.formContainer}>
      <section className={styles.formSection}>
        {step === 1 && (
          <FirstStep step={step} handleChange={handleChange} type={type} />
        )}
        {step === 2 && (
          <SecondStep step={step} handleChange={handleChange} bags={bags} />
        )}
      </section>
      <section className={styles.buttonNextAndPrev}>
        {step !== 1 && <button onClick={Previous}>Wstecz</button>}
        {step === 1 && (
          <button onClick={Continue} disabled={type === ""}>
            Dalej
          </button>
        )}
        {step === 2 && (
          <button onClick={Continue} disabled={bags === null}>
            Dalej
          </button>
        )}
        {step === 3 && (
          <button onClick={Continue} disabled={bags === null}>
            Dalej
          </button>
        )}
      </section>
    </div>
  );
}
