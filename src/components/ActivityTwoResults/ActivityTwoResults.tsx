import React from "react";
import { Link } from "react-router-dom";
import styles from "./ActivityTwoResults.module.css";

type Props = {
  results: string[][];
};

const ActivityTwoResults = ({ results }: Props) => {
  return (
    <div className={styles.main}>
      <h1>Activity Two</h1>
      <h2>Results</h2>
      {results.map((round, i) => (
        <div>
          <div className={styles.roundTitle}>round {i + 1}</div>
          {round.map((it, i) => (
            <div className={styles.result}>
              <span>{`Q${i + 1}`}</span> <span> {it}</span>
            </div>
          ))}
        </div>
      ))}
      <Link className={styles.homeLink} to="/">
        home
      </Link>
    </div>
  );
};

export default ActivityTwoResults;
