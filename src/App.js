import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ServiceDetail from './components/ServiceDetail';
import NotFound from './components/NotFound';
import './App.css'; // Import the global styles


function App() {
    return (
        
        <Router basename="/innomaticsInternship7">
            <nav>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />}>
                    <Route path="design" element={<ServiceDetail service="Design" />} />
                    <Route path="development" element={<ServiceDetail service="Development" />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
