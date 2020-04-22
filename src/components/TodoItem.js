import React from "react"
import todosData from "../importfiles/todosData"

function Todoitem(props) {
    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default Todoitem 