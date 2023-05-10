import React, {useState} from 'react'
import Todoform from './Todoform.js'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo.js';
import Edittodoform from './Edittodoform.js';

uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo =>{
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    const toogleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo  ))
    }

    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }
  return (
    <div className='TodoWrapper'>
      <h1>Things To Do !!!</h1>
      <Todoform addTodo={addTodo}/>
      {todos.map((todo, index) => ( todo.isEditing ? 
                                        (<Edittodoform editTodo={editTask} task={todo} />):( <Todo task={todo} key={index} toogleComplete={toogleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>)))}
    </div>
  )
}

export default TodoWrapper
