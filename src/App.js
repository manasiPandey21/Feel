import './App.css';
import Home_page from './Home_page';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Psychatrics from './Psychatrics';
import AboutUs from './AboutUs';
import Contact from './Contact';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="/p" element={<Psychatrics />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
