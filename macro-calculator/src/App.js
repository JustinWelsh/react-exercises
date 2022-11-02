import './App.css';
import {useState} from "react";

function App() {
    const [meatSource, setMeatSource] = useState(null)
    const [userInput, setUserInput] = useState(null)
    const [proteinCalc, setProteinCalc] = useState(null)



    const getProtein = () => meatSource * userInput;

    return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-center p-5">Macro Calculator</h1>

        <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
                <span className="label-text">Choose your meat source</span>
            </label>
            <select
                className="select select-bordered"
                onChange={(e) => {
                    setMeatSource(e.target.value)
                }}
            >
                <option disabled selected>Pick one</option>
                <option value={7.75}>Chicken</option>
                <option value={5.75}>Fish</option>
                <option value={7}>Beef</option>
            </select>

            <label className="label">
                <span className="label-text">Input ounces</span>
            </label>
            <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs"
                   onChange={(e) => {
                setUserInput(e.target.value)
            }} />
            <button type="submit" className="btn my-4" onClick={() => setProteinCalc(meatSource * userInput)}>Get Protein</button>

            {proteinCalc && <div className="bg-white p-3 rounded-md">{proteinCalc} grams</div>}
        </div>
    </div>
  );
}

export default App;
