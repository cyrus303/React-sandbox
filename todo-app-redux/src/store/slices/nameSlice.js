import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
  name: 'todoName',
  initialState: 'asdasd',
  reducers: {
    changeName(state, action) {
      //
    },
  },
});

export const { changeName } = nameSlice.actions;
export const todoNameReducer = nameSlice.reducer;
