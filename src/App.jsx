import Taskform from "./Componenets/Taskform"
import TaskList from "./Componenets/TaskList"
import Progresstracker from "./Componenets/Progresstracker"
import { useEffect, useState } from "react"
import "./Style.css";


export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem
    ("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
     const newtask = [...tasks];
     newtask[index] = updatedTask;
     setTasks(newtask);
  }

  const deleteTask = (index) => {
       setTasks(tasks.filter((_, i) => i != index))
  }
   
  const clearTasks = () => {
    setTasks([]);
  }


  return(
    <div className="App">
      <header>
      <h1 className="title">TodoVerse</h1>
      <p className="tagline">Our Friendly TaskManager</p>
      </header>
      <Taskform addTask = {addTask} />
      <TaskList tasks = {tasks}
      updateTask = {updateTask} 
      deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks}/>

      {tasks.length > 0 && 
      (<button className="clear-btn" onClick={clearTasks}>Clear all tasks</button>)}
      
    </div>
  )
}