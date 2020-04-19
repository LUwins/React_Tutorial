import React from "react"
import Footer from "./Footer"
import Maincontent from "./Maincontent"
import Header from "./Header"
import ContactCard from "./ContactCard"
import Joke from "./joke"
import productsData from "../importfiles/vschoolProducts"
import Product from "./Product"

function App() {

    const productcomponents = productsData.map(item => <Product product={item}/>)
    
    return(
        <div>
            {productcomponents}
        </div>
    )
}

export default App