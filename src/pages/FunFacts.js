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
            //console.log(response.data);
            setData(response.data);
        })
        .catch(function (error) {
            setData({});
        });
    }, []);
    var index = Math.round(Math.random()*21);
    //console.log(data[index]);

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
                        <button onClick={refreshPage}>New Fact</button>
                    </div>
                </div>
            </div>
        </main>
    ); 
    }
}
export default FunFacts;