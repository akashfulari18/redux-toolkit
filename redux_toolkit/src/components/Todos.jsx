import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../store/features/todo/todoSlice'

function Todos() {

    const dispatch = useDispatch()
    const todos = useSelector(state=>state.todos)
    // console.log(todos)
  

  return (
    <>
    <div>Todos</div>
    {
        todos.map((todo)=>(
            <div  className='flex justify-between no-underline bg-gray-700 text-white p-2 w-[80vw]' key={todo.id}>
              <h5> {todo.text}</h5>
             <button className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md' onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>

            </div>
        ))
    }
    </>
  )
}

export default Todos