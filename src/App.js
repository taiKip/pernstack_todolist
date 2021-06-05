import { useState } from "react";
import "./App.css";
import EditTodo from "./components/EditTodo/EditTodo";
import InputForm from "./components/InputForm";
import TodoList from "./components/todo/TodoList";
import Modal from "./UI/Modal/Modal";
const TODOSARRAY = [
  { id: 1, text: "Build four PERN Stack applications" },
  { id: 2, text: "Study Sass and polish css" },
  { id: 3, text: "Study three js and build a portfolio website" },
];
function App() {
  const [todos, setTodos] = useState(TODOSARRAY);
  const [showModal, setShowModal] = useState(false);
  const [editText,setEditText]=useState({});
  const deleteHandler = (id) => {
    const newArray = todos.filter((item) => item.id !== id);
    setTodos(newArray);
  };
const showModalHandler =()=>{
  //closing and opening of modal depending on last state
  setShowModal(prev=>!prev);
}
//gets the id for the todo item to be edited.text can be passe to the textarea
  const editHandler = (id) => {
    //get the item selected for editing ,shift() to remain with object only
const todoItem = todos.filter(item=>item.id===id).shift();
setEditText(todoItem)
//remove the edited todo item from original array.
const newArray= todos.filter(item=>item.id!==id);
    setShowModal(prev=>!prev);
    setTodos(newArray)
  };
  //Just Edited todo item function

  const newEditHandler=(todo)=>{
    const newArray = [todo,...todos];
    setTodos(newArray)
console.log(todo)
  }
//add new to do list item
  const addNewTodoListItem =(todo)=>{
setTodos([todo,...todos])
  }
  return (
    <div className="App">
      {showModal && (
        <Modal>
          <EditTodo handleEdit = {newEditHandler} editText={editText} closeModal={showModalHandler}/>
        </Modal>
      )}
      <>
        <InputForm addNewTodo = {addNewTodoListItem} />
        <TodoList
          delete={deleteHandler}
          handleEdit={editHandler}
          todos={todos}
        />
      </>
    </div>
  );
}

export default App;
