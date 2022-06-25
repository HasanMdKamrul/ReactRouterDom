
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Posts from './Components/Posts';
import Services from './Components/Services';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/posts/:category/:topic" element={<Posts />} />
      </Routes>
    </>
    
  );
}

export default App;
