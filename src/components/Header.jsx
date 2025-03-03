import React from "react";
import { useNavigate } from "react-router-dom";
import { Bell } from "lucide-react";
import HeaderLogo from "../assets/images/HeaderLogo.png";
import useNotificationStore from "../store/useNotificationStore";

const Header = () => {
  const navigate = useNavigate();
  const { unreadCount } = useNotificationStore(); // Get unread notifications count

  return (
    <header className="w-full h-[54px] bg-gradient-yellow-headers flex items-center justify-between px-4 shadow-md">
      {/* Logo Image */}
      <div className="w-28 h-10">
        <img
          src={HeaderLogo}
          alt="MyApp Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Bell Icon Button with Red Dot if Unread Notifications Exist */}
      <button
        onClick={() => navigate("/user-message")}
        className="relative p-2 rounded-full bg-white shadow-md hover:bg-gray-200 transition"
      >
        <Bell className="w-5 h-5 text-yellow-600" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
        )}
      </button>
    </header>
  );
};

export default Header;
