import React from "react";
import image from "../../assets/Decoration.svg";
import styles from "./HomeOddajRzeczy.module.scss";

export function HeaderOddajRzeczy() {
  return (
    <div className={styles.header}>
      <div className={styles.OddajRzeczy}>
        <section className={styles.headerOddajRzeczy}>
          <h1>
            Oddaj rzeczy, których już nie chcesz <br />
            POTRZEBUJĄCYM
          </h1>
          <img src={image} alt="decoration" />
          <h2>Wystarczą 4 proste kroki:</h2>
          <section className={styles.rentangleContainer}>
            <div className={styles.stepRentangle}>
              <h3>1</h3>
              <p>Wybierz rzeczy</p>
            </div>
            <div className={styles.stepRentangle}>
              <h3>2</h3>
              <p>Spakuj je w worki</p>
            </div>
            <div className={styles.stepRentangle}>
              <h3>3</h3>
              <p>Wybierz fundację</p>
            </div>
            <div className={styles.stepRentangle}>
              <h3>4</h3>
              <p>Zamów kuriera</p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
