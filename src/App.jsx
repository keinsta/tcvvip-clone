import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useAuthStore from "./store/authStore";

import Footer from "./components/Footer";

import PrivateRoute from "./routes/PrivateRoute";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Promotions from "./pages/Promotions";
import Notifications from "./pages/Notifications";
import AgentPage from "./pages/AgentPage";
import UserProfile from "./pages/user/UserProfile";
import UserWallet from "./pages/user/UserWallet";
import Deposit from "./pages/user/Deposit";
import Avatar from "./pages/user/Avatar";
import Settings from "./pages/user/Settings";
import ForgotPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/ResetPassword";

const App = () => {
  const { fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center bg-gray-500">
      {/* Outer container that takes full screen height */}
      <div className="w-full max-w-[500px] bg-app-bg shadow-xl relative overflow-hidden flex flex-col min-h-screen">
        {/* Content Section (This grows and pushes footer to bottom) */}
        <div className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/promotion" element={<Promotions />} />
              <Route path="/user-me" element={<UserProfile />} />
              <Route path="/user-me/settings" element={<Settings />} />
              <Route path="/change-avatar" element={<Avatar />} />
              <Route path="/user-message" element={<Notifications />} />
              <Route path="/agent" element={<AgentPage />} />
              <Route path="/wallet" element={<UserWallet />} />
              <Route path="/deposit" element={<Deposit />} />
            </Route>
          </Routes>
        </div>

        {/* Footer (Always at bottom, no overlap) */}
        <Footer />
      </div>
    </main>
  );
};

export default App;
