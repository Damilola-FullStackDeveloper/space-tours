import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-home-tablet- md:bg-cover flex flex-col h-screen bg-black text-white pt-20 items-center bg-no-repeat">
      <div className="flex flex-col items-center gap-10">
        <p className="barlow-condensed-regular text-[#D0D6F9]">SO, YOU WANT TO TRAVEL TO</p>
        <h2 className="bellefair-regular text-8xl">SPACE</h2>
        <p className="px-10">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="bg-white text-black bellefair-regular flex justify-center items-center text-xl h-44 w-44 rounded-full">
       <p className="bellefair-regular font-400">EXPLORE</p>
      </div>
    </div>
  );
};

export default Home;
