import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, title: 'todo1', completed: false },
    { id: 2, title: 'todo2', completed: true },
  ],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    removeTodo(state, action) {
      const updated = state.filter((note) => {
        return note.id !== action.payload;
      });
      return (state = updated);
    },
    toggleCompleted(state, action) {
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },
  },
});

export const todoListReducer = todoListSlice.reducer;
export const { addTodo, removeTodo, toggleCompleted } = todoListSlice.actions;
