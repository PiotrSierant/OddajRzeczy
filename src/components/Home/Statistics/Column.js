import React from "react";
import styles from "./Column.module.scss";
import CountUp from "react-countup";

export function Column({ number, title, lorem }) {
  return (
    <section className={styles.card}>
      <CountUp end={number} />
      <h3>{title}</h3>
      <p>{lorem}</p>
    </section>
  );
}
