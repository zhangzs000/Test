import logo from "./logo.svg";
import "./App.css";

function App() {
  const test = () => {
    console.log(1111);
  };
  const test1 = () => {



    console.log(1111);
  };
  const test2 = () => {



    console.log(1111);

    
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <button onClick={test}>aaaaa</button>

          <button onClick={test1}>bbbb</button>

          <button onClick={test2}>cccc</button>
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
