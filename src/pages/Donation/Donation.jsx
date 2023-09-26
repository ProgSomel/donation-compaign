import { Link } from "react-router-dom";

const Donation = ({ donation }) => {
  const {
    id,
    backgroundImage,
    categoryName,
    title,
    textColor,
    categoryNameBackgroundColor,
    cardBackgroundColor,price
  } = donation;

  const textStyle = {
    color: textColor || "",
  };

  const categoryNameStyle = {
    backgroundColor: categoryNameBackgroundColor,
  };

  const cardStyle = {
    backgroundColor: cardBackgroundColor,
  };

  const viewDetailsBtnStyle = {
    backgroundColor: textColor,
  };

  return (
    <div>
      <div style={cardStyle} className="  hero-content flex-col lg:flex-row">
        <img
          src={backgroundImage}
          className="  flex-1 rounded-lg shadow-2xl "
        />
        <div className="flex-1 ">
          <p
            className="px-2 w-[90px] rounded-md"
            style={{ ...categoryNameStyle, ...textStyle }}
          >
            {categoryName}
          </p>
          <h1 className="font-bold">{title}</h1>
          <p style={textStyle}>${price}</p>
          <Link to={`/cardDetails/${id}`}>
            <button
              style={viewDetailsBtnStyle}
              className="text-white font-semibold px-2 rounded-md mt-3"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Donation;
