import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Add from "./components/Add";
import Edit from "./components/Edit";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path="/create" element={<Add/>} />
            <Route path="/edit" element={<Edit/>} />
            <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
