import React from "react";
import styles from "./FourthStep.module.scss";

export function FourthStep({
  dataDisabled,
  errorDataMessages,
  handleChange,
  formInformation,
  handleCheckData,
}) {
  const { step, street, city, postCode, phone, date, hours, message } =
    formInformation;
  return (
    <>
      <p className={styles.formStep}>Krok {step}/4</p>
      <h3 className={styles.formTitle}>
        Podaj adres oraz termin odbioru rzecz przez kuriera
      </h3>
      <form onSubmit={handleCheckData}>
        <section className={styles.dataContainer}>
          <section className={styles.dataAddress}>
            <h4 className={styles.dataDesc}>Adres odbioru:</h4>
            <label>
              Ulica
              <input
                type="text"
                name="street"
                id="street"
                value={street}
                onChange={handleChange("street")}
                required
              />
            </label>
            <label>
              Miasto
              <input
                type="text"
                name="city"
                id="city"
                value={city}
                onChange={handleChange("city")}
                required
              />
            </label>
            <label>
              Kod pocztowy
              <input
                type="number"
                name="postCode"
                id="postCode"
                value={postCode}
                onChange={handleChange("postCode")}
                required
              />
            </label>
            <label>
              Numer telefonu
              <input
                type="number"
                name="phone"
                id="phone"
                value={phone}
                onChange={handleChange("phone")}
                required
              />
            </label>
          </section>
          <section className={styles.date}>
            <h4 className={styles.dataDesc}>Adres odbioru:</h4>
            <label>
              Data
              <input
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={handleChange("date")}
                required={true}
              />
            </label>
            <label>
              Godzina
              <input
                type="time"
                name="hours"
                id="hours"
                value={hours}
                onChange={handleChange("hours")}
                required={true}
              />
            </label>
            <label>
              Uwagi dla kuriera
              <textarea
                className={styles.textareaOddajRzeczy}
                name="message"
                id="message"
                value={message}
                onChange={handleChange("message")}
              />
            </label>
          </section>
        </section>
        <section className={styles.checkSection}>
          <input
            type="submit"
            value="Sprawdź dane!"
            className={styles.checkInput}
          />
          {step === 4 && errorDataMessages && (
            <span className={styles.error}>{errorDataMessages.error}</span>
          )}
          {step === 4 && !dataDisabled && (
            <span className={styles.correct}>Podane dane są prawidłowe!</span>
          )}
        </section>
      </form>
    </>
  );
}
