import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
  const todos = useSelector((state) => {
    return state.todoList;
  });

  let completedCount = 0;
  todos.map((todo) => {
    if (todo.completed === true) {
      completedCount++;
    }
  });

  return (
    <div>
      <h4 className="mt-3">Total Items: {todos.length}</h4>
      <h4 className="mt-3">Completed Items: {completedCount}</h4>
    </div>
  );
};

export default TotalCompleteItems;
