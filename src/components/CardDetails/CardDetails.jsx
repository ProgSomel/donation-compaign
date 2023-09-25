import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetail from "../CardDetail/CardDetail";

const CardDetails = () => {

    const [card, setCard] = useState([]);

    const {id} = useParams();
    const idInt = parseInt(id);
    console.log(typeof id);
    
    const cards = useLoaderData();

    useEffect(() =>{
        const clickCard = cards.find(card => card.id === idInt);
        console.log(clickCard);
        setCardd(clickCard);
    },[id, cards]);


    return (
        <div>
            <CardDetail ></CardDetail>
        </div>
    );
};

export default CardDetails;