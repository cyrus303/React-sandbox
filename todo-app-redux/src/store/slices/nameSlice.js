import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
  name: 'todoName',
  initialState: '',
  reducers: {
    changeName(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeName } = nameSlice.actions;
export const todoNameReducer = nameSlice.reducer;
