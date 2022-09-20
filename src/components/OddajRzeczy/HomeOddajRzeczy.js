import React from "react";
import styles from "./HomeOddajRzeczy.module.scss";
import { Navbar } from "../Navbar/Navbar";
import { HeaderOddajRzeczy } from "./HeaderOddajRzeczy";
import { Contact } from "../Contact/Contact";

export function HomeOddajRzeczy({ isLogged }) {
  return (
    <div className={styles.containerOddajRzeczy}>
      <Navbar isLogged={isLogged} />
      <HeaderOddajRzeczy />

      <Contact />
    </div>
  );
}
