import { configureStore } from '@reduxjs/toolkit';

import { todoNameReducer, changeName } from './slices/nameSlice';
import {
  todoListReducer,
  addTodo,
  removeTodo,
  toggleCompleted,
} from './slices/todoListSlice';

const store = configureStore({
  reducer: {
    todoName: todoNameReducer,
    todoList: todoListReducer,
  },
});

export { store, changeName, addTodo, removeTodo, toggleCompleted };
