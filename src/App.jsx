import "./App.css";
import { UserCard } from "./components/UserCard";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSetNewTask = (e) => {
    setNewTask(e.target.value);
  };

  const handleSetTasks = () => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="py-50px text-center">
      <div className="container">
        <div className="todoCard">
          <h1>To-Do List</h1>
          <div className="mt-10px">
            <input type="text" onChange={handleSetNewTask} />
            <button onClick={handleSetTasks}>Add</button>
          </div>
          <ul className="mt-10px">
            {tasks.map((task, key) => {
              return (
                <li key={key}>
                  {key +
                    1 +
                    ". " +
                    task.replace(/\w\S*/g, function (txt) {
                      return (
                        txt.charAt(0).toUpperCase() +
                        txt.substr(1).toLowerCase()
                      );
                    })}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
