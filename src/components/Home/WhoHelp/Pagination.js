import React, { useState } from "react";
import styles from "./Pagination.module.scss";

export function Pagination({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [namesPerPage, setNamesPerPage] = useState(3);

  function handleClick(event, i) {
    setCurrentPage(i);
  }
  const indexOfLast = currentPage * namesPerPage;
  const indexOfFirst = indexOfLast - namesPerPage;
  const currentData = data.slice(indexOfFirst, indexOfLast);

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(data.length / namesPerPage); i++) {
    const element = (
      <li
        key={i}
        onClick={(event) => handleClick(event, i)}
        className={currentPage === i ? styles.active : null}
      >
        {i}
      </li>
    );
    pageNumber.push(element);
  }

  const elements = currentData.map((element) => {
    const tag = element.tags.join(", ");
    return (
      <section key={element.id} className={styles.paginationElementContainer}>
        <section className={styles.desc}>
          <h3>{element.name}</h3>
          <p>{element.description}</p>
        </section>
        <p className={styles.tags}>{tag}</p>
      </section>
    );
  });

  return (
    <section className={styles.paginationContainer}>
      {elements}
      <ul className={styles.pageNumber}>{pageNumber}</ul>
    </section>
  );
}
