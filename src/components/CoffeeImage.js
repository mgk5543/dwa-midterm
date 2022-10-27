import React from 'react';
import blackCoffee from "../images/black.png";
import latte from "../images/latte.png";

function WeatherIcon( { coffeeType }){
    //console.log(coffeeType);

    switch(coffeeType){
        case 'Black':
            return <img className="coffeeImage" src={blackCoffee} alt="Vector of black coffee"/>;
        case 'Latte':
            return <img className="coffeeImage" src={latte} alt="Vector of latte"/>;
        default:
            return null;
    }
}
export default WeatherIcon;