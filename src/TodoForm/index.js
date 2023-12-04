import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm () {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

   const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal (false);
    }
    const onCancel = (event)=>{
        setOpenModal (false);
    }
    const onChange = (event)=>{
        setNewTodoValue (event.target.value);
    }


    return (
        <form onSubmit={onSubmit}>
            <label>Add your new task</label>
            <textarea 
                placeholder="Priority for today..."
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    onClick={onCancel}
                    type="cancel"
                     className="TodoForm-button TodoForm-button--cancel">Cancel</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add">Create</button>
            </div>
       </form>
    );
}

export {TodoForm};