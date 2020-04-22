import React from "react"
import Footer from "./Footer"
import Maincontent from "./Maincontent"
import Header from "./Header"
import ContactCard from "./ContactCard"
import Joke from "./joke"
import productsData from "../importfiles/vschoolProducts"
import Product from "./Product"
import todosData from "../importfiles/todosData"
import Todoitem from "./TodoItem"

function App() {

    const todoitems = todosData.map(item => <Todoitem key={item.id} item={item}/>)

    return(
       <div className="todo-list">      
            {todoitems}        
       </div>
    )
}

export default App