import React from "react"
import Footer from "./Footer"
import Maincontent from "./Maincontent"
import Header from "./Header"
import ContactCard from "./ContactCard"
import Joke from "./joke"

function App() {
    return(
        <div>
            <Joke 
                setup="line 1"
                punch="line 2"
                />
            <Joke
                setup="line 1"
                punch="line 2"
                />
            <Joke
                setup="line 1"
                punch="line 2"
                />
            <Joke 
               setup="line 1"
               punch="line 2"
               />
        </div>
    )
}

export default App