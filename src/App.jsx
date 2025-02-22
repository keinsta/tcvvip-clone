import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Promotions from "./pages/Promotions";
import UserWallet from "./pages/UserWallet";

const App = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-500">
      {/* Outer container that takes full screen height */}
      <div className="w-full max-w-[500px] bg-app-bg shadow-xl relative overflow-hidden flex flex-col min-h-screen">
        {/* Content Section (This grows and pushes footer to bottom) */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/promotion" element={<Promotions />} />
            <Route path="/wallet" element={<UserWallet />} />
          </Routes>
        </div>

        {/* Footer (Always at bottom, no overlap) */}
        <Footer />
      </div>
    </main>
  );
};

export default App;
