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

    constructor() {
        super()
        this.state = {
            name: "Laurence",
            age: 22
        }
    }

    render(){
        return(
            <div>      
                 <h1>{this.state.name}</h1>    
                 <h3>is {this.state.age} years old</h3>  
            </div>
         )
    }
}

export default App