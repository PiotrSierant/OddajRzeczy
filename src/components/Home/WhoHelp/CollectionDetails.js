import React from "react";
import { DetailsDescription } from "./DetailsDescription";
import { Pagination } from "./Pagination";
import data from "./db/collectionData.json";
import styles from "./detailsContainer.module.scss";

export function CollectionDetails() {
  return (
    <section className={styles.detailsContainer}>
      <DetailsDescription
        text="W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
              współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
              potrzebują. lorem lorem"
      />
      <Pagination data={data} />
    </section>
  );
}
