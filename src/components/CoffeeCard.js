import React, { } from 'react';
import CoffeeImage from "./CoffeeImage";


function CoffeeCard({coffee}) {
    
    return(
        <div className="list-container">
            <div className="list-wrapper">
                <div className="coffee-list">
                    <div className="coffee-description">
                        <h2 className="type">{coffee.title}</h2>
                        <p className="description">{coffee.description}</p>
                    </div>
                    <CoffeeImage coffeeType={coffee.title}/>
                    <div className="coffee-ingredients">
                        <p>Ingredients: </p>
                        {
                            coffee.ingredients.map((ingredients) =>(
                                <p className="ingredients" ingredients={ingredients}>{ingredients}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        );
}

export default CoffeeCard;