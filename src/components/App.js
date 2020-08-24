import React from "react"
import Footer from "./Footer"
import Maincontent from "./Maincontent"
import Header from "./Header"
import ContactCard from "./ContactCard"
import Joke from "./joke"
import productsData from "../importfiles/vschoolProducts"
import Product from "./Product"
import todosData from "../importfiles/todosData"
import TodoItem from "./TodoItem"

function handleClick(){
    console.log("i was clicked")
}

function App() {
    return (
        <div>
            <img src="https://www.fillmurray.com/400/200"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App