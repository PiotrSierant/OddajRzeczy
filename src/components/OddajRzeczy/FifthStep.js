import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt, faRotate } from "@fortawesome/free-solid-svg-icons";
import styles from "./FifthStep.module.scss";

export function FifthStep({ formInformation }) {
  const {
    type,
    localization,
    street,
    city,
    postCode,
    phone,
    date,
    hours,
    message,
  } = formInformation;
  return (
    <>
      <h1 className={styles.summaryTitle}>Podsumowanie Twojej darowizny</h1>
      <h3 className={styles.summarySubTitle}>Oddajesz:</h3>
      <section className={styles.summaryTypeAndLocalizationSection}>
        <FontAwesomeIcon icon={faTshirt} className={styles.icon} />
        <p>{type}</p>
      </section>
      <section className={styles.summaryTypeAndLocalizationSection}>
        <FontAwesomeIcon icon={faRotate} className={styles.icon} />
        <p>dla lokalizacji: {localization}</p>
      </section>
      <section className={styles.dataSummary}>
        <section className={styles.dataAddress}>
          <h3>Adres odbioru:</h3>
          <section className={styles.dataAddressInfo}>
            <p>Ulica</p>
            <span>{street}</span>
          </section>
          <section className={styles.dataAddressInfo}>
            <p>Miasto</p>
            <span>{city}</span>
          </section>
          <section className={styles.dataAddressInfo}>
            <p>Kod pocztowy</p>
            <span>{postCode}</span>
          </section>
          <section className={styles.dataAddressInfo}>
            <p>Numer telefonu</p>
            <span>{phone}</span>
          </section>
        </section>
        <section className={styles.dateInformation}>
          <h3>Termin odbioru:</h3>
          <section className={styles.dataAddressInfo}>
            <p>Data</p>
            <span>{date}</span>
          </section>
          <section className={styles.dataAddressInfo}>
            <p>Godzina</p>
            <span>{hours}</span>
          </section>
          <section className={styles.dataAddressInfo}>
            <p>Uwagi dla kuriera</p>
            <span>{message}</span>
          </section>
        </section>
      </section>
    </>
  );
}
