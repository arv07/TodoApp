import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { TaskList } from "./components/TaskList"
import { useState } from "react"

function App() {

  const [groupTask, setGroupTask] = useState([])
  const [taskSelected, setTaskSelected] = useState({})

  //console.log(groupTask);
  //  let r = Math.random().toString(20).substring(2);
  //console.log("random", r);
  

  return (
    <>
      <div className="flex items-center flex-col h-screen bg-slate-200">
        <Header/>
        <Form 
          setGroupTask={setGroupTask}
          groupTask={groupTask}
          taskSelected={taskSelected}
          setTaskSelected={setTaskSelected}
        />
        <TaskList
          groupTask={groupTask}
          taskSelected={taskSelected}
          setTaskSelected={setTaskSelected}
        />
      </div>
      
    </>
  )
}

export default App
