import React, { useState } from "react";
import styles from "./WhoHelp.module.scss";
import { WhoHelpTitle } from "./WhoHelpTitle";
import { WhoHelpButton } from "./WhoHelpButton";
import { FoundationDetails } from "./FoundationDetails";
import { OrganizationDetails } from "./OrganizationDetails";
import { CollectionDetails } from "./CollectionDetails";
export function WhoHelp() {
  const [foundation, setFoundation] = useState(true);
  const [organization, setOrganization] = useState(false);
  const [collection, setCollection] = useState(false);

  function displayFoundation() {
    setFoundation(true);
    setOrganization(false);
    setCollection(false);
  }
  function displayOrganization() {
    setFoundation(false);
    setOrganization(true);
    setCollection(false);
  }
  function displayCollection() {
    setFoundation(false);
    setOrganization(false);
    setCollection(true);
  }

  return (
    <div className={styles.container}>
      <WhoHelpTitle />
      <section className={styles.ButtonSection}>
        <WhoHelpButton text={"Fundacjom"} onClick={displayFoundation} />
        <WhoHelpButton
          text={"Organizacjom pozarządowym"}
          onClick={displayOrganization}
        />
        <WhoHelpButton text={"Lokalnym zbiórkom"} onClick={displayCollection} />
      </section>
      <section className={styles.description}>
        {foundation && <FoundationDetails />}
        {organization && <OrganizationDetails />}
        {collection && <CollectionDetails />}
      </section>
    </div>
  );
}
