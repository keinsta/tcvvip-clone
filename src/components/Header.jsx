import React from "react";
import { Bell } from "lucide-react";
import HeaderLogo from "../assets/images/HeaderLogo.png";

const Header = () => {
  return (
    <header className="w-full h-[54px] bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-between px-4 shadow-md ">
      {/* Logo Image */}
      <div className="w-28 h-10">
        <img
          src={HeaderLogo}
          alt="MyApp Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Bell Icon Button */}
      <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-200 transition">
        <Bell className="w-5 h-5 text-orange-600" />
      </button>
    </header>
  );
};

export default Header;
