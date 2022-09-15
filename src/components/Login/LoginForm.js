import React, { useState } from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { validate } from "./validate";

export function LoginForm({ logInLogOut }) {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errorMessages, setErrorMessages] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const errorMessages = validate(values);
    setErrorMessages(errorMessages);
    if (errorMessages) return;

    if (typeof logInLogOut === "function") {
      logInLogOut(values);
    }
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {errorMessages && <span>{errorMessages?.email}</span>}
      {errorMessages && <span>{errorMessages?.password}</span>}

      <label htmlFor="email">Email </label>
      <input
        type="text"
        name="email"
        id="email"
        required
        value={values.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Hasło </label>
      <input
        type="password"
        name="password"
        id="password"
        required
        value={values.password}
        onChange={handleChange}
      />
      <section className={styles.buttons}>
        <Link to={"/rejestracja"}>Załóż konto!</Link>
        <input type="submit" value="Zaloguj!" className={styles.submitButton} />
      </section>
    </form>
  );
}
