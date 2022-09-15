import React from "react";
import styles from "./Login.module.scss";

export function LoginForm() {
  return (
    <form className={styles.form}>
      <label htmlFor="email">Email </label>
      <input type="text" name="email" id="email" required />
      <label htmlFor="password">Hasło </label>
      <input type="password" name="password" id="password" required />
    </form>
  );
}
