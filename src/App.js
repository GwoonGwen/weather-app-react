import Search from "./Search";
import Today from "./Today";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Myinfo from "./Myinfo";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

function App() {
  let city = "Amsterdam";
  return (
    <div className="App">
      <div className="container WeatherApp">
        <Search />
        <Today />
        <Weather city={city} tempmain={20} icon="🌈" wind={2} humidity={80} sky="Cloudy" />
        <Forecast date="Saturday" icon="🌤" tempMax={25} tempMin={10} />
      </div>
      <Myinfo />
    </div>
  );
}

export default App;
