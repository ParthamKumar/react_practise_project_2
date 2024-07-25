import React, { useContext, useState } from "react"
import "./Counter.css"
import ThemeContext from "../Context/theme"


function Counter(){
    console.log("Counter")

    const theme = useContext(ThemeContext)

    console.log("Counter Context ", theme)

    const [number,setNumber] = useState(0)

    function addNumber(){
        setNumber(number+1)
    }

    function subNumber(){
        setNumber(number-1)
    }


    return(<>
    <div className= {theme}>
        <h1>Counter</h1>
        <div className="number">Number : {number}</div>
        <div className="buttons">
            <button onClick={addNumber}>ADD</button>
            <button onClick={subNumber}>Sub</button>
        </div>
    </div>
    </>)
}
export default Counter