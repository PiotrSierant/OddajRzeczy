import React, { useState } from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { validate } from "./validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/fire";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errorMessages, setErrorMessages] = useState(null);
  let navigate = useNavigate();

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
    console.log("submit");
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage, "error");
      });
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
      <section className={styles.buttons}>
        <Link to={"/rejestracja"}>Załóż konto!</Link>
        <input type="submit" value="Zaloguj!" className={styles.submitButton} />
      </section>
    </form>
  );
}
