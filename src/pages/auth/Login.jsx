import React, { useState, useEffect } from "react";
import { ArrowLeft, Phone, Mail, Lock, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [activeSection, setActiveSection] = useState("phone");
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [enteredCaptcha, setEnteredCaptcha] = useState(""); // State for user-entered captcha
  const [email, setEmail] = useState("");
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false); // State to track captcha verification
  const navigate = useNavigate();

  useEffect(() => {
    const generatedCaptcha = generateCaptcha();
    setCaptcha(generatedCaptcha);
  }, []);

  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captchaCode = "";
    for (let i = 0; i < 6; i++) {
      captchaCode += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return captchaCode;
  };

  const handleInputChange = (e, setter) => setter(e.target.value);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredCaptcha !== captcha) {
      alert("Captcha doesn't match! Please try again.");
      return;
    }
    setIsCaptchaVerified(true);
    if (activeSection === "phone") {
      console.log(`Phone Number: ${countryCode} ${phoneNumber}`);
    } else if (activeSection === "email") {
      console.log(`Email: ${email}`);
    }
    console.log(`Password: ${password}`);
    console.log(`Captcha: ${captcha}`);
  };

  return (
    <div className="w-full max-w-[500px] mx-auto">
      <div className="w-full bg-gradient-to-r from-orange-400 to-orange-600 pb-3">
        <div className="w-full h-[54px] flex items-center justify-between px-4">
          <div className="flex-shrink-0">
            <ArrowLeft size={24} className="text-white" />
          </div>
          <div className="flex-grow text-center text-white font-semibold">
            Login
          </div>
          <div className="flex-shrink-0 text-white">
            <select className="bg-transparent border-none text-white">
              <option value="en">English</option>
              <option value="ur">Urdu</option>
            </select>
          </div>
        </div>

        <div className="w-full px-4">
          <h2 className="text-2xl text-white font-semibold mb-2">Login</h2>
          <p className="text-sm text-white">
            Please log in using your phone number or email.
          </p>
          <p className="text-sm text-white">
            If you forget your password, please contact customer service.
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
          <div className="text-lg">Login with Phone</div>
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

        <div>
          <label className="text-sm text-gray-600 font-semibold">Captcha</label>
          <div className="flex items-center mt-2 border border-gray-300 rounded-lg p-2">
            <Shield size={20} className="text-gray-500 mr-3" />
            <input
              type="text"
              value={enteredCaptcha}
              onChange={(e) => setEnteredCaptcha(e.target.value)}
              placeholder="Enter captcha"
              className="w-full p-2 focus:outline-none text-sm"
            />
          </div>

          <div className="mt-4 text-center flex justify-center items-center">
            <span className="text-sm text-gray-600 mr-1">Enter the code: </span>
            <div className="text-2xl font-bold text-orange-600">{captcha}</div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-2 mt-6 text-white bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg shadow-lg text-lg font-bold transition-all"
        >
          Log In
        </button>

        <button
          onClick={() => navigate("/register")}
          className="w-full py-2 mt-6 text-orange-600 border-2 border-orange-600 bg-white rounded-lg shadow-lg text-lg font-bold hover:bg-orange-600 hover:text-white transition-all"
        >
          Register
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

export default Login;
