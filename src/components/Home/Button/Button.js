import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

export function Button() {
  return (
    <div className={styles.container}>
      <Link to="/logowanie">ODDAJ RZECZY</Link>
    </div>
  );
}
