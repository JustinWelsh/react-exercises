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


    const generateNum = () => Math.floor(Math.random() * (5) + 1)

    const getNums = () => {
        setNum1(generateNum())
        setNum2(generateNum())
    }

    const isNum = typeof num1 === "number" && typeof num2 === "number";

    return (
    <div className="App">
      <header className="App-header px-4">
          <h1 className="text-6xl text-info font-bold pb-6">Random Number Generator!</h1>
          <p>Click the button for random numbers between 1-5 and see if you can get a 'match'</p>
          <div className="flex gap-6 py-6">
              <h2 className="text-6xl font-bold">
                  {num1}
              </h2>
              <h2 className="text-6xl font-bold">
                  {num2}
              </h2>
          </div>
          <button className="btn btn-secondary mb-8" onClick={getNums}>Button</button>
          {isNum && num1 === num2 && <h2 className="text-4xl">🎊 MATCH! 🎊</h2>}
      </header>
    </div>
  );
}

export default App;
