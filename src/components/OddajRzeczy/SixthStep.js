import React from "react";
import image from "../../assets/Decoration.svg";
import styles from "./SixthStep.module.scss";
export function SixthStep() {
  return (
    <div className={styles.containerCorrect}>
      <section className={styles.correctSend}>
        <h1>
          Dziękujemy za przesłanie formularza
          <br />
          Na maila prześlemy wszelkie
          <br />
          informacje o odbiorze.
        </h1>
        <img src={image} alt="decoration" />
      </section>
    </div>
  );
}
