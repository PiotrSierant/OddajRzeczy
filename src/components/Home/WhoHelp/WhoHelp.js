import React, { useState } from "react";
import styles from "./WhoHelp.module.scss";
import { WhoHelpTitle } from "./WhoHelpTitle";
import { WhoHelpButton } from "./WhoHelpButton";
import { FoundationDetails } from "./FoundationDetails";
import { OrganizationDetails } from "./OrganizationDetails";
import { CollectionDetails } from "./CollectionDetails";
export function WhoHelp() {
  const [display, setDisplay] = useState(1);

  function displayFoundation(number) {
    setDisplay(number);
  }

  return (
    <div className={styles.container} name="fundacjaiorganizacje">
      <WhoHelpTitle />
      <section className={styles.ButtonSection}>
        <WhoHelpButton
          text={"Fundacjom"}
          onClick={() => displayFoundation(1)}
        />
        <WhoHelpButton
          text={"Organizacjom pozarządowym"}
          onClick={() => displayFoundation(2)}
        />
        <WhoHelpButton
          text={"Lokalnym zbiórkom"}
          onClick={() => displayFoundation(3)}
        />
      </section>
      <section className={styles.description}>
        {display === 1 && <FoundationDetails />}
        {display === 2 && <OrganizationDetails />}
        {display === 3 && <CollectionDetails />}
      </section>
    </div>
  );
}
