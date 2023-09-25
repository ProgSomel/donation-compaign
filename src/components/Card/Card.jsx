import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const {
    id,
    backgroundImage,
    categoryName,
    title,
    textColor,
    categoryNameBackgroundColor,
    cardBackgroundColor
  } = card;


  const textStyle = {
    color: textColor || "",
    
  };

  const categoryNameStyle = {
    backgroundColor: categoryNameBackgroundColor,
  };

  const cardStyle = {
    backgroundColor: cardBackgroundColor,

  }

  return (
    
      <div>
        <Link to={`/cardDetails/${id}`}>
        <div style={cardStyle} className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={backgroundImage} />
      </figure>
      <div  className="card-body">
        <h2  style={{ ...textStyle, ...categoryNameStyle }} className=" w-24  px-3 ">
          {categoryName}
        </h2>
        <p style={textStyle}  className="font-bold">{title}</p>
      </div>
    </div>
        </Link>
      </div>
    
  );
};

export default Card;
