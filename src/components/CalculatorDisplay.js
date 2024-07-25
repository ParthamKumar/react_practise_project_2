import React, {  useContext, useState } from "react";
import "./CalculatorDisplay.css"
import CalculatorData from "./CalculatorData";
import ThemeContext from "../Context/theme";



function CalculatorDisplay(){
    console.log("Calculator Display")

    const theme = useContext(ThemeContext)




    const [res,setRes] = useState(0)
    console.log("Result is ",theme)
    
    return(<>
    <div className={` CalculatoDisplay ${theme}`}>
        <h1>Display</h1>
        <h2>Result : {res}   </h2>
    </div>
    <CalculatorData setRes ={setRes}></CalculatorData>
    </>)
}
export default CalculatorDisplay