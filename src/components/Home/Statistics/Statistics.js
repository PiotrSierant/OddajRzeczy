import React from "react";
import { Column } from "./Column";
import styles from "./Statistics.module.scss";

export function Statistics() {
  return (
    <div className={styles.container}>
      <section className={styles.statisticsContainer}>
        <Column
          number={10}
          title="ODDANYCH WORKÓW"
          lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores itaque omnis porro quaerat quas quia quidem, recusandae rerum voluptate.
                "
        />
        <Column
          number={5}
          title="WSPARTYCH ORGANIZACJI"
          lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores itaque omnis porro quaerat quas quia quidem, recusandae rerum voluptate.
                "
        />
        <Column
          number={7}
          title="ZORGANIZOWANY ZBIÓREK"
          lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores itaque omnis porro quaerat quas quia quidem, recusandae rerum voluptate.
                "
        />
      </section>
    </div>
  );
}
