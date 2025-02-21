import React from "react";
import { ArrowLeft } from "lucide-react";

import {
  activityLinks,
  gifts_bonus,
  main_links,
} from "../assets/images/links-images/index";

const Promotions = () => {
  return (
    <div className="w-full max-w-[500px] bg-slate-50 mx-auto mb-24">
      <div className="w-full bg-gradient-to-r from-orange-400 to-orange-600 pb-3">
        <div className="w-full h-[54px] flex items-center justify-between px-4">
          <div className="flex-shrink-0">
            <ArrowLeft size={24} className="text-white" />
          </div>
          <div className="flex-grow text-center text-white font-semibold">
            Promotions
          </div>
          <div className="flex-shrink-0 text-white">
            <select className="bg-transparent border-none text-white">
              <option value="en">English</option>
              <option value="ur">Urdu</option>
            </select>
          </div>
        </div>

        <div className="w-full px-4">
          <h2 className="text-2xl text-white font-semibold mb-2">Promotions</h2>
          <p className="text-sm text-white">
            Please remember to follow the event page
          </p>
          <p className="text-sm text-white">
            We will launch user feedback activities from time to time
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-4 gap-2 p-2">
        {activityLinks.map((image, index) => (
          <div
            key={index}
            className="w-full h-28 flex flex-col justify-center items-center bg-white shadow-md rounded-lg"
          >
            <img
              src={image.image}
              alt={`mini-game-${index}`}
              className="w-[50px] h-[50px] object-cover"
            />
            <p className="text-xs text-center">{image.text}</p>
          </div>
        ))}
      </div>

      <div className="w-full  grid grid-cols-2 gap-2 px-2">
        {gifts_bonus.map((image, index) => (
          <div
            key={index}
            className="w-full flex flex-col bg-white shadow-md rounded-lg"
          >
            <img
              src={image.image}
              alt={`mini-game-${index}`}
              className="w-full h-[120px] object-cover border-t rounded-lg"
            />
            <p className="mt-2 text-gray-700 font-semibold px-2">
              {image.title}
            </p>
            <p className="text-gray-700 text-xs px-2 pb-2">{image.content}</p>
          </div>
        ))}
      </div>

      <div className="w-full  p-2">
        {main_links.map((image, index) => (
          <div key={index} className="bg-white mb-2 shadow-lg rounded-md">
            <img
              src={image.image}
              alt={`mini-game-${index}`}
              className="w-full h-full object-cover border rounded-md"
            />
            <p className="mt-2 text-gray-700 font-semibold px-2">
              {image.title}
            </p>
            <p className="text-gray-700 text-xs px-2 pb-2">{image.text}</p>
          </div>
        ))}
        <div className="w-full">
          <p className="text-center text-gray-700 font-semibold mt-2">
            Explore the Best Games Here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
