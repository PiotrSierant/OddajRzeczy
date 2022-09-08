import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";
import styles from "./Navbar.module.scss";
export function Navbar() {
  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  const menuList = MenuList.map(({ url, title, id }) => {
    return (
      <NavLink key={id} to={url} onClick={handleClickMenu}>
        <li>{title}</li>
      </NavLink>
    );
  });

  return (
    <nav>
      <div className={styles.menu_icon} onClick={handleClickMenu}>
        {isOpen ? (
          <FontAwesomeIcon icon={faClose} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>

      <ul className={isOpen ? `${styles.menu}` : `${styles.close}`}>
        <section className={styles.link_Container}>
          <Link to="/about">Zaloguj</Link>
          <Link to="/about" className={styles.create_account}>
            Załóż konto
          </Link>
        </section>
        <section className={styles.menu_list}>{menuList}</section>
      </ul>
    </nav>
  );
}
