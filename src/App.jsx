import { useEffect } from "react";
import "./App.css";
import Counter from "./components/counter";
// 30MAX_COUNT600c600cmaxCountf


function App() {
  // useEffect(() => {
  //   if (!localStorage.getItem("lastUpdate")) {
  //     localStorage.setItem("lastUpdate", Date.now());
  //   }
  // }, []);
  return (
    <>
      <div className="app-wrapper">
        <div className="content">
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
// 228322deg
