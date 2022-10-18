import React,{useState,useEffect} from 'react'
import SearchBar from './SearchBar'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'

const getLocalStorage=()=>{
    let myLocalTasks = localStorage.getItem('todos')
    console.log( myLocalTasks);
    if(myLocalTasks){
     return JSON.parse(myLocalTasks)
    }else{
      return []
    }
  }

function ToDoList() {
  const[todos,setTodos]=useState(getLocalStorage())

  useEffect(() => {
 
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


const addToDo=(todo)=>{
    if(!todo.text || /^\s*$/.test(todo.text)){
        return // check for empty spaces. by  js regexp dont add any thing
    }
    const newToDos=[todo,...todos]
     setTodos(newToDos)
     console.log(newToDos);
}
const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

const removeTodo=(id)=>{
    const afterRemove=todos.filter((todo)=>todo.id!==id)
    setTodos(afterRemove)
    
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodos(updatedTodos);
      };



  return (
    <div>
   
   <ToDoForm onSubmit={addToDo}/>
   <SearchBar data={todos} 
    completeTodo={completeTodo}
    removeTodo={removeTodo}
    updateTodo={updateTodo}
     />
   <ToDo 
   todos={todos}
   completeTodo={completeTodo}
   removeTodo={removeTodo}
   updateTodo={updateTodo}
   
   />
  
 



    </div>
  )
}

export default ToDoList