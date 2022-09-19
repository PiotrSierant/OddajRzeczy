import React, { useState } from "react";
import styles from "./Register.module.scss";
import { validate } from "./validate";
import { Link } from "react-router-dom";

export function RegisterForm({ logInLogOut }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
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
      {errorMessages && <span>{errorMessages?.repeatPassword}</span>}
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
      <label htmlFor="repeatPassword">Powtórz hasło </label>
      <input
        type="password"
        name="repeatPassword"
        id="repeatPassword"
        required
        value={values.repeatPassword}
        onChange={handleChange}
      />
      <section className={styles.buttons}>
        <Link to={"/logowanie"}>Zaloguj się!</Link>
        <input
          type="submit"
          value="Zarejestruj!"
          className={styles.submitButton}
        />
      </section>
    </form>
  );
}