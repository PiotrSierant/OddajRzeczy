import React from "react";
import image from "../../assets/Decoration.svg";
import { LoginForm } from "./LoginForm";
import styles from "./Login.module.scss";

export function LoginDetails({ logInLogOut }) {
  return (
    <section className={styles.loginContainer}>
      <h1>Zaloguj się</h1>
      <img src={image} alt="decoration" />
      <LoginForm logInLogOut={logInLogOut} />
    </section>
  );
}
