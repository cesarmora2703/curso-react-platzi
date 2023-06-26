import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cusros de introducción Reac.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'Tralalalala', completed: false },
  { text: 'Escribir estados extendidos', completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  console.log("Se ha buscado: " + searchValue)

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const todosFiltered = defaultTodos.filter(
    todo => todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>

      <TodoCounter
        completed={completedTodos}
        total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {todosFiltered.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      < CreateTodoButton />
    </>
  );
}

export default App;