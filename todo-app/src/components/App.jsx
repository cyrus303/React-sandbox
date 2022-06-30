import React, { useState, useEffect } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState(['sachin', 'mahesh']);

  function createTodo() {
    setTodos((oldTodos) => {
      return [...oldTodos, task];
    });
  }

  useEffect(() => {
    setTask('');
  }, [todos]);

  return (
    <div>
      <h1>Best To Do App Ever</h1>

      <input
        type="text"
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />

      <button onClick={createTodo}>Create Todo</button>

      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
