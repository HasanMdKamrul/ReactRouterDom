import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Services from './Components/Services';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
