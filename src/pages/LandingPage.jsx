import React, { useState } from "react";
import { Ticket } from "lucide-react";

import Header from "../components/Header";
import Carousel from "../components/Carousel/HeroCarousel";
import InfoContainer from "../components/InfoSlider";
import WinTile from "../components/WinningInfo";
import RankStage from "../components/TodayEarningRank";

import Lottery from "../components/lottery/Lottery";
import MiniGames from "../components/mini-games/MiniGames";
import Slots from "../components/slots/Slots";
import Sports from "../components/sports/Sports";
import Casino from "../components/casino/Casino";
import Rummy from "../components/rummy/Rummy";
import Fishing from "../components/fishing/Fishing";
import Popular from "../components/popular/Popular";

import { images } from "../assets/images/home-game-list/index";

const items = [
  { name: "Lottery", image: images.image1, component: <Lottery /> },
  { name: "Original", image: images.image2, component: <MiniGames /> },
  { name: "Slots", image: images.image3, component: <Slots /> },
  { name: "Sports", image: images.image4, component: <Sports /> },
  { name: "Casino", image: images.image5, component: <Casino /> },
  { name: "Rummy", image: images.image6, component: <Rummy /> },
  { name: "Fishing", image: images.image7, component: <Fishing /> },
  { name: "Popular", image: images.image8, component: <Popular /> },
];

const LandingPage = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="min-h-screen mb-24 flex flex-col items-center">
      <Header />

      {/* Content Area */}
      <div className="flex-grow w-full flex flex-col items-center pt-2 ">
        <Carousel />
        <InfoContainer />

        {/* Home Menu Box */}
        <div className="mx-auto flex flex-wrap justify-center items-center rounded-lg shadow-lg">
          {items.map((item, index) => (
            <div
              key={index}
              className={`w-[109px] h-[120px] p-2 rounded-xl flex flex-col justify-center items-center shadow-md m-1 cursor-pointer transition-all duration-300 border border-yellow-900 ${
                selectedItem === index ? "bg-yellow-700" : ""
              }`}
              onClick={() => setSelectedItem(index)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[80px] rounded-lg object-cover"
              />
              <p
                className={`mt-1 text-sm ${
                  selectedItem === index
                    ? "text-white font-semibold"
                    : "text-yellow-500"
                }`}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Home Menu Lottery Container */}
        <div className="w-full mx-auto flex flex-col items-center mt-3">
          <div className="w-full flex items-center pl-4 py-2 ">
            <Ticket size={30} className="text-yellow-600 mr-2" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-300 bg-clip-text text-transparent">
              {items[selectedItem].name}
            </h1>
          </div>
          {items[selectedItem].component}
        </div>
      </div>
      {/* Home Winning Information */}
      <div className="w-full">
        <WinTile />
      </div>

      {/* Today's Earning Ranks section */}
      <RankStage />
    </div>
  );
};

export default LandingPage;
