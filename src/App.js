import {  useState } from "react";
import "./App.css";
// import CalculatorData from './components/CalculatorData';
import CalculatorDisplay from "./components/CalculatorDisplay";
import Counter from "./components/Counter";
import ThemeContext from "./Context/theme";

function App() {
  console.log("App");

  const [mode,setMode] = useState("dark")
  console.log(mode);

  return (
    <ThemeContext.Provider value={mode}>
      <div className={`App ${mode}`}>
        <button
          className={mode === "dark" ? "button-dark" : "button-light"}
          onClick={()=>setMode(mode==="dark"? "light": "dark")}
        >
          Mode
        </button>
        <Counter />
        <CalculatorDisplay />
        {/* <CalculatorData /> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
