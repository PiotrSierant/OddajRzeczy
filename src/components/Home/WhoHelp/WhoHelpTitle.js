import React from "react";
import styles from "./WhoHelp.module.scss";
import image from "../../../assets/Decoration.svg";
export function WhoHelpTitle() {
  return (
    <section className={styles.whoHelpContainer}>
      <h3>Komu pomagamy?</h3>
      <img src={image} alt="decoration" />
    </section>
  );
}
