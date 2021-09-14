import logo from './logo.svg';
import './App.css';

import Timer from './Component/Timer';

function App() {
  return (
    <div className="App">
     <Timer intialTime={20} finalTime={0} />
    </div>
  );
}

export default App;
