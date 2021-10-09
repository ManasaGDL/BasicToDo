import React from "react"
import ToDo from "./ToDo";
const ToDoList=({list,setTodoList})=>{
  
   return <>
    <div className="todo-container">
        <ul className="todo-list">
            {list.map((item)=>{
                return <ToDo key={item.id} eachItem={item} setTodoList={setTodoList} list={list}/>
            })}
          
        </ul>
    </div>
    </>
}
export default ToDoList;