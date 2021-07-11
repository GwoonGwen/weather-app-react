import Weather from "./Weather";
import './App.css';

function App() {
  let city = "Lisbon";
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello World</h1>
        <br />
        <Weather city={city}/>
      </header>
    </div>
  );
}

export default App;
