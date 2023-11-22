import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import Header from "./components/header";
import SideMenu from "./components/side-menu";
import { useLocalStorage } from "usehooks-ts";
import Start from "./components/start";
// 30MAX_COUNT600c600cmaxCountf

const BG_COLOR = "bgColor";
const DEFAULT_BG_COLOR = "#151327";

const MAX_COUNT = "maxCount";

const DIFF_PER_DAY = "diffPerDay";

function App() {
  const [isReady, setIsReady] = useState(() => {
    return (
      localStorage.getItem(MAX_COUNT) && localStorage.getItem(DIFF_PER_DAY)
    );
  });

  const [maxCount] = useLocalStorage(MAX_COUNT, 0);
  const [diffPerDay] = useLocalStorage(DIFF_PER_DAY, 0);

  useEffect(() => {
      setIsReady(maxCount && diffPerDay);
  }, [maxCount, diffPerDay]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [bgColor] = useLocalStorage(BG_COLOR, DEFAULT_BG_COLOR);

  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => !isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isReady ? (
        <>
          <Header isMenuOpen={isMenuOpen} onMobileBtnClick={toggleMenu} />
          <div className="app-wrapper" style={{ backgroundColor: bgColor }}>
            <div className="content">
              <Counter />
            </div>
          </div>
          <SideMenu isOpen={isMenuOpen} closeMenu={closeMenu} />{" "}
        </>
      ) : (
        <Start />
      )}
    </>
  );
}

export default App;
// 228322deg
