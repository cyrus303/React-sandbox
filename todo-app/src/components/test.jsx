import React, { useState, useEffect } from 'react';

let globalId = 0;

function App() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState('');

  function addTodo() {
    setTodo((oldTodo) => {
      setTask('');
      return [...oldTodo, { todo: task, id: globalId++ }];
    });
  }

  //   useEffect(() => {
  //     setTask('');
  //   }, [todo]);

  function tryToCheckForEnterKey(e) {
    if (e.keyCode === 13) {
      addTodo();
    }
  }

  function deleteItem(itemId) {
    setTodo((oldTodo) => oldTodo.filter((item) => item.id !== itemId));
  }

  return (
    <div>
      <h1>Best Todo App Ever</h1>
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        onKeyDown={tryToCheckForEnterKey}
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todo.map((item, index) => {
          return (
            <div key={item.id}>
              <li>{item.todo}</li>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
