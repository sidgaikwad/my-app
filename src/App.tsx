
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Consultancy from './pages/Consultancy';
import Team from './pages/Team';
import Booking from './pages/Booking';
import CaseStudy from './pages/CaseStudy';

function App() {
  return (
    <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Consultancy" element={<Consultancy />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/CaseStudy" element={<CaseStudy />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
