import React from "react";
import styles from "./Register.module.scss";

export function RegisterForm() {
  return (
    <form className={styles.form}>
      <label htmlFor="email">Email </label>
      <input type="text" name="email" id="email" required />
      <label htmlFor="password">Hasło </label>
      <input type="password" name="password" id="password" required />
      <label htmlFor="repeatPassword">Powtórz hasło </label>
      <input
        type="password"
        name="repeatPassword"
        id="repeatPassword"
        required
      />
    </form>
  );
}
