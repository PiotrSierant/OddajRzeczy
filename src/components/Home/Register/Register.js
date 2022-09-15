import React from "react";
import styles from "./Register.module.scss";
import { Navbar } from "../../Navbar/Navbar";
import { RegisterDetails } from "./RegisterDetails";

export function Register() {
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
        <RegisterDetails />
      </header>
    </div>
  );
}
