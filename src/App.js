import Weather from "./Weather";
import Forecast from "./Forecast";
import Myinfo from "./Myinfo";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Amsterdam" />
        <Forecast date="Saturday" icon="🌤" tempMax={25} tempMin={10} />
      </div>
        <Myinfo />
    </div>
  );
}

export default App;
