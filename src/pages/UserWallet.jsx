import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { icons } from "../assets/icons/wallet-icons";

const UserWallet = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-slate-100 h-[100vh]">
      <div className="w-full bg-gradient-to-r from-orange-400 to-orange-600 pb-6 mb-2">
        <div className="w-full flex items-center justify-between px-4 pt-2">
          <div className="flex-shrink-0">
            <ArrowLeft size={24} className="text-white" />
          </div>

          <div className="flex-shrink-0 text-white">
            <select className="bg-transparent border-none text-white">
              <option value="en">English</option>
              <option value="ur">Urdu</option>
            </select>
          </div>
        </div>

        <div className="w-full px-4 flex flex-col items-center">
          <div className=" text-white flex flex-col items-center">
            <img src={icons[0].icon} alt="Wallet-Icon" className="w-10" />
            <div className="flex flex-col items-center">
              <h3 className="text-2xl">$0.00</h3>
              <p className="text-xs">Total Balance</p>
            </div>
          </div>

          <div className="text-white flextext-white flex justify-evenly w-full">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl">$0.00</h3>
              <p className="text-xs">Withdraw Amount</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl">$0.00</h3>
              <p className="text-xs">Deposit Amount</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[95%] mx-auto bg-white rounded-lg shadow-md mt-[-20px] p-4">
        <div className="flex justify-around">
          <div className="relative w-28 h-28">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-300"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
              <circle
                className="text-blue-500"
                strokeWidth="10"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (251.2 * progress) / 100}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-lg text-gray-500">
              {progress}%
            </div>
          </div>
          <div className="relative w-28 h-28">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-300"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
              <circle
                className="text-blue-500"
                strokeWidth="10"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (251.2 * progress) / 100}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-lg text-gray-500">
              {progress}%
            </div>
          </div>
        </div>
        <button className="bg-gradient-to-r from-orange-400 to-orange-600 w-full rounded-3xl p-2 my-2 text-white font-semibold">
          Main Wallet Transfer
        </button>
        <div className="flex justify-between p-4">
          {icons.slice(1).map((icon, index) => (
            <div key={index} className="flex flex-col items-center w-12">
              <div className=" p-2 bg-orange-100 rounded-2xl mb-2">
                <img src={icon.icon} />
              </div>
              <p className="text-xs text-center">{icon.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 p-4 mt-1">
        {[
          { amount: "$1200", text: "Total Balance" },
          { amount: "$300", text: "Pending Withdrawal" },
          { amount: "$500", text: "Total Deposited" },
          { amount: "$200", text: "Last Withdrawal" },
          { amount: "$100", text: "Bonus Earned" },
          { amount: "$50", text: "Referral Earnings" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg"
          >
            <span className="text-sm font-bold text-blue-600">
              {item.amount}
            </span>
            <span className="text-gray-700 text-xs text-center">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserWallet;
