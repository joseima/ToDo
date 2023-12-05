import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  
  return (
    <div className="TodoCounter">
      <h1>WELCOME TO TASK MANAGER</h1>
      <p>You've completed <span>{completedTodos}</span> from <span>{totalTodos}</span> tasks</p> 
    </div>
  );
}

export { TodoCounter };
