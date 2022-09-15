import React from "react";
import { RegisterForm } from "./RegisterForm";
import image from "../../../assets/Decoration.svg";
import styles from "./Register.module.scss";
import { CallActionButtons } from "../Login/CallActionButtons";

export function RegisterDetails() {
  return (
    <section className={styles.registerContainer}>
      <h1>Załóż konto</h1>
      <img src={image} alt="decoration" />
      <RegisterForm />
      <CallActionButtons />
    </section>
  );
}
