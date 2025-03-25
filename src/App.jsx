import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './page/Home';
import CompletedProjects from './page/CompletedProjects';
import OwnerExpertInfo from './page/OwnerExpertInfo';
import Contact from './page/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/obiecte-finalizate" element={<CompletedProjects />} />
            <Route path="/expert" element={<OwnerExpertInfo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
