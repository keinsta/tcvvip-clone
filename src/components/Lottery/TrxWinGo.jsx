import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LotteryTrx from "../../assets/images/lottery/lotterycategory_trx.png";

const dummyData = [
  {
    id: 1,
    name: "Michael Johnson",
    prize: "$9000",
    avatar: "https://i.pravatar.cc/100?img=3", // Working Avatar Image
  },
  {
    id: 2,
    name: "John Doe",
    prize: "$5000",
    avatar: "https://i.pravatar.cc/100?img=1", // Working Avatar Image
  },
  {
    id: 3,
    name: "Alice Smith",
    prize: "$7000",
    avatar: "https://i.pravatar.cc/100?img=2", // Working Avatar Image
  },
];

const TrxWinGo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[500px] p-2">
      <div className="bg-white rounded-lg">
        <div className="relative bg-gradient-to-r from-orange-600 to-orange-300 rounded-lg p-4 flex flex-col">
          {/* Heading and Paragraphs */}
          <div>
            <h3 className="text-lg font-bold text-white">Trx Win Go</h3>
            <p className="text-sm text-white mt-1">
              This is the first paragraph.
            </p>
            <p className="text-sm text-white mt-1">
              This is the second paragraph.
            </p>
          </div>

          {/* Image Positioned at Top-Right Corner */}
          <img
            src={LotteryTrx}
            alt="Corner Icon"
            className="absolute top-[-10px] right-[-10px] w-[100px] h-[80px] "
          />
        </div>

        {/* Sliding Data Section */}
        <div className="w-full h-[50px] flex items-center justify-between shadow-md rounded-md overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={dummyData[currentIndex].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full flex items-center justify-between px-2"
            >
              {/* Left Side: Avatar & Name */}
              <div className="flex items-center">
                <img
                  src={dummyData[currentIndex].avatar}
                  alt="Avatar"
                  className="w-[35px] h-[35px] rounded-full object-cover"
                />
                <p className="ml-3 font-semibold text-gray-800">
                  {dummyData[currentIndex].name}
                </p>
              </div>

              {/* Right Side: Winning Prize */}
              <div className="text-right">
                <p className="text-sm text-gray-600">Winning Price</p>
                <p className="text-lg font-bold text-orange-500">
                  {dummyData[currentIndex].prize}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TrxWinGo;
