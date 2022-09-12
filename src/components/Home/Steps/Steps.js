import React from "react";
import styles from "./Steps.module.scss";
import { Step } from "./Step";
import {
  faTshirt,
  faBagShopping,
  faSearch,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";

export function Steps() {
  return (
    <div className={styles.container}>
      <section className={styles.stepsContainer}>
        <Step
          title="Wybierz rzeczy"
          text="ubrania, zabawki, sprzęt i inne"
          icon={faTshirt}
        />
        <Step
          title="Spakuj je"
          text="skorzystaj z worków na śmieci"
          icon={faBagShopping}
        />
        <Step
          title="Zdecyduj komu chcesz pomóc"
          text="wybierz zaufane miejsce"
          icon={faSearch}
        />
        <Step
          title="Zamów kuriera"
          text="kurier przyjedzie w dogodnym terminie"
          icon={faRotate}
        />
      </section>
    </div>
  );
}
