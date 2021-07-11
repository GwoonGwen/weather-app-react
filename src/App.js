import Search from "./Search";
import Today from "./Today";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Myinfo from "./Myinfo";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Today />
        <Weather tempmain={20} icon="🌈" wind={2} humidity={80} sky="Cloudy" />
        <Forecast date="Saturday" icon="🌤" tempMax={25} tempMin={10} />
      </div>
        <Myinfo />
    </div>
  );
}

export default App;
