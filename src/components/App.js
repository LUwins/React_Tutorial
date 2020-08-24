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

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        let wordDisplay
        if (this.state.isLoggedIn){
            wordDisplay = "in"
        }
        else{
            wordDisplay = "out"
        }
        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}

export default App