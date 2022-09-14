import React from "react";
import styles from "./Login.module.scss";
import { Navbar } from "../../Navbar/Navbar";

export function Login() {
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
        <h1>Login</h1>
      </header>
    </div>
  );
}
