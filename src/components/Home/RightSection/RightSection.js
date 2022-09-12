import React from "react";
import image from "../../../assets/Decoration.svg";
import { Link } from "react-router-dom";
import styles from "./RightSection.module.scss";

export function RightSection() {
  return (
    <section className={styles.rightSection}>
      <h1>
        Zacznij pomagać!
        <br /> Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <img src={image} alt="decoration" />
      <section className={styles.linkSection}>
        <Link to="/logowanie">ODDAJ RZECZY</Link>
        <Link to="/logowanie">ZORGANIZUJ ZBIÓRKĘ</Link>
      </section>
    </section>
  );
}
