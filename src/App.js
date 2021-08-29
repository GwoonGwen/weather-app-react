import Weather from "./Weather";
import MyInfo from "./MyInfo";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Amsterdam" />
      </div>
      <MyInfo />
    </div>
  );
}

export default App;
