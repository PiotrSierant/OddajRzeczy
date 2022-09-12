import React from "react";
import styles from "./Step.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Step({ icon, title, text }) {
  return (
    <section className={styles.card}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      <h3>{title}</h3>
      <hr className={styles.hrStyle} />
      <p>{text}</p>
    </section>
  );
}
