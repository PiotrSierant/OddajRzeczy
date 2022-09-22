import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import { auth } from "../../../config/fire";
export function Button() {
  return (
    <div className={styles.container}>
      {auth.currentUser ? (
        <Link to="/oddaj-rzeczy">ODDAJ RZECZY</Link>
      ) : (
        <Link to="/logowanie">ODDAJ RZECZY</Link>
      )}
    </div>
  );
}
