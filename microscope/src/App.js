import { hot } from 'react-hot-loader/root';
import logo from './logo.svg';
import './App.css';
import MicroscopeContainer from './microscopeContainer';
import Dials from  "./components/dials"
import LensView from "./pages/lensView"



function App() {
  return (
    <div className="App">
     <LensView/>
    </div>
  );
}

export default hot(App);
