import React,{useState} from 'react'
import ToDoForm from './ToDoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import Modal from "./Modal";
// import '../components/Modal.css'
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
      id: null,
      value: ''
    });
    const [showModal, setShowModal] = useState(false);
    const toggleShowModal = () => {
       
        setShowModal(!showModal);
         console.log("hiiiiiiiiiiii there");
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

        <div className='icons'>
          <RiCloseCircleLine
            onClick={toggleShowModal}
            className='delete-icon'
          />
          <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className='edit-icon'
          />
        </div>

        {showModal ? (
          <Modal>
            <h3>Are you sure Delete this Task ?</h3>
            <div className="modal-buttons">
              <button className="cancle-button" onClick={toggleShowModal}>
                CANCEL
              </button>
              <button className="delete-button"  onClick={() => removeTodo(todo.id)}>
                DELETE
              </button>
            </div>
          </Modal>
        ) : null}

  
      </div>
    ));
  };
  
  export default Todo;