import { useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import Header from "./components/header";
import SideMenu from "./components/side-menu";
import { useLocalStorage } from "usehooks-ts";
// 30MAX_COUNT600c600cmaxCountf

const BG_COLOR = "bgColor";
const DEFAULT_BG_COLOR = "#151327";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [bgColor] = useLocalStorage(BG_COLOR, DEFAULT_BG_COLOR);

  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => !isOpen);
    // console.log(isMenuOpen);
  };
  // useEffect(() => {
  //   if (!localStorage.getItem("lastUpdate")) {
  //     localStorage.setItem("lastUpdate", Date.now());
  //   }
  // }, []);
  return (
    <>
      <Header isMenuOpen={isMenuOpen} onMobileBtnClick={toggleMenu} />
      <div className="app-wrapper" style={{ backgroundColor: bgColor }}>
        <div className="content">
          <Counter />
        </div>
      </div>
      <SideMenu isOpen={isMenuOpen} />
    </>
  );
}

export default App;
// 228322deg
