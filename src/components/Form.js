const Form=({setInputText,setTodoList,inputText})=>{
    const inputTextHandler=(e)=>{

setInputText(e.target.value)
    }
    const submitTodoHandler=(e)=>{
        e.preventDefault();

        if( inputText!=="")
    {
         setTodoList((prev)=>{
            return [...prev,{text:inputText,id:Math.floor(Math.random()*100)}]
        })
    
        setInputText("")
    }
        else return
    }
return <>
<div className="form">
    <input placeholder="Enter your Task" onChange={inputTextHandler} value={inputText} className="input" type="text"/>
    <button className="plus-button" type="submit" onClick={submitTodoHandler}><i className="fas fa-plus-square"></i></button>
</div>
</>
}
export default Form;