import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Services.css'; // Import CSS for styling

const Services = () => {
    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <nav className="services-nav">
                <NavLink to="design" className="service-link">Design Services</NavLink>
                <NavLink to="development" className="service-link">Development Services</NavLink>
            </nav>
            <Outlet />
        </div>
    );
};

export default Services;
