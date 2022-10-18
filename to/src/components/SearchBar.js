import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import ToDoList from './ToDoList'

function SearchBar({  data, completeTodo, removeTodo,updateTodo }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
     console.log(value.text);
      return value.text.toLowerCase().includes(searchWord.toLowerCase());
     
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
         placeholder="searhe here"
          type="text"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>

      {filteredData.length !== 0 && (

        <div className="dataResult">
          {filteredData.map((todo, index) => {
            return (
                <div
                className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                key={index}
              >
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                  {todo.text}
                </div>
                <div className='icons'>
             
                <RiCloseCircleLine
               onClick={() => removeTodo(todo.id)}
               className='delete-icon'
                />
                  <TiEdit
                    onClick={() =>updateTodo(todo.id)}
                    className='edit-icon'
                  />
                </div>
              </div>
            
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;