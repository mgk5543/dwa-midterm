import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Header from '../components/Header.js';
import '../App.css';

function FunFacts() {
    const [data, setData] = useState({});
 
    useEffect (() => {
    axios
        .get(
            `/Coffee_Trivia.json`
        )
        .then(function (response) {
            setData(response.data);
        })
        .catch(function (error) {
            setData({});
        });
    }, []);
    var index = Math.round(Math.random()*21);

    function refreshPage() {
        window.location.reload();
      }

    if (data.length > 0){
    return (
        <main>
            <Header/>
            <div className="home-content">
                <div className="fact-container">
                    <div className="fact-wrapper">
                        <h3>{data[index].fact}</h3>
                        <p>{data[index].description}</p>
                        <div>
                            <button onClick={refreshPage}>New Fact</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    ); 
    }
}
export default FunFacts;