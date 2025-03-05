import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  CreditCard,
  Bitcoin,
  Wallet,
  DollarSign,
  Key,
  PlusCircle,
  Clock,
  Repeat,
  AlertCircle,
  ChevronRight,
  XCircle,
} from "lucide-react";
import Select from "react-select";
import useAuthStore from "../../store/authStore";
import wallet_banner from "../../assets/images/banners/wallet_banner.jpg";

const withdrawalOptions = [
  {
    name: "Bank Card",
    icon: CreditCard,
    details: {
      time: "00:00 - 24:00",
      range: "₹110.00 - ₹100,000.00",
      remaining: 3,
      requirement: "₹278.00 to withdraw",
    },
  },
  {
    name: "USDT",
    icon: Bitcoin,
    details: {
      time: "00:00 - 24:00",
      range: "10.00 - 1,000.00 USDT",
      remaining: 3,
      requirement: "₹278.00 to withdraw",
    },
  },
  {
    name: "Wallet",
    icon: Wallet,
    details: {
      time: "00:00 - 24:00",
      range: "₹110.00 - ₹100,000.00",
      remaining: 3,
      requirement: "₹278.00 to withdraw",
    },
  },
];

const bankOptions = [
  { value: "SBI", label: "State Bank of India" },
  { value: "HDFC", label: "HDFC Bank" },
  { value: "ICICI", label: "ICICI Bank" },
  { value: "AXIS", label: "Axis Bank" },
  { value: "PNB", label: "Punjab National Bank" },
  { value: "BOB", label: "Bank of Baroda" },
  { value: "CANARA", label: "Canara Bank" },
];
const usdtOptions = [{ value: "TRC20", label: "TRC20" }];
const walletOptions = [{ value: "INCASH", label: "INCASH" }];

