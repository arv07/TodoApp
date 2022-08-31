import React from 'react'

export const TaskList = ({groupTask, setTaskSelected, taskSelected}) => {

  //console.log(groupTask.length);
  //console.log(groupTask);

  const editTask = (idTask) => {
    //console.log('Tarea a editar es: ', idTask);
    setTaskSelected(idTask.tasks);
  }

  console.log(groupTask);

  const deleteTask = (idTask) => {
    console.log('Tarea a eliminar es: ', idTask);
  }

  return (
    <>
      <h1 className='text-2xl mt-5'>Sin tareas pendiente</h1>
      {groupTask.length != 0 ?

          groupTask.map((tasks, index) => {
            return(
              <div key={tasks.id} className='flex flex-col justify-items-start rounded-md py-10 px-5 bg-slate-50 mt-10 w-96'>     
                <p>Titulo: <span>{tasks.title}</span></p>
                <p>Fecha: <span>{tasks.date}</span></p>
                <p>Descripción: <span>{tasks.description}</span></p>
                <div className='flex flex-row'>
                  <button onClick={() => deleteTask(tasks.id)} className='bg-red-600 m-2 w-full p-2 mt-3 rounded-md text-white'>ELIMINAR</button>
                  <button onClick={() => editTask({tasks})} className='bg-blue-500 m-2 w-full p-2 mt-3 rounded-md text-white'>EDITAR</button>
                </div>
              </div>
            )
          })
          
        
        : ''
      }
      
    </>
    
  )
}
