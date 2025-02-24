import React, { useState } from "react";
import {
  Clipboard,
  RefreshCcw,
  Wallet,
  Download,
  Upload,
  Star,
  Bell,
  Gift,
  BarChart3,
  Languages,
} from "lucide-react";

import safe_banner from "../../assets/images/banners/safe_banner.png";
import { history_icons } from "../../assets/icons/wallet-icons";

const settings = [
  {
    icon: <Bell className="w-7 h-7 text-yellow-500" />,
    title: "Notifications",
    subtitle: "My Betting History",
  },
  {
    icon: <Gift className="w-7 h-7 text-yellow-500" />,
    title: "Gifts",
    subtitle: "My Transaction History",
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-yellow-500" />,
    title: "Game Statistics",
    subtitle: "My Deposit History",
  },
  {
    icon: <Languages className="w-7 h-7 text-yellow-500" />,
    title: "Languages",
    subtitle: "My Withdraw History",
  },
];

const UserProfile = () => {
  const [copied, setCopied] = useState(false);
  const [balance, setBalance] = useState(1200); // Dummy balance

  const refreshBalance = () => {
    // Simulating balance refresh
    setBalance(balance + Math.floor(Math.random() * 100));
  };

  const uid = "134ds234";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(uid);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="min-h-screen mb-24 flex flex-col items-center">
      <div className="w-full bg-gradient-yellow-headers p-4 pb-16 rounded-b-3xl">
        {/* Profile Header */}
        <div className="flex items-center gap-4 p-4 rounded-lg shadow-md">
          {/* Avatar */}
          <div className="w-16 h-16">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Avatar"
              className="w-full h-full rounded-full"
            />
          </div>

          {/* Member Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-yellow-800">
              <span className="font-semibold">Member-{uid}</span>
            </div>
            <div className="flex items-center text-xs text-yellow-800 gap-1">
              <span className="font-semibold">UID |</span>
              <span className="">{uid}</span>
              <button onClick={copyToClipboard} className="text-yellow-800 ">
                <Clipboard size={14} />
              </button>
              {copied && (
                <span className="text-green-600 text-xs">Copied!</span>
              )}
            </div>
            <div className="text-yellow-800 text-xs">
              <span className="font-semibold">Last Login:</span> 2025-02-21
              14:30:00
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 relative top-[-50px]">
        {/* Total Balance Component */}
        <div className=" bg-app-bg p-5 rounded-2xl shadow-md shadow-gray-800 space-y-4 ">
          {/* Total Balance */}
          <div className="flex justify-between items-center  p-3 rounded-lg">
            <h3 className="text-lg font-bold text-white">
              Total Balance: <span className="text-yellow-400">${balance}</span>
            </h3>
            <button
              onClick={refreshBalance}
              className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
            >
              <RefreshCcw className="w-5 h-5" />
            </button>
          </div>

          {/* Wallet, Deposit, Withdraw, SVIP Sections */}
          <div className="grid grid-cols-4 gap-3 text-center">
            <div className="flex flex-col items-center cursor-pointer">
              <Wallet className="w-7 h-7 mb-1 text-yellow-500" />
              <p className="text-sm text-white">Wallet</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <Download className="w-7 h-7 mb-1 text-yellow-500" />
              <p className="text-sm text-white">Deposit</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <Upload className="w-7 h-7 mb-1 text-yellow-500" />
              <p className="text-sm text-white">Withdraw</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <Star className="w-7 h-7 mb-1 text-yellow-500" />
              <p className="text-sm text-white">SVIP</p>
            </div>
          </div>
        </div>

        <img
          src={safe_banner}
          alt="Safe Banner"
          className="cursor-pointer my-4"
        />

        {/* Transaction History */}
        <div className=" mx-auto rounded-2xl shadow-md">
          <div className="grid grid-cols-2 gap-4">
            {history_icons.map((section, index) => (
              <div
                key={index}
                className="flex items-center p-2 bg-[#595959] rounded-lg space-x-4"
              >
                <div className="w-10 h-10 flex-shrink-0">
                  <img
                    src={section.icon}
                    alt={section.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {section.title}
                  </h3>
                  <p className="text-[10px] text-gray-200">
                    {section.subTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className=" mx-auto  rounded-2xl shadow-md my-4">
          <div className="grid grid-cols-1 gap-1">
            {settings.map((tile, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-[#595959] rounded-lg cursor-pointer hover:bg-[#4a4a4a] transition-all"
              >
                <div className="flex items-center space-x-4">
                  <span>{tile.icon}</span>
                  <h3 className="text-white font-semibold text-sm">
                    {tile.title}
                  </h3>
                </div>
                <span className="text-gray-300 text-lg">➜</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