const Withdraw = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [showBalance, setShowBalance] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("Bank Card");

  const [showBankModal, setShowBankModal] = useState(false);
  const [bankDetails, setBankDetails] = useState({
    bank: null,
    cardholderName: "",
    accountNumber: "",
    ifscCode: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    branch: "",
  });
  const [showUsdtModal, setShowUsdtModal] = useState(false);
  const [usdtDetails, setUsdtDetails] = useState({
    usdtWalletAddress: "",
  });
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [walletDetails, setWalletDetails] = useState({
    walletAddress: "",
  });

  const selectedOption = withdrawalOptions.find(
    (option) => option.name === selectedMethod
  );

  const handleBankDetailsChange = (e) => {
    setBankDetails({ ...bankDetails, [e.target.name]: e.target.value });
  };

  const handleUsdtDetailsChange = (e) => {
    setUsdtDetails({ ...usdtDetails, [e.target.name]: e.target.value });
  };

  const handleWalletDetailsChange = (e) => {
    setWalletDetails({ ...walletDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(bankDetails);
    console.log(usdtDetails);
    console.log(walletDetails);
  };

  return (
    <div className="min-h-screen mb-24 flex flex-col items-center">
      {/* Header */}
      <div className="w-full h-[54px] bg-gradient-yellow-headers flex items-center justify-between px-4 shadow-md text-white">
        <div className="flex items-center">
          <ArrowLeft
            className="mr-4 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <span className="text-lg">Withdraw</span>
        </div>
        <button className="text-yellow-900 text-xs">Withdraw History</button>
      </div>

      <div className="w-full px-4 mt-4 space-y-4">
        {/* Card Component */}
        <div className="relative h-40 bg-gradient-yellow-headers text-white rounded-2xl shadow-xl p-5 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Total Balance</h2>
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="focus:outline-none"
            >
              {showBalance ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>
          <div className="text-2xl font-bold tracking-wide">
            {showBalance
              ? `₹${user?.totalBalance.toLocaleString()}`
              : "•••••••"}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm">Member ID</p>
            <span className="text-lg font-semibold">
              {user?.uid.replace("MEMBER-", "")}
            </span>
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="flex flex-col items-center w-full my-4 p-4 bg-[#595959] shadow-lg rounded-2xl space-y-4">
          <div className="w-full max-w-[500px]">
            <div className="flex gap-4">
              {withdrawalOptions.map(({ icon: Icon, name }) => (
                <div
                  key={name}
                  className={`relative flex flex-col items-center justify-center flex-1 p-3 border rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white cursor-pointer ${
                    selectedMethod === name ? "border-yellow-500" : ""
                  }`}
                  onClick={() => setSelectedMethod(name)}
                >
                  <Icon className="w-6 h-6 text-yellow-500" />
                  <p className="mt-1 text-xs sm:text-sm font-semibold">
                    {name}
                  </p>

                  {/* Checkmark Icon for Selected Option */}
                  {selectedMethod === name && (
                    <div className="absolute top-2 right-2 text-green-500">
                      ✔
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Payment Input Field */}
          <div className="relative w-full mt-4">
            <span className="absolute inset-y-0 left-3 flex items-center text-yellow-500">
              <DollarSign className="w-5 h-5" />
            </span>
            <input
              className="w-full p-3 pl-10 text-white placeholder-gray-300 rounded-md bg-app-bg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 no-spinner"
              placeholder="Please enter withdrawal amount"
              type="number"
            />
          </div>

          <div className="w-full">
            <h3 className="text-white font-semibold">Receiving Amount</h3>
          </div>
          {/* Dynamic Section Based on Selected Method */}
          {selectedMethod === "Bank Card" && (
            <div className="w-full flex justify-center items-center bg-white rounded-md border-2 border-yellow-500 cursor-pointer p-2">
              <button
                onClick={() => setShowBankModal(true)}
                className="flex items-center text-sm space-x-1 text-white bg-yellow-600 p-2 rounded-lg transition-transform transform hover:scale-105"
              >
                <PlusCircle size={20} />
                <span>Add Bank Account Number</span>
              </button>
            </div>
          )}
          {selectedMethod === "USDT" && (
            <div className="w-full flex justify-center items-center bg-white rounded-md border-2 border-yellow-500 cursor-pointer p-2">
              <button
                onClick={() => setShowUsdtModal(true)}
                className="flex items-center text-sm space-x-1 text-white bg-yellow-600 p-2 rounded-lg transition-transform transform hover:scale-105"
              >
                <PlusCircle size={20} />
                <span>Add USDT</span>
              </button>
            </div>
          )}
          {selectedMethod === "Wallet" && (
            <div className="w-full flex flex-col items-center rounded-md bg-white cursor-pointer">
              <img src={wallet_banner} className="rounded-md" />
              <button
                onClick={() => setShowWalletModal(true)}
                className="flex items-center text-sm space-x-1 my-1 text-white bg-yellow-600 p-2 rounded-lg transition-transform transform hover:scale-105"
              >
                <PlusCircle size={20} />
                <span>Wallet</span>
              </button>
            </div>
          )}

          {/* Withdrawal Password Input Field */}
          <div className="relative w-full mt-4">
            <span className="absolute inset-y-0 left-3 flex items-center text-yellow-500">
              <Key className="w-5 h-5" />
            </span>
            <input
              className="w-full p-3 pl-10 text-white placeholder-gray-300 rounded-md bg-app-bg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 no-spinner"
              placeholder="Enter withdrawal password"
              type="password"
            />
          </div>

          <button className="w-[50%] py-2 text-white font-semibold bg-gradient-yellow-headers rounded-3xl shadow-xl transition-transform transform hover:scale-105 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            Withdraw
          </button>
        </div>

        <div className="w-full max-w-[500px] bg-white border-2 border-yellow-500 rounded-lg p-4 shadow-md">
          {selectedMethod === "Wallet" && (
            <div className="w-full max-w-[500px] bg-gray-100 border-2 border-yellow-500 rounded-lg p-4 shadow-md mt-4">
              <h3 className="text-lg font-semibold text-yellow-600">
                INCASH Pay
              </h3>
              <p className="text-sm text-gray-700">
                Supports UPI for fast payment, and 3% bonuses for withdrawals
                INCASH Pay transaction rules Your INCASH wallet has not been
                activated yet
              </p>

              <h3 className="text-lg font-semibold text-yellow-600 mt-2">
                INCASH Wallet
              </h3>
              <p className="text-sm text-gray-700">
                INCASH Wallet is a third-party payment service platform that
                facilitates fast payments on the platform using INCASH banlance
                (digital currency) Safe, stable and fastSupports UPI for fast
                payment, and 3% bonuses for withdrawals.
              </p>
              <a
                href="#"
                className="mt-1 flex items-center text-sm text-yellow-800"
              >
                How to activate INCASH Wallet <ChevronRight size={18} />
              </a>

              <h4 className="text-md font-semibold text-yellow-600 mt-2">
                INCASH Wallet Features:
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Fast and secure digital payments.</li>
                <li>Withdraw balance easily to INCASH Wallet.</li>
                <li>Quickly sell balance through UPI to get rupees.</li>
                <li>Additional rewards for transactions via UPI.</li>
                <li>Avoid bank transaction limits while playing.</li>
              </ul>
            </div>
          )}
          <div className="mt-2 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-300">
            <div className="flex flex-col items-center p-3">
              <Clock className="w-6 h-6 text-yellow-500 mb-1" />
              <p className="text-xs text-gray-600 text-center">
                Withdrawal Time
              </p>
              <p className="text-xs sm:text-sm font-semibold text-center">
                {selectedOption.details.time}
              </p>
            </div>
            <div className="flex flex-col items-center p-3">
              <DollarSign className="w-6 h-6 text-yellow-500 mb-1" />
              <p className="text-xs text-gray-600 text-center">Amount Range</p>
              <p className="text-xs sm:text-sm font-semibold text-center">
                {selectedOption.details.range}
              </p>
            </div>
            <div className="flex flex-col items-center p-3">
              <Repeat className="w-6 h-6 text-yellow-500 mb-1" />
              <p className="text-xs text-gray-600 text-center">
                Remaining Withdrawals
              </p>
              <p className="text-xs sm:text-sm font-semibold text-center">
                {selectedOption.details.remaining}
              </p>
            </div>
            <div className="flex flex-col items-center p-3">
              <AlertCircle className="w-6 h-6 text-yellow-500 mb-1" />
              <p className="text-xs text-gray-600 text-center">
                Betting Requirement
              </p>
              <p className="text-xs sm:text-sm font-semibold text-center">
                {selectedOption.details.requirement}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bank Modal */}
      {showBankModal && (
        <div className="fixed inset-0 pt-4 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 mb-24 rounded-lg w-[90%]">
            <XCircle
              className="w-6 h-6 cursor-pointer float-right"
              onClick={() => setShowBankModal(false)}
            />
            <h2 className="text-lg font-semibold mb-4">Add Bank Account</h2>
            <Select
              options={bankOptions}
              isSearchable
              placeholder="Search and select Bank"
              onChange={(selected) =>
                setBankDetails({ ...bankDetails, bank: selected })
              }
            />
            {Object.keys(bankDetails).map((key) =>
              key !== "bank" ? (
                <input
                  key={key}
                  type="text"
                  name={key}
                  placeholder={`Please enter ${key.replace(/([A-Z])/g, " $1")}`}
                  onChange={handleBankDetailsChange}
                  className="w-full mt-2 p-2 border rounded"
                />
              ) : null
            )}
            <button
              className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md w-full"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <p className="text-center text-xs text-gray-600 mt-2">
              Warm reminder: Please fill in the withdrawal bank card information
              carefully. Once submitted, this information will be your only
              withdrawal bank.
            </p>
          </div>
        </div>
      )}

      {/* USDT Modal */}
      {showUsdtModal && (
        <div className="fixed inset-0 pt-4 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 mb-24 rounded-lg w-[90%]">
            <XCircle
              className="w-6 h-6 cursor-pointer float-right"
              onClick={() => setShowUsdtModal(false)}
            />
            <h2 className="text-lg font-semibold mb-4">Add USDT</h2>
            <Select
              options={usdtOptions}
              isSearchable
              placeholder="USDT Type"
              onChange={(selected) =>
                setUsdtDetails({ ...usdtDetails, usdtType: selected })
              }
            />
            {Object.keys(usdtDetails).map((key) =>
              key !== "usdtType" ? (
                <input
                  key={key}
                  type="text"
                  name={key}
                  placeholder={`Please enter ${key.replace(/([A-Z])/g, " $1")}`}
                  onChange={handleUsdtDetailsChange}
                  className="w-full mt-2 p-2 border rounded"
                />
              ) : null
            )}
            <button
              className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md w-full"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <p className="text-center text-xs text-gray-600 mt-2">
              USDT (TRC) address consists of 34 characters, starting with the
              letter T.
            </p>
          </div>
        </div>
      )}

      {/* Wallet Modal */}
      {showWalletModal && (
        <div className="fixed inset-0 pt-4 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 mb-24 rounded-lg w-[90%]">
            <XCircle
              className="w-6 h-6 cursor-pointer float-right"
              onClick={() => setShowWalletModal(false)}
            />
            <h2 className="text-lg font-semibold mb-4">Add USDT</h2>
            <Select
              options={walletOptions}
              isSearchable
              placeholder="Wallet Type"
              onChange={(selected) =>
                setWalletDetails({ ...walletDetails, walletType: selected })
              }
            />
            {Object.keys(walletDetails).map((key) =>
              key !== "walletType" ? (
                <input
                  key={key}
                  type="text"
                  name={key}
                  placeholder={`Please enter ${key.replace(/([A-Z])/g, " $1")}`}
                  onChange={handleWalletDetailsChange}
                  className="w-full mt-2 p-2 border rounded"
                />
              ) : null
            )}
            <button
              className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md w-full"
              onClick={handleSubmit}
            >
              Submit
            </button>
            {/* <p className="text-center text-xs text-gray-600 mt-2">
              Warm reminder: Please fill in the withdrawal bank card information
              carefully. Once submitted, this information will be your only
              withdrawal bank.
            </p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Withdraw;
