import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Events from './Components/Events';
import Sponsors from './Components/Sponsors';
import Gallery from './Components/Gallery';
import News from './Components/News';
import About from './Components/About/About';
import Tourney from './Components/Tourney'
import Past_Event from './Components/Past_Event';
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
          <Route path="tourneys" element={<Events />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="news" element={<News />} />
          <Route path="/cube_wars" element={<Past_Event />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

