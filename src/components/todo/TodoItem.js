import classes from "./TodoItem.module.css";
import React from "react";

const TodoItem = (props) => {
  const handleDelete = () => {
   props.deleteTodo(props.id);
  
  };
  const handleEdit = () => {
  props.editHandler(props.id);
   
  };


  return (
    <li className={classes.listItem} >
      <span>{props.children}</span>
      <span>
        <button onClick={handleEdit} className={classes.edit}>
          Edit
        </button>
        <button onClick={handleDelete} className={classes.delete}>
          Delete
        </button>
      </span>
    </li>
  );
};

export default TodoItem;
