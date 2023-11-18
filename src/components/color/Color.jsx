import React from "react";

const Color = ({ color, onChange, reset, name, label }) => {
  // const [color, setColor] = useLocalStorage(COLOR, DEFAULT_COLOR);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="color"
        value={color}
        onChange={onChange}
      />
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Color;
