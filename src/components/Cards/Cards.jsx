/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = ({cards}) => {

    
    return (
        <div className= "max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 grid grid- grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt mb-12">
            {
                cards.map((card) =>  <Card key={card.id} card={card}></Card>)

                
            }
            
                
            
        </div>
    );
};

export default Cards;