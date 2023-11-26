import React from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { useLocalStorage } from './useLocalStorage';
import './App.css';



function App() {

  const {item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');


  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo)=> {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    }
  );

const completeTodo = (text)=>  {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  );
  newTodos[todoIndex].completed = true;
  saveTodos(newTodos);
};

const deleteTodo = (text)=>  {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  );
  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
};

  return (
    <React.Fragment>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}  
      />
      <TodoList>
        {loading &&   <p>Loading...</p>}
        {error &&   <p>There's been an error</p>}
        {(!loading && searchedTodos.length === 0) &&  <p>Add your tasks</p>}


        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}






export default App;
