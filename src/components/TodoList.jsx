import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const {todos} = props 
  
  return (
    <ul className='main'>
      {todos.map((todo,todoIndex) =>{
        return (
           <TodoCard {...props} key={todoIndex} index={todoIndex}> {/* sent the props from one component to another like here the parent App.jsx to Todocard */} 
                <p>{todo}</p>  {/* render paragraph and send props to TodoCard */} 
           </TodoCard>
        )
        
      })}
    </ul>
  )
}
