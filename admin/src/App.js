import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Components/Home';
import AllEvents from './Components/AllEvents';
import CreateC from './Components/CreateC';
import CreateU from './Components/CreateU';
import UEvent from './Components/UEvent';
import CEvent from './Components/CEvent';
import Navbar from './Components/Navbar';
import './Components/Style.css'

function App() {
  return (
    <div>      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllEvents />} />
          <Route path="/createc" element={<CreateC/>} />
          <Route path="/createu" element={<CreateU/>} />
          <Route path="all/uevent/:id" element={<UEvent/>} />
          <Route path="all/cevent/:id" element={<CEvent/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

