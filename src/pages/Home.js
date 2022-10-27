import React, { useState } from 'react';
import Header from '../components/Header.js';
import '../App.css';
import CoffeeList from '../components/CoffeeList.js';

function Home() {
    let tired = 0;
    return (
        <main>
            <Header/>
            <CoffeeList tired={tired}/>
        </main>
    );
    };
export default Home;