import React,{useState} from 'react'
import ToDoForm from './ToDoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import Modal from "../Modal";
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
      id: null,
      value: ''
    });
    const [showModal, setShowModal] = useState(false);
    const toggleShowModal = () => {
        setShowModal(!showModal);
      };
    
    const submitUpdate = value => {
      updateTodo(edit.id, value);
      setEdit({
        id: null,
        value: ''
      });
    };
  
    if (edit.id) {
      return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
    }
  
    return todos.map((todo, index) => (
      <div
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>

        {showModal ? (
          <Modal>
            <h3>Are you sure Delete this Task</h3>
            <div className="modalButton">
              <button className="button" onClick={toggleShowModal}>
                CANCEL
              </button>
              <button className="deleteButton"  onClick={() => removeTodo(todo.id)}>
                DELETE
              </button>
            </div>
          </Modal>
        ) : null}

        <div className='icons'>
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className='delete-icon'
          />
          <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className='edit-icon'
          />
        </div>
      </div>
    ));
  };
  
  export default Todo;