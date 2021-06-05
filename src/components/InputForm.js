import classes from "./InputForm.module.css";
import React, { useState } from "react";

const InputForm = (props) => {
  const [text, setText] = useState('');
  const handleTextChange = (event) => {
    
    setText(event.target.value)
  };
  const submitHandler=(event)=>{
event.preventDefault();
props.addNewTodo({id: Math.random(),text:text})
setText('');
  }
  return (
    <form className={classes.inputForm} onSubmit={submitHandler}>
      <input type="text" value={text} onChange={handleTextChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
