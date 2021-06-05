import classes from './EditTodo.module.css'
import React,{useState} from 'react'

const EditTodo = (props) => {
const [todo, setTodo] = useState(props.editText)

    const submitHandler=(event)=>{
event.preventDefault();
props.handleEdit(todo)
props.closeModal();
    }
    const editTextHandler =(event)=>{
        const newTodo= {id:props.editText.id,text:event.target.value}
setTodo(newTodo)
    }
    return (
        <form className={classes.edit} onSubmit={submitHandler}>
            <textarea rows='5' value={todo.text} 
            onChange={editTextHandler}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default EditTodo
