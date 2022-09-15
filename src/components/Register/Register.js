import React from "react";
import styles from "./Register.module.scss";
import { Navbar } from "../Navbar/Navbar";
import { RegisterDetails } from "./RegisterDetails";

export function Register({ logInLogOut }) {
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
        <RegisterDetails logInLogOut={logInLogOut} />
      </header>
    </div>
  );
}
