import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import CustomCursor from './components/UI/CustomCursor';
import ScrollToTop from './components/Layout/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import Methodology from './pages/Methodology';
import CoreFramework from './pages/CoreFramework';
import ProgramsOverview from './pages/ProgramsOverview';
import ProgramDetail from './pages/ProgramDetail';
import ForOrganizations from './pages/ForOrganizations';
import Contact from './pages/Contact';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-text font-sans selection:bg-accent selection:text-white">
        <CustomCursor />
        <Navbar />
        
        <main className="pt-24 lg:pt-32 min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/metodika" element={<Methodology />} />
            <Route path="/metodika/core" element={<CoreFramework />} />
            <Route path="/programy" element={<ProgramsOverview />} />
            <Route path="/programy/:id" element={<ProgramDetail />} />
            <Route path="/pro-organizace" element={<ForOrganizations />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;