// import React from 'react'Starttexttextg

// im[o]l%ХЪ

import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";

import "./styles.css";

const MAX_COUNT = "maxCount";

const DIFF_PER_DAY = "diffPerDay";

const getDays = (maxDay, diffPerDay) => {
    if (isNaN(maxDay) || isNaN(diffPerDay) || maxDay <= 0 || diffPerDay <= 0) {
        return "_";
    }
    return Math.ceil(maxDay / diffPerDay);
};

const Start = () => {
  const [initialMaxDay, setInitialMaxDay] = useState("");
  const [initialDiffPerDay, setInitialDiffPerDay] = useState("");

  const [, setMaxDay] = useLocalStorage(MAX_COUNT, 0);
  const [, setDiffPerDay] = useLocalStorage(DIFF_PER_DAY, 0);

  const onSubmit = (e) => {
    e.preventDefault();
    setMaxDay(+initialMaxDay);
    setDiffPerDay(+initialDiffPerDay);
  };

  return (
    <div className="start-wrapper">
      <div className="start-content">
        <h1 className="start-title">Siggings</h1>
        <form action="" className="start-form" onSubmit={onSubmit}>
          <input
            type="number"
            className="start-input"
            placeholder="I start with_puffs"
            required
            min={1}
            value={initialMaxDay}
            onChange={(e) => setInitialMaxDay(e.target.value)}
          />
          <br />
          {/* </> 00*/}
          <input
            type="number"
            className="start-input start-input--last"
            placeholder="smoke less by_each day"
            required
            min={1}
            value={initialDiffPerDay}
            onChange={(e) => setInitialDiffPerDay(e.target.value)}
          />
          <p className="start-text">{`and in ${getDays(+initialMaxDay, +initialDiffPerDay)} days i'm clean!`}</p>
          <button className="start-submit-btn" type="submit">Start</button>
        </form>
      </div>
    </div>
  );
};

export default Start;
