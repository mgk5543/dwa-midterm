import React, { } from 'react';
import Header from '../components/Header.js';
import '../App.css';

function About() {
    return (
        <main>
            <Header/>
            <div className="home-content">
                <div className="fact-container">
                    <div className="fact-wrapper">
                        <h2>Disclaimer:</h2>
                        <p>All the information actually might be wrong.</p>
                    </div>
                </div>
            </div>
        </main>
    ); 
}
export default About;