import React from "react";
import styles from "./SecondStep.module.scss";

export function SecondStep({ step, handleChange, bags }) {
  return (
    <>
      <p className={styles.formStep}>Krok {step}/4</p>
      <h3 className={styles.formTitle}>
        Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
      </h3>
      <section className={styles.selectSection}>
        <span>Liczba 60l worków:</span>
        <select onChange={handleChange("bags")}>
          <option selected={bags === null} disabled={true}>
            -- Wybierz --
          </option>
          <option selected={bags === "1"} value="1">
            1
          </option>
          <option selected={bags === "2"} value="2">
            2
          </option>
          <option selected={bags === "3"} value="3">
            3
          </option>
          <option selected={bags === "4"} value="4">
            4
          </option>
          <option selected={bags === "5"} value="5">
            5
          </option>
        </select>
      </section>
    </>
  );
}
