import React from "react";
import styles from "./Register.module.scss";
import { Navbar } from "../../Navbar/Navbar";

export function Register() {
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
        <h1>Register</h1>
      </header>
    </div>
  );
}
