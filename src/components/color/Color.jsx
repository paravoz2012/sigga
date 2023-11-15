import React from "react";
import { useLocalStorage } from "usehooks-ts";

const COLOR = "color";
const DEFAULT_COLOR = "#514690";

const Color = () => {
  const [color, setColor] = useLocalStorage(COLOR, DEFAULT_COLOR);
  return (
    <>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="button" onClick={() => setColor(DEFAULT_COLOR)}>Reset</button>
    </>
  );
};

export default Color;
