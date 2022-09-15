import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
export function CallActionButtons() {
  return (
    <section className={styles.buttons}>
      <Link to={"/rejestracja"}>Załóż konto!</Link>
      <Link to={"/"}>Zaloguj sie</Link>
    </section>
  );
}
