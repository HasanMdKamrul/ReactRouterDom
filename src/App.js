
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Posts from './Components/Posts';
import Services from './Components/Services';



function App() {
  const isLoggedIn = false;
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />}>
          <Route path="hello" element={<p>Hello</p>} />
        </Route>
        <Route path="/services" element={<Services number = "5" />} />
        <Route path="/posts/:category/:topic" element={<Posts />} />
        <Route path="/dashboard" element={isLoggedIn? <Navigate to="/"/>: "Not logged in" } />
      </Routes>
    </>
    
  );
}

export default App;
