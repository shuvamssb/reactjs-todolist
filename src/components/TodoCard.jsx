import React from 'react'

export default function TodoCard(props) { //(props /property) of the comoponent todos
    const {children,handleDeleteTodo, index, handleEditTodo } = props 
  return (
    <li className='todoItem ' >
        {children} {/* getting all the todos */}
        <div className="actionsContainer">
             <button onClick={()=>{
                    handleEditTodo(index)
             }}>
                    <i class="fa-solid fa-pen-to-square"></i>
            </button>
                    
            <button onClick={() => {
                handleDeleteTodo(index)
            }}>
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    </li> 
  // here todo  and todoindex is iterated once for each todos and key is used to get the unique of the parent element
  )
}
