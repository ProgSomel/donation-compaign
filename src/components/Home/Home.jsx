// Home.jsx
import { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";

export const SearchContext = createContext("");

const Home = () => {
  const cards = useLoaderData();
  const [search, setSearch] = useState("");

  return (
    <div className="absolute ">
      <div className=" relative -top-16 w-full">
        <SearchContext.Provider value={{ search, setSearch }}>
        <Banner />
        </SearchContext.Provider>
        
      </div>
      <div>
        <Cards search={search} cards={cards} />
      </div>
    </div>
  );
};

export default Home;
