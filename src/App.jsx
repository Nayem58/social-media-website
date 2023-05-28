import "./App.css";
import { UserCard } from "./components/UserCard";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [text, setText] = useState("Black");

  return (
    <div className="py-50px text-center">
      <div className="container">
        <h1>Text Color Change</h1>
        <p style={{ color: color }}>{text}</p>
        <button
          onClick={() => {
            setColor(color === "slateblue" ? "black" : "slateblue");
            setText(color === "slateblue" ? "Black" : "Slate Blue");
          }}
        >
          Change Color
        </button>
      </div>
    </div>
  );
}

export default App;
