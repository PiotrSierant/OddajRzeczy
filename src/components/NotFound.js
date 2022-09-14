import React from "react";
import styles from "./NotFound.module.scss";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <header className={styles.notFoundContainer}>
      <p>404 - page not found</p>
      <button onClick={() => navigate(-1)} className={styles.button}>
        Powrót
      </button>
    </header>
  );
}
