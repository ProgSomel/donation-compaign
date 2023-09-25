import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import Banner from "../Banner/Banner";

const Home = () => {

    const cards = useLoaderData();


    return (
        <div>
            {/* Banner  */}
      <div className="mt-5">
              <Banner></Banner>
      </div>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;