import React from "react"

function Maincontent() {
    const firstName = "Laurence"
    const lastName = "Uwins"
    const date = new Date()
    const hours = date.getHours
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 20){
        timeOfDay = "afternoon"
    }else{
        timeOfDay = "night"
    }

    const styles = {
        color: "yellow",
        backgroundColor: "red"
    }

    return(
        <main>
            <p style={styles}>Hello {firstName + " " + lastName} have a good {timeOfDay} </p>
        </main>
    )
}

export default Maincontent