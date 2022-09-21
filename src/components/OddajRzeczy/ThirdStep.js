import React from "react";
import styles from "./ThirdStep.module.scss";

export function ThirdStep({
  step,
  handleChange,
  localization,
  whoWeHelp,
  nameOrganization,
}) {
  return (
    <>
      <p className={styles.formStep}>Krok {step}/4</p>
      <h3 className={styles.formTitle}>Lokalizacja:</h3>
      <select
        onChange={handleChange("localization")}
        className={styles.localizationSelect}
      >
        <option selected={localization === null} disabled={true}>
          -- Wybierz --
        </option>
        <option selected={localization === "Poznań"} value="Poznań">
          Poznań
        </option>
        <option selected={localization === "Warszawa"} value="Warszawa">
          Warszawa
        </option>
        <option selected={localization === "Kraków"} value="Kraków">
          Kraków
        </option>
        <option selected={localization === "Wrocław"} value="Wrocław">
          Wrocław
        </option>
        <option selected={localization === "Katowice"} value="Katowice">
          Katowice
        </option>
      </select>
      <section className={styles.checkboxSection}>
        <h3>Komu chcesz pomóc?</h3>
        <section className={styles.checkboxes}>
          <label className={styles.checkbox}>
            <input
              type="radio"
              name="whoWeHelp"
              value="dzieciom"
              checked={whoWeHelp === "dzieciom"}
              onChange={handleChange("whoWeHelp")}
            />
            <span>dzieciom</span>
          </label>
          <label className={styles.checkbox}>
            <input
              type="radio"
              name="whoWeHelp"
              value="samotnym matkom"
              checked={whoWeHelp === "samotnym matkom"}
              onChange={handleChange("whoWeHelp")}
            />
            <span>samotnym matkom</span>
          </label>
          <label className={styles.checkbox}>
            <input
              type="radio"
              name="whoWeHelp"
              value="bezdomnym"
              checked={whoWeHelp === "bezdomnym"}
              onChange={handleChange("whoWeHelp")}
            />
            <span>bezdomnym</span>
          </label>
          <label className={styles.checkbox}>
            <input
              type="radio"
              name="whoWeHelp"
              value="niepełnosprawnym"
              checked={whoWeHelp === "niepełnosprawnym"}
              onChange={handleChange("whoWeHelp")}
            />
            <span>niepełnosprawnym</span>
          </label>
          <label className={styles.checkbox}>
            <input
              type="radio"
              name="whoWeHelp"
              value="osobom starszym"
              checked={whoWeHelp === "osobom starszym"}
              onChange={handleChange("whoWeHelp")}
            />
            <span>osobom starszym</span>
          </label>
        </section>
      </section>
      <h3 className={styles.nameOrganizationTitle}>
        Wpisz nazwę konkretnej organizacji (opcjonalnie)
      </h3>
      <input
        type="text"
        name="nameOrganization"
        id="nameOrganization"
        value={nameOrganization}
        onChange={handleChange("nameOrganization")}
        className={styles.nameOrganization}
      />
    </>
  );
}
