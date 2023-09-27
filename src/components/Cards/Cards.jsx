import Card from "../Card/Card";
import swal from "sweetalert";


const Cards = ({ cards, search }) => {
  const filteredCards = search
    ? cards.filter((card) => card.categoryName.toLowerCase() === search.toLowerCase())
    : cards;

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 mt mb-12">
   
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredCards.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      
    </div>
  );
};

export default Cards;
