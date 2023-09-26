import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import Banner from "../Banner/Banner";

const Home = () => {
  const cards = useLoaderData();

  return (
    <div className="absolute ">
      {/* Banner  */}
      <div className=" relative -top-16    w-full">
        <Banner></Banner>
      </div>
      <div>
        <Cards cards={cards}></Cards>
      </div>
    </div>
  );
};

export default Home;
