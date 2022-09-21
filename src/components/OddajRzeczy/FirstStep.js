import React from "react";
import styles from "./FirstStep.module.scss";
export function FirstStep({ step, type, handleChange }) {
  return (
    <>
      <p className={styles.formStep}>Krok {step}/4</p>
      <h3 className={styles.formTitle}>Zaznacz co chcesz oddać:</h3>
      <section className={styles.radioSection}>
        <label className={styles.checkbox}>
          <input
            type="radio"
            name="type"
            value="ubrania, które nadają się do ponownego użycia"
            checked={type === "ubrania, które nadają się do ponownego użycia"}
            onChange={handleChange("type")}
          />
          <span></span>
          ubrania, które nadają się do ponownego użycia
        </label>
        <label className={styles.checkbox}>
          <input
            type="radio"
            name="type"
            value="ubrania, do wyrzucenia"
            checked={type === "ubrania, do wyrzucenia"}
            onChange={handleChange("type")}
          />
          <span></span>
          ubrania, do wyrzucenia
        </label>
        <label className={styles.checkbox}>
          <input
            type="radio"
            name="type"
            value="zabawki"
            checked={type === "zabawki"}
            onChange={handleChange("type")}
          />
          <span></span>
          zabawki
        </label>
        <label className={styles.checkbox}>
          <input
            type="radio"
            name="type"
            value="ksiażki"
            checked={type === "ksiażki"}
            onChange={handleChange("type")}
          />
          <span></span>
          ksiażki
        </label>
        <label className={styles.checkbox}>
          <input
            type="radio"
            name="type"
            value="inne"
            checked={type === "inne"}
            onChange={handleChange("type")}
          />
          <span></span>
          inne
        </label>
      </section>
    </>
  );
}
