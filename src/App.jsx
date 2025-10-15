import Taskform from "./Componenets/Taskform"
import TaskList from "./Componenets/TaskList"
import Progresstracker from "./Componenets/Progresstracker"


export default function App() {
  return(
    <div>
      <h1>TodoVerse</h1>
      <p>Our Friendly TaskManager</p>
      <Taskform />
      <TaskList />
      <Progresstracker />
      <button>Clear all tasks</button>
    </div>
  )
}