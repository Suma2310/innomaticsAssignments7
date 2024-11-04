import React from 'react';
import './ServiceDetail.css'; // Import CSS for styling

const ServiceDetail = ({ service }) => {
    return (
        <div className="service-detail-container">
            <h2>{service} Services</h2>
            <p>At Innomatics Research Labs, we provide top-notch {service.toLowerCase()} services. Our expert team ensures that every project is delivered with precision and excellence.</p>
            <h3>Why Choose Us?</h3>
            <ul>
                <li>Experienced Professionals</li>
                <li>Customized Solutions</li>
                <li>Commitment to Quality</li>
                <li>24/7 Support</li>
            </ul>
        </div>
    );
};

export default ServiceDetail;
