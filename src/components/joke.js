import React from "react"

function Joke(props) {
    return(
        <div>
            <p>Q: {props.setup}</p>
            <p>A: {props.punch}</p>
        </div>
    )
}

export default Joke