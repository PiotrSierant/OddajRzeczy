import React from "react";
import styles from "./MultiStepForm.module.scss";

export function Important({ step }) {
  return (
    <div className={styles.importantContainer}>
      {step === 1 && (
        <section className={styles.important}>
          <h2>Ważne!</h2>
          <p>
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
            wiedzieć komu najlepiej je przekazać.
          </p>
        </section>
      )}
      {step === 2 && (
        <section className={styles.important}>
          <h2>Ważne!</h2>
          <p>
            Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
            jak poprawnie spakować rzeczy znajdziesz TUTAJ.
          </p>
        </section>
      )}
      {step === 3 && (
        <section className={styles.important}>
          <h2>Ważne!</h2>
          <p>
            Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
            wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji
            bądź celu ich pomocy.
          </p>
        </section>
      )}
      {step === 4 && (
        <section className={styles.important}>
          <h2>Ważne!</h2>
          <p>Podaj adres oraz termin odbioru rzeczy.</p>
        </section>
      )}
    </div>
  );
}
