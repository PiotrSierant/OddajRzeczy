import React from "react";
import styles from "./Login.module.scss";
import { Navbar } from "../Navbar/Navbar";
import { LoginDetails } from "./LoginDetails";

export function Login() {
  return (
    <div className={styles.containerLogin}>
      <header>
        <Navbar />
        <LoginDetails />
      </header>
    </div>
  );
}
