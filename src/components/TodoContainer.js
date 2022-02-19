import React, { useState, useEffect } from "react"
import TodoList from "./TodoList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid"

const TodoContainer = () => {
	
  const [todos, setTodos] = useState(getInitialTodos())
  
    function getInitialTodos() {
	  // getting stored items
	  const temp = localStorage.getItem("todos")
	  const savedTodos = JSON.parse(temp)
	  return savedTodos || []
	}
  
  useEffect(() => {
	  // storing todos items
	  const temp = JSON.stringify(todos)
	  localStorage.setItem("todos", temp)
	  console.log("added todos to the localstorage", temp)
  }, [todos])
  
  const handleChange = id => {
	  setTodos( previousState => 
		previousState.map( todo => {
			if(todo.id == id){
				return {
					...todo,
					completed: !todo.completed,
				}
			}
			return todo
		}),
	  )
  }
  
  const deleteTodo = (id) => {
	  setTodos(todos.filter(todo => {
				return todo.id !== id;
			   })
		)
  }
  
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  } 
  
  return (
	  <div className="container">
		<div className="iiner">
			<Header />
			<InputTodo handleNewTitle={addTodoItem} />
			<TodoList 
				todos={todos} 
				handleChangeProps={handleChange} 
				handleDelete={deleteTodo} 
				handleUpdate={setUpdate} 
			/>
		</div>
	  </div>
  )
  
}
export default TodoContainer
