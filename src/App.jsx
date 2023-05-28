import "./App.css";
import { UserCard } from "./components/UserCard";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleSetIncreaseCount = () => {
    setCount(count + 1);
  };
  const handleSetDecreaseCount = () => {
    setCount(count - 1);
  };
  const handleSetToZero = () => {
    setCount(0);
  };

  return (
    <div className="py-50px">
      <div className="container">
        <h1 className="text-center">Counter</h1>
        <div>Count: {count}</div>
        <button onClick={handleSetIncreaseCount}>Increase</button>
        <button onClick={handleSetDecreaseCount}>Decrease</button>
        <button onClick={handleSetToZero}>Set to Zero</button>
      </div>
    </div>
  );
}

export default App;
