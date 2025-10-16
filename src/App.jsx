import Taskform from "./Componenets/Taskform"
import TaskList from "./Componenets/TaskList"
import Progresstracker from "./Componenets/Progresstracker"
import { useEffect, useState } from "react"



export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem
    ("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  return(
    <div>
      <h1>TodoVerse</h1>
      <p>Our Friendly TaskManager</p>
      <Taskform addTask = {addTask} />
      <TaskList />
      <Progresstracker />
      <button>Clear all tasks</button>
    </div>
  )
}