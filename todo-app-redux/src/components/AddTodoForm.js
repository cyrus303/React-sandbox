import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { changeName, addTodo } from '../store';

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const todoName = useSelector((state) => {
    return state.todoName;
  });

  const handleChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (todoName) {
      dispatch(addTodo({ id: nanoid(), title: todoName, completed: false }));
      dispatch(changeName(''));
    }
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={todoName}
        onChange={handleChange}
      ></input>

      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
