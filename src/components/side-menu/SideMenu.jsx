import {useRef} from "react";
import cn from "classnames";
import { useLocalStorage, useOnClickOutside } from "usehooks-ts";

import Color from "../color";

import "./styles.css";

const CIRCLE_COLOR = "circleColor";
const DEFAULT_CIRCLE_COLOR = "#514690";

const BG_COLOR = "bgColor";
const DEFAULT_BG_COLOR = "#151327";

const SideMenu = ({ isOpen, closeMenu }) => {
  const [circleColor, setCircleColor] = useLocalStorage(
    CIRCLE_COLOR,
    DEFAULT_CIRCLE_COLOR
  );

  const [bgColor, setBgColor] = useLocalStorage(BG_COLOR, DEFAULT_BG_COLOR);

  const asideRef = useRef(null);

  useOnClickOutside(asideRef, closeMenu);

  return (
    <aside className={cn("side-menu", { "side-menu--open": isOpen })} ref={asideRef}>
      SideMenu
      <Color
        color={circleColor}
        onChange={(e) => setCircleColor(e.target.value)}
        reset={() => setCircleColor(DEFAULT_CIRCLE_COLOR)}
        name="circleColor"
        label="circle color"
      />
      <Color
        color={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
        reset={() => setBgColor(DEFAULT_BG_COLOR)}
        name="bgColor"
        label="bg color"
      />
    </aside>
  );
};

export default SideMenu;
