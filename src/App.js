import './App.css';
import Home_page from './Home_page';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
   <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_page />} />
        </Routes>
      </BrowserRouter>
     
   </>
  );
}

export default App;
