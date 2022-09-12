import React from "react";
import styles from "./Navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";

export function Menu({ isOpen, handleClickMenu }) {
  const menuList = MenuList.map(({ url, title, id }) => {
    return (
      <NavLink key={id} to={url} onClick={handleClickMenu}>
        <li>{title}</li>
      </NavLink>
    );
  });
  return (
    <ul className={isOpen ? `${styles.menu}` : `${styles.close}`}>
      <section className={styles.link_Container}>
        <Link to="/logowanie">Zaloguj</Link>
        <Link to="/rejestracja" className={styles.create_account}>
          Załóż konto
        </Link>
      </section>
      <section className={styles.menu_list}>{menuList}</section>
    </ul>
  );
}
