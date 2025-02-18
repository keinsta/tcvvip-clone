import React from "react";

const FiveD = () => {
  return (
    <div className="w-full max-w-[500px] p-2">
      <div className="bg-white rounded-lg">
        <div className="relative bg-gradient-to-r from-orange-600 to-orange-300 rounded-lg p-4 flex flex-col">
          {/* Heading and Paragraphs */}
          <div>
            <h3 className="text-lg font-bold text-white">5D</h3>
            <p className="text-sm text-white mt-1">
              This is the first paragraph.
            </p>
            <p className="text-sm text-white mt-1">
              This is the second paragraph.
            </p>
          </div>

          {/* Image Positioned at Top-Right Corner */}
          <img
            src="https://via.placeholder.com/50"
            alt="Corner Icon"
            className="absolute top-[-10px] right-[-10px] w-[70px] h-[70px]  border-2 border-gray-500 shadow-lg"
          />
        </div>
        <div className="w-full h-[45px] flex items-center justify-between shadow-md rounded-md px-4">
          {/* Left Side: Avatar & Name */}
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="Avatar"
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <p className="ml-3 font-semibold text-gray-800">John Doe</p>
          </div>

          {/* Right Side: Winning Prize */}
          <div className="text-right">
            <p className="text-sm text-gray-600">Winning Price</p>
            <p className="text-lg font-bold text-orange-500">$5000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveD;
