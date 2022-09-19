import React, { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "./Menu";
import styles from "./Navbar.module.scss";

export function Navbar({ isLogged, setIsLogged }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <nav>
        <MobileMenu isOpen={isOpen} handleClickMenu={handleClickMenu} />
        <Menu
          isOpen={isOpen}
          handleClickMenu={handleClickMenu}
          isLogged={isLogged}
          setIsLogged={setIsLogged}
        />
      </nav>
    </div>
  );
}
