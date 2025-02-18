import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const App = () => {
  return (
    <main className="flex flex-col  items-center justify-center bg-gray-100">
      {/* Outer container that takes full screen height */}
      <div className="w-full max-w-[500px] bg-white shadow-xl relative overflow-hidden flex flex-col min-h-screen">
        {/* Content Section (This grows and pushes footer to bottom) */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>

        {/* Footer (Always at bottom, no overlap) */}
        <Footer />
      </div>
    </main>
  );
};

export default App;
