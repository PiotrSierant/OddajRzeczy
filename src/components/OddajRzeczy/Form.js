import React from "react";
import styles from "./Form.module.scss";
export function Form({ step, nextStep, prevStep }) {
  return (
    <div className={styles.formContainer}>
      <section className={styles.formSection}>
        <p>Krok {step}/4</p>
        <button onClick={prevStep}>Wstecz</button>
        <button onClick={nextStep}>Dalej</button>
      </section>
    </div>
  );
}
