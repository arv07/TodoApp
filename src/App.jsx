import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { TaskList } from "./components/TaskList"
import { useState, useEffect } from "react"

function App() {

  const [groupTask, setGroupTask] = useState([])
  const [taskSelected, setTaskSelected] = useState({})
  

  useEffect(() => {

    const getTaskLocalStorage = () => {
      const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks")) ?? [];
      setGroupTask(tasksLocalStorage);
      //console.log(groupTask);
      //console.log(tasksLocalStorage);
    }
    
    getTaskLocalStorage();
    
  
  },[])

  useEffect(() => {
    
    localStorage.setItem("tasks", JSON.stringify(groupTask));
 
  }, [groupTask])
  
  

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
            setGroupTask={setGroupTask}
          />

  
        
      </div>
      
    </>
  )
}

export default App
