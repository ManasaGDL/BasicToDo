import React from "react"

const ToDo=({eachItem,setTodoList,list})=>{
    const deleteHandler=(e)=>{
    
      setTodoList(list.filter((item)=>{
          return item.id!==eachItem.id
      }))
    }
return <>
<div className="item">
<li>{eachItem.text}</li><button className="trash-btn" onClick={deleteHandler}><i className="far fa-trash-alt"></i></button>
</div>
</>
}
export default ToDo;
