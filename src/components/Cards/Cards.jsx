/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import './Cards.css'

const Cards = ({cards}) => {

    
    return (
        <div className= "grid grid- grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
            {
                cards.map((card) =>  <Card key={card.id} card={card}></Card>)

                
            }
            
                
            
        </div>
    );
};

export default Cards;