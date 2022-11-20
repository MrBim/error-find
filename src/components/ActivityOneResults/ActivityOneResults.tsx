import React from "react";
import { Link } from "react-router-dom";
import styles from "./ActivityOneResults.module.css";

type Props = {
  results: string[];
};

const ActivityOneResults = ({ results }: Props) => {
  return (
    <div className={styles.main}>
      <h1>Activity One</h1>
      <h2>Results</h2>
      {results.map((it, i) => (
        <div className={styles.result}>
          <span>{`Q${i + 1}`}</span>
          <span>{it}</span>
        </div>
      ))}
      <Link className={styles.homeLink} to="/">
        home
      </Link>
    </div>
  );
};

export default ActivityOneResults;
