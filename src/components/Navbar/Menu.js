import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom";
import { MenuList } from "./MenuList";

export function Menu({ isOpen, handleClickMenu, isLogged, setIsLogged }) {
  let location = useLocation();
  const menuList = MenuList.map(({ title, id, scroll }) => {
    return (
      <ScrollLink key={id} to={scroll} onClick={handleClickMenu}>
        <li>{title}</li>
      </ScrollLink>
    );
  });
  const menuListLogin = MenuList.map(({ url, title, id }) => {
    return (
      <Link key={id} to={url} onClick={handleClickMenu}>
        <li>{title}</li>
      </Link>
    );
  });

  return (
    <ul className={isOpen ? `${styles.menu}` : `${styles.close}`}>
      <section className={styles.link_Container}>
        {isLogged ? (
          <section className={styles.isLogged}>
            <span>Cześć {isLogged.email}</span>
            <Link to="/oddaj-rzeczy" className={styles.oddajRzeczyButton}>
              Oddaj rzeczy
            </Link>
            <Link
              to="/wylogowano"
              onClick={() => {
                setIsLogged(null);
              }}
            >
              Wyloguj
            </Link>
          </section>
        ) : (
          <>
            <Link to="/logowanie">Zaloguj</Link>
            <Link to="/rejestracja" className={styles.create_account}>
              Załóż konto
            </Link>
          </>
        )}
      </section>
      {location.pathname === "/logowanie" && (
        <section className={styles.menu_list}>{menuListLogin}</section>
      )}
      {location.pathname === "/rejestracja" && (
        <section className={styles.menu_list}>{menuListLogin}</section>
      )}
      {location.pathname === "/wylogowano" && (
        <section className={styles.menu_list}>{menuListLogin}</section>
      )}
      {location.pathname === "/" && (
        <section className={styles.menu_list}>{menuList}</section>
      )}
      {location.pathname === "/Home" && (
        <section className={styles.menu_list}>{menuList}</section>
      )}
      {location.pathname === "/OddajRzeczy" && (
        <section className={styles.menu_list}>{menuList}</section>
      )}
      {location.pathname === "/OddajRzeczy/" && (
        <section className={styles.menu_list}>{menuList}</section>
      )}
      {location.pathname === "/oddaj-rzeczy" && (
        <section className={styles.menu_list}>{menuListLogin}</section>
      )}
      {location.pathname === "/oddaj-rzeczy/" && (
        <section className={styles.menu_list}>{menuListLogin}</section>
      )}
    </ul>
  );
}
