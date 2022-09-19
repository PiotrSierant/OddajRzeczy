import React from "react";
import styles from "./Login.module.scss";
import { Navbar } from "../Navbar/Navbar";
import { LoginDetails } from "./LoginDetails";

export function Login({ logInLogOut }) {
  return (
    <div className={styles.containerLogin}>
      <header>
        <Navbar />
        <LoginDetails logInLogOut={logInLogOut} />
      </header>
    </div>
  );
}
