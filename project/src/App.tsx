import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import CampusLife from './pages/CampusLife';
import Contact from './pages/Contact';
import Placements from './pages/Placements';
import CSE from './pages/departments/CSE';
import CSM from './pages/departments/CSM';
import ECE from './pages/departments/ECE';
import Footer from './components/Footer';
import AIDS from './pages/departments/AIDS';
import EEE from './pages/departments/EEE';
import IT from './pages/departments/IT';
import MECH from './pages/departments/MECH';
import CIVIL from './pages/departments/CIVIL';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/departments/cse" element={<CSE />} />
        <Route path="/departments/csm" element={<CSM />} />
        <Route path="/departments/ece" element={<ECE />} />
        <Route path="/departments/aids" element={<AIDS />} />
        <Route path="/departments/eee" element={<EEE />} />
        <Route path="/departments/it" element={<IT />} />
        <Route path="/departments/mech" element={<MECH />} />
        <Route path="/departments/civil" element={<CIVIL />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App