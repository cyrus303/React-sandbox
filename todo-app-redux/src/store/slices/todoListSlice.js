import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, title: 'todo1', completed: false },
    { id: 2, title: 'todo2', completed: false },
    { id: 3, title: 'todo3', completed: true },
    { id: 4, title: 'todo4', completed: false },
    { id: 5, title: 'todo5', completed: false },
  ],
  reducers: {
    addTodo(state, action) {
      //
    },
    removeTodo(state, action) {
      //
    },
    toggleCompleted(state, action) {
      //
    },
  },
});

export const todoListReducer = todoListSlice.reducer;
export const { addTodo, removeTodo, toggleCompleted } = todoListSlice.actions;
