import React from "react";
import { Ticket } from "lucide-react";

import Header from "../components/Header";
import Carousel from "../components/Carousel/HeroCarousel";
import InfoContainer from "../components/InfoSlider";
import Lottery from "../components/Lottery/WinGo";
import TrxWinGo from "../components/Lottery/TrxWinGo";
import Racing from "../components/Lottery/Racing";
import FiveD from "../components/Lottery/5D";
import KThree from "../components/Lottery/K3";
import WinTile from "../components/WinningInfo";

const items = [
  { name: "Box 1" },
  { name: "Box 2" },
  { name: "Box 3" },
  { name: "Box 4" },
  { name: "Box 5" },
  { name: "Box 6" },
  { name: "Box 7" },
  { name: "Box 8" },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen mb-24 flex flex-col items-center">
      <Header />

      {/* Content Area */}
      <div className="flex-grow w-full flex flex-col items-center pt-2">
        <Carousel />
        <InfoContainer />

        {/* Home Menu Box */}
        <div className=" mx-auto flex flex-wrap justify-center items-center rounded-lg shadow-lg">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-[109px] h-[120px] bg-white rounded-xl flex flex-col justify-center items-center shadow-md m-2"
            >
              <div className="w-full h-full bg-orange-500 rounded-lg"></div>
              <p className="mt-1 text-sm font-semibold text-gray-700">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Home Menu Lottery Container */}
        <div className="w-full mx-auto flex flex-col items-center mt-3">
          <div className="w-full flex items-center pl-4 py-2">
            <Ticket size={30} className="text-orange-500 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">Lottery</h1>
          </div>
          <Lottery />
          <TrxWinGo />
          <Racing />
          <KThree />
          <FiveD />
        </div>

        {/* Home Winning Information */}
        <div className="w-full">
          <WinTile />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
