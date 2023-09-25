import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetail from "../CardDetail/CardDetail";

const CardDetails = () => {

    const [card, setCard] = useState([]);

    const {id} = useParams();
    const idInt = parseInt(id);
    
    const cards = useLoaderData();

    useEffect(() =>{
        const clickCard = cards.find(card => card.id === idInt);
        setCard(clickCard);
    },[id, cards]);


    return (
        <div>
            <CardDetail card={card}></CardDetail>
        </div>
    );
};

export default CardDetails;