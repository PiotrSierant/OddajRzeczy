import React from "react";
import styles from "./WhoHelp.module.scss";

export function WhoHelpButton({ text, onClick }) {
  return (
    <button type="button" onClick={onClick} className={styles.whoHelpButton}>
      {text}
    </button>
  );
}
