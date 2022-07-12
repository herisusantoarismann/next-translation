import React from "react";
import styles from "../../styles/content.module.css";
import { language } from "../../utils/language";

type Select = {
  data: language;
  name: string;
  value: string;
  onChange: (args0: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ data, name, value, onChange }: Select) => {
  return (
    <select
      name={name}
      className={styles.select}
      onChange={(e) => onChange(e)}
      value={value}
    >
      {Object.keys(data).map((language, i: number) => {
        return (
          <option value={language} key={i}>
            {data[language]}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
