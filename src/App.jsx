import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { TaskList } from "./components/TaskList"

function App() {


  return (
    <>
      <div className="flex items-center flex-col h-screen bg-slate-200">
        <Header/>
        <Form/>
        <TaskList/>
      </div>
      
    </>
  )
}

export default App
