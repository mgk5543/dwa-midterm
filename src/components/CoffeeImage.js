import React from 'react';
import blackCoffee from "../images/black.png";
import latte from "../images/latte.png";
import cappuccino from "../images/cappuccino.png";
import americano from "../images/americano.png";
import espresso from "../images/espresso.png";
import cortado from "../images/cortado.png";

function WeatherIcon( { coffeeType }){

    switch(coffeeType){
        case 'Black':
            return <img className="coffeeImage" src={blackCoffee} alt="Vector of black coffee"/>;
        case 'Latte':
            return <img className="coffeeImage" src={latte} alt="Vector of latte"/>;
        case 'Cappuccino':
            return <img className="coffeeImage" src={cappuccino} alt="Vector of cappuccino"/>;
        case 'Americano':
            return <img className="coffeeImage" src={americano} alt="Vector of americano"/>;
        case 'Doppio':
            return <img className="coffeeImage" src={blackCoffee} alt="Vector of doppio"/>;
        case 'Espresso':
            return <img className="coffeeImage" src={espresso} alt="Vector of espresso"/>;
        case 'Cortado':
            return <img className="coffeeImage" src={cortado} alt="Vector of cortado"/>;
        default:
            return null;
    }
}
export default WeatherIcon;