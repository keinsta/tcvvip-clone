import React, { useState } from "react";
import { ArrowLeft, Phone, Mail, Lock, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../config/axiosInstance";

const Register = () => {
  const [activeSection, setActiveSection] = useState("phone");
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isAgreed, setIsAgreed] = useState(false); // State for agreement checkbox
  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };
  const navigate = useNavigate();

  const handleInputChange = (e, setter) => setter(e.target.value);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleAgreementChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAgreed) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    let data = {};
    if (activeSection === "email") {
      if (!isValidEmail(email)) {
        alert("Please enter a valid email address!");
        return;
      }
      data = {
        email,
        password,
      };
    } else if (activeSection === "phone") {
      data = {
        phone: `${countryCode}${phoneNumber}`,
        password,
      };
    }

    console.log(data);
  };

  return (
    <div className="w-full max-w-[500px] mx-auto mb-10">
      <div className="w-full bg-gradient-to-r from-orange-400 to-orange-600 pb-3">
        <div className="w-full h-[54px] flex items-center justify-between px-4">
          <div className="flex-shrink-0">
            <ArrowLeft size={24} className="text-white" />
          </div>
          <div className="flex-grow text-center text-white font-semibold">
            Register
          </div>
          <div className="flex-shrink-0 text-white">
            <select className="bg-transparent border-none text-white">
              <option value="en">English</option>
              <option value="ur">Urdu</option>
            </select>
          </div>
        </div>

        <div className="w-full px-4">
          <h2 className="text-2xl text-white font-semibold mb-2">Register</h2>
          <p className="text-sm text-white">
            Please register using your phone number or email.
          </p>
        </div>
      </div>

      <div className="w-full h-[70px] flex border-b border-gray-300">
        <div
          className={`flex flex-col items-center justify-center w-1/2 cursor-pointer ${
            activeSection === "phone"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-500"
          }`}
          onClick={() => handleSectionClick("phone")}
        >
          <Phone size={24} className="mr-4" />
          <div className="text-lg">Register with Phone</div>
        </div>

        <div
          className={`flex flex-col items-center justify-center w-1/2 cursor-pointer ${
            activeSection === "email"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-600"
          }`}
          onClick={() => handleSectionClick("email")}
        >
          <Mail size={24} className="mr-4" />
          <div className="text-lg">Email Account</div>
        </div>
      </div>

      <div className="w-full p-4 space-y-6">
        {activeSection === "phone" && (
          <div>
            <label className="text-sm text-gray-600 font-semibold">
              Phone Number
            </label>
            <div className="flex items-center mt-2 border border-gray-300 rounded-lg p-2">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="border-none text-sm focus:ring-0 w-1/4 p-1 rounded-l-lg"
              >
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
              </select>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => handleInputChange(e, setPhoneNumber)}
                placeholder="Enter phone number"
                className="w-3/4 p-2 focus:outline-none rounded-r-lg text-sm"
              />
            </div>
          </div>
        )}

        {activeSection === "email" && (
          <div>
            <label className="text-sm text-gray-600 font-semibold">
              Email Address
            </label>
            <div className="flex items-center mt-2 border border-gray-300 rounded-lg p-2">
              <input
                type="email"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
                placeholder="Enter your email"
                className="w-full p-2 focus:outline-none text-sm"
              />
            </div>
          </div>
        )}

        <div>
          <label className="text-sm text-gray-600 font-semibold">
            Password
          </label>
          <div className="flex items-center mt-2 border border-gray-300 rounded-lg p-2">
            <Lock size={20} className="text-gray-500 mr-3" />
            <input
              type="password"
              value={password}
              onChange={(e) => handleInputChange(e, setPassword)}
              placeholder="Enter your password"
              className="w-full p-2 focus:outline-none text-sm"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={handleAgreementChange}
            className="h-5 w-5"
          />
          <label className="text-sm text-gray-600">
            I agree to the terms and conditions.
          </label>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-2 mt-6 text-white bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg shadow-lg text-lg font-bold transition-all"
        >
          Register
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full py-2 mt-6 text-orange-600 border-2 border-orange-600 bg-white rounded-lg shadow-lg text-lg font-bold hover:bg-orange-600 hover:text-white transition-all"
        >
          Login
        </button>

        <div>
          <div className="w-full flex justify-between items-center mt-6">
            <div className="flex items-center cursor-pointer">
              <Lock size={20} className="text-gray-600 mr-2" />
              <span className="text-sm text-gray-600">Forget Password</span>
            </div>
            <div className="flex items-center cursor-pointer">
              <Shield size={20} className="text-gray-600 mr-2" />
              <span className="text-sm text-gray-600">Customer Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
