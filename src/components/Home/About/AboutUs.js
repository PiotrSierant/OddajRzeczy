import React from "react";
import image from "../../../assets/Decoration.svg";
import signature from "../../../assets/Signature.svg";
import styles from "./About.module.scss";

export function AboutUs() {
  return (
    <section className={styles.AboutUs}>
      <h3>O nas</h3>
      <img src={image} alt="decoration" />
      <p>
        Nori grape silver beet broccoli kombu beet greens fava bean potato
        quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
        turnip greens parsnip.
      </p>
      <img src={signature} alt="signature" className={styles.signature} />
    </section>
  );
}
