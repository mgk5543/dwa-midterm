import React, { useState, useEffect} from 'react';
import axios from 'axios';
import CoffeeCard from './CoffeeCard.js';


function CoffeeList({ tired }) {
    const [coffeeData, setCoffeeData] = useState({});

    useEffect (() => {
    axios
        .get(
            `https://api.sampleapis.com/coffee/hot`
        )
        .then(function (response) {
            //console.log(response.data);
            setCoffeeData(response.data);
        })
        .catch(function (error) {
            setCoffeeData({});
        });
    }, []);
    //console.log(coffeeData);

    if (coffeeData.length > 0){
    switch(tired){
        case 0:
            return(
                <div className="home-content">
                    {
                    coffeeData.map((coffee) =>(
                        <CoffeeCard key={"coffee.id"} coffee={coffee}/>
                    ))}
                </div>
            );
        case 1:
            return(
                <div className="home-content">
                    {
                    coffeeData.map((coffee) =>(
                        <CoffeeCard key={"coffee.id"} coffee={coffee}/>
                    ))}
                </div>
            );
        case 2:
            return(
                <div className="home-content">
                    
                    {
                    coffeeData.map((coffee) =>(
                        <CoffeeCard key={"coffee.id"} coffee={coffee}/>
                    ))}
                </div>
            );
        default:
            return null;
    }
}

    // if (coffeeData.length > 0  && tired === 0){
    //     return(
    //         <div className="home-content">
                
    //             {
    //             coffeeData.map((coffee) =>(
    //                 <CoffeeCard key={"coffee.id"} coffee={coffee}/>
    //             ))}
    //         </div>
    //     );
    // }
}

export default CoffeeList;