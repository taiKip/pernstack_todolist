import classes from "./TodoList.module.css";
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <ul className={classes.todoList}>
      {props.todos &&
        props.todos.map((todo) => (
          <TodoItem key={todo.id} 
          editHandler={props.handleEdit}
          deleteTodo={props.delete} id={todo.id}>
            {todo.text}
          </TodoItem>
        ))}
    </ul>
  );
};

export default TodoList;
