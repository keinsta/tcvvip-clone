import React from "react";
import { Home, Percent, Users, Wallet, User } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0  w-full max-w-[500px] h-[70px] bg-white flex items-center justify-around shadow-t-md border-t">
      <FooterItem icon={<Home size={24} />} label="Home" />
      <FooterItem icon={<Percent size={24} />} label="Promotion" />

      {/* Central Agent Icon (Larger & Raised) */}
      <div className="flex flex-col items-center relative -top-4">
        <FooterItem icon={<Users size={32} />} label="Agent" isCentral />
      </div>

      <FooterItem icon={<Wallet size={24} />} label="Wallet" />
      <Link to={"/login"}>
        <FooterItem icon={<User size={24} />} label="Me" />
      </Link>
    </footer>
  );
};

// Reusable Footer Item Component
const FooterItem = ({ icon, label, isCentral }) => {
  return (
    <div
      className={`flex flex-col items-center cursor-pointer transition-all duration-300
      ${
        isCentral
          ? "text-orange-500 scale-110"
          : "text-gray-600 hover:text-orange-500"
      }
      `}
    >
      <div
        className={
          isCentral
            ? "hover:scale-125 transition-transform"
            : "hover:scale-110 transition-transform"
        }
      >
        {icon}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
};

export default Footer;
