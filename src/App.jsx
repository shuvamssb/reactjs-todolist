import { useState,useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  
  /*let todos= [
    'Go to the gym',
    'Study',
    'Lunch',
    'Work'
  ]*/ // instaead of declaring an array we are gonna use state variable so that we can add  or  change the state of the variable
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] =useState('')


    function persistData(newList){
      localStorage.setItem('todos',JSON.stringify({todos:newList}))
    }

    function handleAddTodos(newTodo) {
      const newTodoList = [...todos, newTodo] //spread operator to spread all the old array list and then add the new todo
      persistData(newTodoList)
      setTodos(newTodoList)
    }

    function handleDeleteTodo(index)
    { debugger;
        const newTodoList = todos.filter((todo,todoIndex)=>{
          return todoIndex != index // return indexes to newTodoList that is not equal to index
        })
        persistData(newTodoList)
        setTodos(newTodoList) // update the todolist
    }

    function handleEditTodo(index)
    {
        const valueToBeEdited = todos[index]
        setTodoValue(valueToBeEdited)
        handleDeleteTodo(index)
    }

    useEffect(() => {
      if (!localStorage)
      {
        return
      }
       
      let localTodos =localStorage.getItem('todos')
      if (!localTodos)
      {
        return
      }
      localTodos = JSON.parse(localTodos).todos
      setTodos(localTodos)

    }, []) // Dependency Array,[] means it will run when page is loaded/refreshed  if  it has a value like [todos] it will run when todos is changed

  return (
    <>
       <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
       <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
