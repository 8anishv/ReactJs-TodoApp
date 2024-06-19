import { useState } from "react"

export function TodoInput(props){
    const {handleAddTodo , todoValue , setTodoValue} = props
    
    return (
        <header>
            <input  value={todoValue} onChange={(event)=>{
                setTodoValue(event.target.value)
            }} type="text" placeholder="Enter the Todo..." />
            <button onClick={()=>{
                handleAddTodo(todoValue)
                setTodoValue("")
            }}>Add</button>
        </header>
    )
}