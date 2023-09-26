const Banner = () => {
  return (
    <div className="hero w-full h-[500px] " style={{backgroundImage: 'url(https://i.ibb.co/qxNFNph/banner.jpg)'}}>
  <div className="hero-overlay bg-white opacity-95"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl font-extrabold text-black ">I Grow By Helping People In Need</h1>
      
      <div>
        <input  className="bg-[#FFF] rounded rounded-r-none shadow-lg h-[30px] px-5" type="text" placeholder="Search Here" />
        <button className="bg-[#FF444A] px-4 rounded rounded-l-none text-white text-xl  py-0 h-[30px] shadow-lg mt-8 ">Search</button>
      </div>
      
    </div>
  </div>
</div>
  );
};

export default Banner;
