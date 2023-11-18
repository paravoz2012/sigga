import { useEffect, useCallback } from "react";
import { useLocalStorage } from "usehooks-ts";

import { normalize } from "../../utils/normalize";
import Circle from "../circle";
import { toNumber } from "../../utils/toNumber";

const COUNT = "count";
const DEFAULT_COUNT = 0;

const MAX_COUNT = "maxCount";
const DEFAULT_MAX_COUNT = 600;

const DEFAULT_DAY_DIFF = 30;

const LAST_UPDATE = "lastUpdate";

const DAY = "day";
const DEFAULT_DAY = 1;

const CIRCLE_COLOR = "circleColor";
const DEFAULT_CIRCLE_COLOR = "#514690";

const MS_IN_DAY = 86400000;

const useCheckDay = () => {
  const [lastUpdate, setLastUpdate] = useLocalStorage(LAST_UPDATE, null).map(
    toNumber
  );
  const [maxCount, setMaxCount] = useLocalStorage(
    MAX_COUNT,
    DEFAULT_MAX_COUNT
  ).map(toNumber);
  const [count, setCount] = useLocalStorage(COUNT, DEFAULT_COUNT).map(toNumber);
  const [day, setDay] = useLocalStorage(DAY, DEFAULT_DAY).map(toNumber);
  const checkDay = useCallback(() => {
    if (!lastUpdate) {
      setLastUpdate(+Date.now());
      return;
    }

    const now = +Date.now();
    console.log(now, lastUpdate);
    if (Math.floor(now / MS_IN_DAY) === Math.floor(lastUpdate / MS_IN_DAY)) {
      return;
    }

    let newMaxCount = maxCount - DEFAULT_DAY_DIFF;
    if (newMaxCount < 0) {
      newMaxCount = 0;
    }

    setLastUpdate(now);
    setMaxCount(newMaxCount);
    setCount(0);
    setDay((day) => day + 1);
  }, [lastUpdate, maxCount]);

  useEffect(() => {
    checkDay();
    const intervalId = setInterval(() => {
      checkDay();
    }, 10000);
    return () => clearInterval(intervalId);
  }, [checkDay]);
};

const Counter = () => {
  const [count, setCount] = useLocalStorage(COUNT, DEFAULT_COUNT).map(toNumber);
  const [maxCount] = useLocalStorage(MAX_COUNT, DEFAULT_MAX_COUNT).map(
    toNumber
  );
  const [day] = useLocalStorage(DAY, DEFAULT_DAY).map(toNumber);
  const [circleColor] = useLocalStorage(CIRCLE_COLOR, DEFAULT_CIRCLE_COLOR);

  useCheckDay();

  const onCircleClick = () => {
    setCount((count) => {
      count = +count;
      let newCount = count + 1;
      if (newCount > maxCount) {
        newCount = maxCount;
      }
      return newCount;
    });
  };

  console.log(count);
  return (
    <>
      <div className="info">
        <span className="day">Day {day}</span>
        <br />
        <span className="count">{count}</span>
      </div>
      {/* <input
        min={0}
        max={maxCount}
        type="range"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      /> */}
      <Circle
        color={circleColor}
        deg={normalize(count, 0, maxCount, 0, 360)}
        onClick={onCircleClick}
      />
    </>
  );
};

export default Counter;
