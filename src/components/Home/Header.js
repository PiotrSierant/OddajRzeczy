import React from "react";
import styles from "./Home.module.scss";
import { RightSection } from "./RightSection/RightSection";

export function Header() {
  return (
    <div className={styles.HeaderContainer}>
      <header name="start" className={styles.heroContainer}>
        <RightSection />
      </header>
    </div>
  );
}
