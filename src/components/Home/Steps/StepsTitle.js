import React from "react";
import image from "../../../assets/Decoration.svg";
import styles from "./StepsTitle.module.scss";

export function StepsTitle() {
  return (
    <div className={styles.container}>
      <h2>Wystarczą 4 proste kroki</h2>
      <img src={image} alt="decoration" />
    </div>
  );
}
