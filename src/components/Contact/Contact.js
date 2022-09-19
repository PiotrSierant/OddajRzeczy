import React, { useState } from "react";
import { validate } from "./validate";
import styles from "./Contact.module.scss";
import image from "../../assets/Decoration.svg";
export function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [post, setPost] = useState();
  const [errorFormMessages, setErrorFormMessages] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const errorFormMessages = validate(values);
    setErrorFormMessages(errorFormMessages);
    if (errorFormMessages) return;
    postFormSubmit(values);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function postFormSubmit(values) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setValues({
          name: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setPost(null);
        }, 5000);
      });
  }

  return (
    <div className={styles.container} name="kontakt">
      <section className={styles.ContactContainer}>
        <section className={styles.formContact}>
          <h3>Skontaktuj się z nami</h3>
          <img src={image} alt="decoration" />
          <form onSubmit={handleSubmit}>
            {errorFormMessages && (
              <span className={styles.errorMessage}>
                {errorFormMessages?.error}
              </span>
            )}
            {post && (
              <span className={styles.successMessage}>
                Wiadomość została przesłana
              </span>
            )}
            <section className={styles.formInputSection}>
              <div>
                <label htmlFor="name" className={styles.labelFormContact}>
                  Wpisz swoje imię
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  required
                  placeholder="Krzysztof"
                />
              </div>
              <div>
                <label htmlFor="email" className={styles.labelFormContact}>
                  Wpisz swój email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  required
                  placeholder="jakis@email.com"
                />
              </div>
            </section>
            <label htmlFor="message" className={styles.labelFormContact}>
              Wpisz swoją wiadomość
            </label>
            <textarea
              name="message"
              id="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              required
            />
            <input
              type="submit"
              value="Wyślij!"
              className={styles.submitButton}
            />
          </form>
        </section>
      </section>
    </div>
  );
}
