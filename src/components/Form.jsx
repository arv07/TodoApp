import React from 'react'
import { useState, useEffect } from 'react'

export const Form = ({groupTask, setGroupTask, taskSelected, setTaskSelected}) => {

  
  
  const [taskInfo, setTaskInfo] = useState({
    'id':'',
    'title':'',
    'date':'',
    'description':''
  })

  const [isError, setIsError] = useState(false);

  const [editingTask, setEditingTask] = useState(false);

  useEffect(() => {
    
    if(Object.keys(taskSelected).length > 0)
    {
      setTaskInfo({
        'id':taskSelected.id,
        'title':taskSelected.title,
        'date':taskSelected.date,
        'description':taskSelected.description        
      })
      setEditingTask(true);
    }
    else{
      
     
    }
  
  }, [taskSelected])
  

  const createHash = () => {
    let hashKey = Math.random().toString(20).substring(2);
    return hashKey;
  }


  const handleOnChange = (event) => {
    //console.log(taskInfo);
    setTaskInfo({
      ...taskInfo,
      [event.target.name] : event.target.value,
      'id':createHash()        
    })
  }

  const saveTask = (event) => {
    event.preventDefault();
    console.log('boton save');
    if([taskInfo.title, taskInfo.date, taskInfo.description].includes(''))
    {
        //console.log('Error -');
        setIsError(true);
    }
    else{

      if(editingTask)
      {
        const updateTask = groupTask.map((task) =>{
          if(task.id === taskSelected.id)
          {
            task.title = taskInfo.title
          }
          return task
          
        })
        console.log(updateTask);
        //console.log(updateTask);
        //setTaskInfo(updateTask);
        setGroupTask(updateTask);
        //console.log(taskInfo);
        //console.log(groupTask);
        //setTaskSelected({});*/
      }
      else{

        //console.log('Datos OKI');
        setIsError(false);
        //setGroupTask(taskInfo);
        setGroupTask([...groupTask,taskInfo]);
        
        setTaskInfo({
          'id':'',
          'title':'',
          'date':'',
          'description':''
        })

      }

      
    }
  }


  return (

    <div className='container mx-auto flex justify-center mt-10'>
        <form onSubmit={saveTask} className='bg-slate-50 shadow-md rounded-2xl py-10 px-5 w-2/4 max-w-lg' action="">
            <label className='block font-bold'>Titulo</label>
            <input 
              type="text"
              name="title" 
              className='w-full p-2 rounded-md border-2 mt-2' 
              placeholder='nombre'
              value={taskInfo.title}
              onChange={handleOnChange}
            />
            <label className='block font-bold'>Fecha</label>
            <input 
              type="date" 
              name="date" 
              className='w-full p-2 rounded-md border-2 mt-2' 
              placeholder='nombre'
              value={taskInfo.date}
              onChange={handleOnChange}
            />
            <label className='block font-bold mt-2'>Descripción</label>
            <textarea 
              name="description" 
              id="" 
              cols=""
              rows="5" 
              value={taskInfo.description}
              onChange={handleOnChange}
              className='w-full border-2'
            />
                
            {isError ? <h1 className='bg-red-600 rounded-md p-3 text-center font-bold text-white '>Error: No pueden haber campos vacios</h1> : '' }
            

            {editingTask ? 
              <input type="submit" value="Actualizar" className='bg-sky-600 w-full p-3 mt-3 rounded-md text-white'/>
              :
              <input type="submit" value="Enviar" className='bg-slate-800 w-full p-3 mt-3 rounded-md text-white'/> 
            }
            
            

        </form>
    </div>
  )
}
