import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>

        <h1 className="text-3xl font-bold underline">
          Hello tailwind!
        </h1>

        <div className="card w-96 bg-base-100 shadow-xl my-7">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>
          <div className="card-body">
            <h2 className="card-title">Hello daisyUI</h2>
            <p>Great success!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
