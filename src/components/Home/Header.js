import React from "react";
import styles from "./Home.module.scss";
import { RightSection } from "./RightSection/RightSection";

export function Header() {
  return (
    <div className={styles.container}>
      <header name="start">
        <section className={styles.heroContainer}>
          <div className={styles.hero} />
          <RightSection />
        </section>
      </header>
    </div>
  );
}
