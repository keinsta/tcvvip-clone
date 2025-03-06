import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const settledData = [
  {
    game: "Poker Championship",
    betDetails: "Round 3 - High Stakes",
    betAmount: "₹5,000",
    winningAmount: "₹12,500",
  },
  {
    game: "Blackjack",
    betDetails: "Double Down on 11",
    betAmount: "₹1,200",
    winningAmount: "₹3,000",
  },
];

const unsettledData = [
  {
    game: "Roulette",
    betDetails: "Bet on Red 21",
    betAmount: "₹3,500",
    winningAmount: "Pending",
  },
  {
    game: "Baccarat",
    betDetails: "Banker Wins",
    betAmount: "₹2,000",
    winningAmount: "Pending",
  },
];

const BetHistory = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Settled");
  const data = selected === "Settled" ? settledData : unsettledData;

  return (
    <div className="min-h-screen mb-24 flex flex-col items-center">
      {/* Header */}
      <div className="w-full h-[54px] bg-gradient-yellow-headers flex items-center justify-between px-4 shadow-md text-white">
        {/* Left Side (Back Button & Title) */}
        <div className="flex items-center">
          <ArrowLeft
            className="mr-2 cursor-pointer hover:opacity-80 transition"
            onClick={() => navigate(-1)}
          />
          <span className="text-lg font-semibold">Bet History</span>
        </div>

        {/* Right Side (Buttons with Selection State) */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelected("Settled")}
            className={`flex items-center gap-1 px-3 py-1.5 text-sm font-semibold rounded-md shadow transition 
              ${
                selected === "Settled"
                  ? "bg-white text-yellow-800"
                  : "bg-yellow-500 text-gray-900"
              }`}
          >
            Settled
          </button>
          <button
            onClick={() => setSelected("Unsettled")}
            className={`flex items-center gap-1 px-3 py-1.5 text-sm font-semibold rounded-md shadow transition 
              ${
                selected === "Unsettled"
                  ? "bg-white text-yellow-800"
                  : "bg-yellow-500 text-gray-900"
              }`}
          >
            Unsettled
          </button>
        </div>
      </div>

      {/* Table Data */}
      <div className="w-full max-w-4xl mx-auto overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* Table Headers */}
          <thead>
            <tr className="bg-yellow-500 text-gray-900 text-sm md:text-base font-semibold border-b border-gray-300">
              <th className="p-3 whitespace-nowrap">Game</th>
              <th className="p-3 whitespace-nowrap">Bet Details</th>
              <th className="p-3 whitespace-nowrap">Bet Amount</th>
              <th className="p-3 whitespace-nowrap">Winning Amount</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="text-sm md:text-base transition">
                  <td className="p-3 text-white break-words">{item.game}</td>
                  <td className="p-3 text-gray-300 break-words">
                    {item.betDetails}
                  </td>
                  <td className="p-3 text-white break-words">
                    {item.betAmount}
                  </td>
                  <td
                    className={`p-3 font-semibold break-words ${
                      item.winningAmount === "Pending"
                        ? "text-yellow-400"
                        : "text-green-400"
                    }`}
                  >
                    {item.winningAmount}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="p-4 text-center text-gray-400 font-semibold"
                >
                  No Bet History Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BetHistory;
