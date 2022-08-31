import React from 'react'

export const Form = () => {
  return (
    <div className='container mx-auto flex justify-center mt-10'>
        <form className='bg-slate-50 shadow-md rounded-2xl py-10 px-5 w-2/4 max-w-lg' action="">
            <label className='block font-bold'>Titulo</label>
            <input type="text" className='w-full p-2 rounded-md border-2 mt-2' placeholder='nombre'/>
            <label className='block font-bold'>Fecha</label>
            <input type="date" className='w-full p-2 rounded-md border-2 mt-2' placeholder='nombre'/>
            <label className='block font-bold mt-2'>Descripción</label>
            <textarea name="" id="" cols="" rows="5" className='w-full border-2'></textarea>
            <input type="submit" value="Enviar" className='bg-slate-800 w-full p-3 mt-3 rounded-md text-white'/>

        </form>
    </div>
  )
}
