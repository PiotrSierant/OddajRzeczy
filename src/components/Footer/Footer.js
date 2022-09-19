import React from "react";
import styles from "./Footer.module.scss";
import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";

export function Footer() {
  return (
    <div className={styles.container} name="kontakt">
      <section className={styles.FooterContainer}>
        <p>Copyright by Coders Lab</p>
        <section className={styles.media}>
          <img src={facebook} alt="icon facebook" />
          <img src={instagram} alt="icon instagram" />
        </section>
      </section>
    </div>
  );
}
