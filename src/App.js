import Weather from "./Weather";
import Myinfo from "./Myinfo";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Amsterdam" />
      </div>
      <Myinfo />
    </div>
  );
}

export default App;
