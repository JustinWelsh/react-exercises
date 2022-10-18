import React from "react"
import './App.css';

function App() {
  //TODO:
  /*
  * Create Random Number Generator
  * Press button, generates 2 random numbers (1-5) and display those numbers
  * If they match, show “MATCH!” message
  */

    const [num1, setNum1] = React.useState("-")
    const [num2, setNum2] = React.useState("-")


    const randomNum = () => {
        setNum1(Math.floor(Math.random() * (5) + 1))
        setNum2(Math.floor(Math.random() * (5) + 1))
    }

    const isNum = typeof num1 === "number" && typeof num2 === "number";

    return (
    <div className="App">
      <header className="App-header">
          <div className="flex gap-6 p-3">
              <h1 className="text-6xl font-bold">
                  {num1}
              </h1>
              <h1 className="text-6xl font-bold">
                  {num2}
              </h1>
          </div>
          <button className="btn btn-secondary my-5" onClick={randomNum}>Button</button>
          {isNum && num1 === num2 && <h2>MATCH!</h2>}
      </header>
    </div>
  );
}

export default App;
