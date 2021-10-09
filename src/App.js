
import './App.css';
import Form from "./components/Form"
import ToDoList from './components/ToDoList';
import React,{useState} from "react"
function App() {
  const [inputText,setInputText]=useState("")
  const [todoList,setTodoList]=useState([])
  return (
    <div className="App">
      <div className="header">
        <h1>MY TO DO LIST</h1>
      </div>
     <Form inputText={inputText} setInputText={setInputText} setTodoList={setTodoList}></Form>
     <ToDoList list={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
