import React from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Pelar patatas', completed: false},
  {text: 'Rallar Zanahoria', completed: true},
  {text: 'Cortar carne', completed: false},
  {text: 'Pasear el perro', completed: false},
  {text: 'Bañar al gato', completed: true},
  {text: 'Saludar a vecino', completed: true},
  {text: 'Acogotar el ganso', completed: false}
];


function App() {
  
  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);

  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo)=> {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    }
  );

  return (
    <React.Fragment>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}  
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}






export default App;
