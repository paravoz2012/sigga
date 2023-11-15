import Color from "../color";
import "./styles.css";

const DIFF = 19;

const Circle = ({ deg, color = "#514690", onClick }) => {
  console.log(`linear-gradient(180deg, #d9d9d9, 0%, ${color}, 100%)`);
  return (
    <div
      className="circle1"
      style={{
        boxShadow: `0px 0px 10px 5px ${color}`,
        background: `conic-gradient(from 180deg, #1C1D29, ${
          deg - DIFF
        }deg, #1C1D29, ${deg}deg, ${color}, ${
          deg === 360 ? 360 : deg + DIFF
        }deg, ${color})`,
      }}
      onClick={onClick}
    >
      <div
        className="circle3"
        style={{
          background:
            deg === 360
              ? "transparent"
              : `linear-gradient(#ffffff 40%, ${color})`,
        }}
      ></div>
    </div>
  );
};
// +++
export default Circle;
