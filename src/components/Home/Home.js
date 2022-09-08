import React from "react";
import styles from "./Home.module.scss";
import { Navbar } from "../Navbar/Navbar";
export function Home() {
  return (
    <header>
      <Navbar />
      <div className={styles.hero} />
    </header>
  );
}
