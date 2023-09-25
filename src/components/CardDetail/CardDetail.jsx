import { Link } from "react-router-dom";
import swal from "sweetalert";

const CardDetail = ({ card }) => {
  const {
    id,
    backgroundImage,
    categoryName,
    title,
    textColor,
    categoryNameBackgroundColor,
    cardBackgroundColor,
    description,
    price,
  } = card;

  const donateBtnStyle = {
    backgroundColor: textColor,
  };

  const handleDonateBtn = () => {
    const itemAddedToDonation = [];
    const itemFromDonation = JSON.parse(localStorage.getItem('donation')) ;

    if(!itemFromDonation) {
        itemAddedToDonation.push(card);
        localStorage.setItem('donation', JSON.stringify(itemAddedToDonation));
        swal("Good job!", `You donated for ${title}`, "success");
    }
    else {
        const isExits = itemFromDonation.find(item => item.id === id);
        if(isExits) {
            swal("Error!", `You already donated for ${title}`, "error");
        }
        else {
            itemAddedToDonation.push(...itemFromDonation, card);

            localStorage.setItem('donation', JSON.stringify(itemAddedToDonation))
            swal("Good job!", `You donated for ${title}`, "success");

        }
    }
  }

  return (
    <div className="mt-10 mb-20 ">
      <div className=" h-screen">
        <div className="relative">
          <div className="">
            <img className=" w-full lg:h-[500px]" src={backgroundImage} />
            <div className="absolute bottom-4 left-5 ">
              
                <button onClick={handleDonateBtn}
                  style={donateBtnStyle}
                  className=" font-semibold text-white text-xs p-2"
                >
                  Donate ${price}
                </button>
              
            </div>
          </div>
        </div>
        <div className="">
          <p className="font-bold mt-5">{title}</p>
          <p className="font-light mt-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
