import { hot } from 'react-hot-loader/root';
import logo from './logo.svg';
import './App.css';
import MicroscopeContainer from './microscopeContainer';
import Dial from './components/dial'


function App() {
  // Draggable.create("#rect");
  return (
    <div className="App">
      <div><h1>Microscope Simulator</h1></div>
      <Dial/>
    </div>
  );
}

export default hot(App);
