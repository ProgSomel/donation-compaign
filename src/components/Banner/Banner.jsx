// Banner.jsx
import { useContext } from "react";
import { SearchContext } from "../Home/Home";

const Banner = () => {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <div className="hero w-full h-[500px] " style={{backgroundImage: 'url(https://i.ibb.co/qxNFNph/banner.jpg)'}}>
      <div className="hero-overlay bg-white opacity-95"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl font-extrabold text-black ">I Grow By Helping People In Need</h1>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSearch(e.target.search.value);
              }}
            >
              <input className="shadow-lg px-2 text-black" type="text" name="search" placeholder="Search here" />
              <input className="bg-red-500 px-3 cursor-pointer" type="submit" value="Search" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
