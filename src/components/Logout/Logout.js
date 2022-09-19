import React from "react";
import styles from "./Logout.module.scss";
import { Navbar } from "../Navbar/Navbar";
import image from "../../assets/Decoration.svg";
import { Link } from "react-router-dom";

export function Logout() {
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
        <section className={styles.logoutContainer}>
          <h1>Wylogowanie nastąpiło pomyślnie!</h1>
          <img src={image} alt="decoration" />
          <Link to={"/Home"} className={styles.startButton}>
            Strona Główna
          </Link>
        </section>
      </header>
    </div>
  );
}
