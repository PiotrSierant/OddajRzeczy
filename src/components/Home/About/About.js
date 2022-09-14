import React from "react";
import { AboutUs } from "./AboutUs";
import styles from "./About.module.scss";
export function About() {
  return (
    <div className={styles.container} name="onas">
      <AboutUs />
      <div className={styles.imgContainer} />
    </div>
  );
}
