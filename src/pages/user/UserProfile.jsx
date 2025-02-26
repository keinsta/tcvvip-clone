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
  ChevronRight,
  Settings,
  MessageSquare,
  Megaphone,
  Headphones,
  BookOpen,
  Info,
  LogOut,
} from "lucide-react";
import useUserStore from "../../store/userStore";
import useAuthStore from "../../store/authStore";
import safe_banner from "../../assets/images/banners/safe_banner.png";
import { history_icons } from "../../assets/icons/wallet-icons";
import axiosInstance from "../../config/axiosInstance";

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
const services = [
  { icon: <Settings className="w-7 h-7 text-yellow-500" />, title: "Settings" },
  {
    icon: <MessageSquare className="w-7 h-7 text-yellow-500" />,
    title: "Feedback",
  },
  {
    icon: <Megaphone className="w-7 h-7 text-yellow-500" />,
    title: "Announcement",
  },
  {
    icon: <Headphones className="w-7 h-7 text-yellow-500" />,
    title: "Customer Service",
  },
  {
    icon: <BookOpen className="w-7 h-7 text-yellow-500" />,
    title: "Beginner's Guide",
  },
  { icon: <Info className="w-7 h-7 text-yellow-500" />, title: "About Us" },
];

const UserProfile = () => {
  const [copied, setCopied] = useState(false);
  const [balance, setBalance] = useState(1200); // Dummy balance
  const { notifications, language, markNotificationsAsRead } = useUserStore(); // Zustand store

  const refreshBalance = () => {
    // Simulating balance refresh
    setBalance(balance + Math.floor(Math.random() * 100));
  };

  const uid = "134ds234";

  const handleLogout = async () => {
    await axiosInstance
      .get("/auth/logout")
      .then((response) => {
        alert(response.data.message);
        useAuthStore.getState().logout();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

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
          <div className="grid grid-cols-4 gap-5 text-center">
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

        {/* Banner Image */}
        <img
          src={safe_banner}
          alt="Safe Banner"
          className="cursor-pointer my-4"
        />

        {/* Transaction History */}
        <div className=" rounded-2xl shadow-md">
          <div className="grid grid-cols-2 gap-4">
            {history_icons.map((section, index) => (
              <div
                key={index}
                className="flex items-center p-2 bg-[#595959] rounded-lg space-x-2 cursor-pointer"
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
        <div className="rounded-2xl shadow-md my-4">
          <div className="grid grid-cols-1 gap-1">
            {settings.map((tile, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-[#595959] rounded-lg cursor-pointer hover:bg-[#4a4a4a] transition-all"
                onClick={() =>
                  tile.key === "notifications" && markNotificationsAsRead()
                }
              >
                <div className="flex items-center space-x-4">
                  <span>{tile.icon}</span>
                  <h3 className="text-white font-semibold text-sm">
                    {tile.title}
                  </h3>
                </div>

                {/* Right Arrow and Badge for Notifications */}
                <div className="relative flex items-center">
                  {tile.key === "notifications" && notifications > 0 && (
                    <span className="absolute -right-3 -top-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {notifications}
                    </span>
                  )}
                  {tile.key === "languages" ? (
                    <span className="text-gray-300 text-sm">{language}</span>
                  ) : null}
                  <ChevronRight className="text-gray-300 text-lg ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Center */}
        <div className="p-6 bg-[#595959] rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Service Center</h2>
          <div className="grid grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-lg cursor-pointer transition"
              >
                {service.icon}
                <p className="text-xs text-white mt-2 text-center">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full flex justify-center my-4 border-2 border-gray-400 rounded-2xl py-1 text-gray-400"
        >
          <LogOut /> <span className="ml-1">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
