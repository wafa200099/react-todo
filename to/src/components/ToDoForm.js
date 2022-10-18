import React,{useState,useEffect,useRef} from 'react'
// import SearchBar from './SearchBar'
function ToDoForm(props) {
    const[input,setInput]=useState("")
    const inputRef=useRef(null)

    useEffect(() => {
     inputRef.current.focus()
    })
    const handleChange=(e)=>{
        setInput(e.target.value)
      }
    const handleSubmit=(e)=>{
        e.preventDefault(); // prevent from refresh on evry submit
        props.onSubmit({
        id:Math.floor(Math.random() * 10000),
        text:input
         })
         setInput("")
      }
  return (
    <div>
     <form className='todo-form' onSubmit={handleSubmit}>
        <input 
        type='text'
        placeholder='add to do' 
        value={input}
        name='text' 
        className='todo-input' 
        onChange={handleChange}
        ref={inputRef}
        />
        <button className='todo-button' >Add ToDo</button>

     </form>
    </div>
  )
}

export default ToDoForm