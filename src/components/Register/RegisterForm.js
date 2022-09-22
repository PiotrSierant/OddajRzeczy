import React, { useState } from "react";
import styles from "./Register.module.scss";
import { validate } from "./validate";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../config/fire";
import { useNavigate } from "react-router-dom";

export function RegisterForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  let navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const errorMessages = validate(values);
    setErrorMessages(errorMessages);
    if (errorMessages) return;
    submitHandler(event);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = values;
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then((res) => {
            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {errorMessages && <span>{errorMessages?.error}</span>}
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
