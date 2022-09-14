import React from "react";
import { DetailsDescription } from "./DetailsDescription";
import { Pagination } from "./Pagination";
import data from "./db/organizationData.json";
import styles from "./detailsContainer.module.scss";

export function OrganizationDetails() {
  return (
    <section className={styles.detailsContainer}>
      <DetailsDescription
        text="W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
              współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
              potrzebują. lorem"
      />
      <Pagination data={data} />
    </section>
  );
}
