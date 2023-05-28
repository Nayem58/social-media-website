import "./App.css";
import { UserCard } from "./components/UserCard";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleSetInputValue = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="py-50px">
      <div className="container">
        <h1 className="text-center">Input Name</h1>
        <input type="text" onChange={handleSetInputValue} />
        {inputValue}
      </div>
    </div>
  );
}

export default App;
