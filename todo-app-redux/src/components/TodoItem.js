import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleCompleted } from '../store';

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(removeTodo(id));
  };

  const handleChange = (id) => {
    dispatch(toggleCompleted(id));
  };

  return (
    <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="me-2"
            checked={completed}
            onChange={() => {
              handleChange(id);
            }}
          ></input>
          {title}
        </span>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleClick(id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
