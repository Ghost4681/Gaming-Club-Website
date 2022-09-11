import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Events from './Components/Events';
import Sponsors from './Components/Sponsors';
import Gallery from './Components/Gallery';
import About from './Components/About';
import './Style.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div> 
      <Router>
        <Navbar />
        <Routes>        
          <Route path="" element={<Homepage />} /> 
          <Route path="events" element={<Events />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="news" element={<News />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

