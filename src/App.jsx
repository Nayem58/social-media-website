import "./App.css";
import { UserCard } from "./components/UserCard";
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(true);

  const handleSetShowText = () => {
    setShowText(!showText);
  };

  return (
    <div className="py-50px text-center">
      <div className="container">
        <h1>Show/Hide Text</h1>
        <button onClick={handleSetShowText}>Show/Hide</button>
        {showText && <p>Displayed</p>}
      </div>
    </div>
  );
}

export default App;
