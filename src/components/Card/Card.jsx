const Card = ({card}) => {

    const {backgroundImage, categoryName, title} = card;


  return (
    <div className="  card  bg-base-100 shadow-xl">
      <figure>
        <img className="w-full"
          src={backgroundImage}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{categoryName}</h2>
        <p>{title}</p>
        
      </div>
    </div>
  );
};

export default Card;
