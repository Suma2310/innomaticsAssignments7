import React from 'react';
import './Home.css'; // Import CSS for styling

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Innomatics Research Labs</h1>
                <p>Your journey into innovation starts here. We specialize in cutting-edge research and development.</p>
            </header>
            <section className="home-services">
                <h2>Our Focus Areas:</h2>
                <ul>
                    <li>Artificial Intelligence</li>
                    <li>Data Science</li>
                    <li>Web Development</li>
                    <li>Mobile Applications</li>
                </ul>
            </section>
            <footer className="home-footer">
                <p>Contact us for innovative solutions!</p>
            </footer>
        </div>
    );
};

export default Home;
