import React from 'react';

import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <p>by <a href="https://jedodels.netlify.app/">Jedo Dels</a></p>
      <TodoList />
    </div>
  );
}

export default App;
