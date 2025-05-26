import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "red" }}>hi</div>
        <div style={{ backgroundColor: "green" }}>how</div>
        <div style={{ backgroundColor: "yellow" }}>are you</div>
      </div>
    </>
  );
}

export default App;
 