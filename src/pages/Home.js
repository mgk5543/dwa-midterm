import React, { useState } from 'react';
import Header from '../components/Header.js';
import '../App.css';
import CoffeeList from '../components/CoffeeList.js';
import coffeebutton from "../images/coffeebutton.png";

function Home() {
    let tired = 0;
    return (
        <main>
            <Header/>
            <CoffeeList tired={tired}/>
        </main>
    );


    // let tired = 0;
    // function littleTired() {
    //     tired = 0;
    // }
    // function mediumtired() {
    //     tired = 1;
    // }
    // function veryTired() {
    //     tired = 2;
    // }
    // const [isPreview, setIsPreview] = useState(true);
    
    // if (isPreview) {
    //     return (
    //         <main>
    //             <Header/>
    //             <button><img className="coffee-button" src={coffeebutton} alt="Coffee button" onClick={() => {setIsPreview(false); littleTired();}} /></button>
    //             <button><img className="coffee-button" src={coffeebutton} alt="Coffee button" onClick={() => {setIsPreview(false); mediumtired();}}/></button>
    //             <button><img className="coffee-button" src={coffeebutton} alt="Coffee button" onClick={() => {setIsPreview(false); veryTired();}} /></button>
    //         </main>
    //     );
    // } else {
    //     return (
    //         <main>
    //             <Header/>
    //             <CoffeeList tired={tired}/>
    //         </main>
    //     );
    // }
    };
export default Home;