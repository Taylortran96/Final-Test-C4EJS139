import React, { useState } from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoTaskList';
import { TaskTodos } from './Components/data';

function App() {
  const [todos, setTodos] = useState(TaskTodos);
  const [filter, setFilter] = useState('all');

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const filterTodos = () => {
    if (filter === 'all') {
      return todos;
    }
    if (filter === 'active') {
      return todos.filter(todo => !todo.completed);
    }
    if (filter === 'complete') {
      return todos.filter(todo => todo.completed);
    }
  };

  return (
    <div className="App">
      <div className='task-list'>
        <Header
          filter={filter}
          setFilter={setFilter}
          addTodo={addTodo}
          deleteAllTodos={deleteAllTodos}
        />
        <TodoList
          todos={filterTodos()}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
