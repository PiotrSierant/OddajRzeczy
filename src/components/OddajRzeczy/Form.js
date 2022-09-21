import React, { useEffect, useState } from "react";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import { ThirdStep } from "./ThirdStep";
import { FourthStep } from "./FourthStep";
import { FifthStep } from "./FifthStep";
import { validate } from "./validate";
import styles from "./Form.module.scss";

export function Form({ nextStep, prevStep, formInformation, handleChange }) {
  const [errorDataMessages, setErrorDataMessages] = useState(null);
  const [dataDisabled, setDataDisabled] = useState(true);
  const { step, type, bags, localization, whoWeHelp, nameOrganization } =
    formInformation;

  useEffect(() => {
    setDataDisabled(true);
  }, [formInformation]);

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  function handleCheckData(event) {
    event.preventDefault();
    const errorDataMessages = validate(formInformation);
    setErrorDataMessages(errorDataMessages);
    if (!errorDataMessages) {
      setDataDisabled(false);
    }
    return !errorDataMessages;
  }

  return (
    <div className={styles.formContainer}>
      <section className={styles.formSection}>
        {step === 1 && (
          <FirstStep step={step} handleChange={handleChange} type={type} />
        )}
        {step === 2 && (
          <SecondStep step={step} handleChange={handleChange} bags={bags} />
        )}
        {step === 3 && (
          <ThirdStep
            step={step}
            handleChange={handleChange}
            localization={localization}
            whoWeHelp={whoWeHelp}
            nameOrganization={nameOrganization}
          />
        )}
        {step === 4 && (
          <FourthStep
            handleChange={handleChange}
            formInformation={formInformation}
            handleCheckData={handleCheckData}
            errorDataMessages={errorDataMessages}
            dataDisabled={dataDisabled}
          />
        )}
        {step === 5 && <FifthStep formInformation={formInformation} />}
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
          <button
            onClick={Continue}
            disabled={localization === null || whoWeHelp === null}
          >
            Dalej
          </button>
        )}
        {step === 4 && (
          <button onClick={Continue} disabled={dataDisabled}>
            Dalej
          </button>
        )}
        {step === 5 && <button onClick={Continue}>Potwierdzam</button>}
      </section>
    </div>
  );
}
