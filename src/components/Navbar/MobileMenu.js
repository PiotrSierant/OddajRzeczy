import React from "react";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

export function MobileMenu({ isOpen, handleClickMenu }) {
  return (
    <div className={styles.menu_icon} onClick={handleClickMenu}>
      {isOpen ? (
        <FontAwesomeIcon icon={faClose} />
      ) : (
        <FontAwesomeIcon icon={faBars} />
      )}
    </div>
  );
}
