import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, XCircle } from "lucide-react";
import useAuthStore from "../../store/authStore";
import { images } from "../../assets/images/payment-methods";

const Deposit = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [showBalance, setShowBalance] = useState(false);
  const [selected, setSelected] = useState(images[0].id);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [bonusValue, setBonusValue] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  const handleAmount = (amount, bonus) => {
    const convertedAmount =
      typeof amount === "string" && amount.includes("k")
        ? parseInt(amount.replace("k", "")) * 1000
        : parseInt(amount);
    const bonusAmount = bonus ? convertedAmount * 0.03 : null;
    setSelectedAmount(convertedAmount);
    setBonusValue(bonusAmount);
    setTotalAmount(bonusAmount + convertedAmount);
  };

  const payAmount = () => {
    console.log(typeof parseInt(totalAmount));
  };

  return (
    <div className="min-h-screen mb-24 flex flex-col items-center">
      {/* Header */}
      <div className="w-full h-[54px] bg-gradient-yellow-headers flex items-center justify-between px-4 shadow-md text-white">
        <ArrowLeft
          className="mr-4 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <span className="text-lg">Deposit</span>
        <button className="text-yellow-900 text-xs">Deposit History</button>
      </div>

      <div className="w-full px-4 mt-4">
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

        {/* Payment Methods */}
        <div className="w-full my-4 p-4 bg-[#595959] shadow-lg rounded-2xl">
          <h2 className="text-white text-xl font-semibold mb-4">
            Payment Method
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {images.map((method) => (
              <button
                key={method.id}
                className={`relative flex items-center p-3 border rounded-lg transition duration-300 text-white ${
                  selected === method.id
                    ? "border-yellow-500 bg-app-bg"
                    : "border-gray-300"
                }`}
                onClick={() => {
                  setSelected(method.id);
                  setSelectedDetail(null);
                }}
              >
                <div className="mr-3 w-7 h-7">
                  <img src={method.image} alt={method.name} />
                </div>
                <span className="text-xs sm:text-sm font-medium">
                  {method.name}
                </span>
                {method.details.some((detail) => detail.bonus) && (
                  <span className="absolute top-0 right-0 bg-yellow-700 px-1 rounded-lg text-xs sm:text-sm">
                    +3%
                  </span>
                )}
              </button>
            ))}
          </div>

          {selected && (
            <div className="mt-4 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-2">
                Payment Options{" "}
                <span className="text-xs sm:text-sm">
                  ( please select an option )
                </span>
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {images
                  .find((method) => method.id === selected)
                  ?.details.map((detail, index) => (
                    <div
                      key={index}
                      className={`p-3 bg-gradient-yellow-headers cursor-pointer shadow rounded-lg ${
                        selectedDetail === index
                          ? "border border-yellow-500"
                          : ""
                      }`}
                      onClick={() => setSelectedDetail(index)}
                    >
                      <h4 className="text-xs sm:text-sm font-semibold">
                        {detail.name}
                      </h4>
                      <p className="text-[12px] sm:text-xs">
                        Range: {detail.range}
                      </p>
                      {detail.bonus && (
                        <span className="text-[10px] sm:text-xs font-medium bg-app-bg p-1 rounded-">
                          {detail.bonus}
                        </span>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Deposit Amount */}
          {selectedDetail !== null && (
            <div className="mt-4 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-2">Deposit Amount</h3>
              <div className="grid grid-cols-3 gap-2">
                {images
                  .find((method) => method.id === selected)
                  ?.details[selectedDetail].initialDepositAmount.map(
                    (amount, index) => (
                      <div
                        key={index}
                        className="p-3 bg-gray-700 cursor-pointer shadow rounded-lg text-center"
                        onClick={() =>
                          handleAmount(
                            amount,
                            images.find((method) => method.id === selected)
                              ?.details[selectedDetail].bonus || ""
                          )
                        }
                      >
                        {amount}
                      </div>
                    )
                  )}
              </div>
            </div>
          )}

          {totalAmount !== null && (
            <div className="mt-4 p-4  bg-gradient-yellow-headers text-white rounded-lg shadow-lg flex flex-col items-center justify-center">
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">
                You Will Get
              </h3>
              <span className="text-2xl font-extrabold">{totalAmount}</span>
            </div>
          )}

          {/* Sliders Section */}
          {selectedAmount !== null && (
            <div className="mt-4 text-white">
              <h3 className="text-xs sm:text-sm font-semibold">You Deposit</h3>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  value={selectedAmount}
                  min="0"
                  max={selectedAmount}
                  className="w-full"
                  disabled
                />
                <span className="text-lg">₹{selectedAmount}</span>
              </div>
            </div>
          )}

          {bonusValue !== null && (
            <div className=" text-white">
              <h3 className="text-xs sm:text-sm font-semibold">
                Recharge Bonus
              </h3>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  value={bonusValue}
                  min="0"
                  max={bonusValue}
                  className="w-full"
                  disabled
                />
                <span className="text-lg">₹{bonusValue.toFixed(2)}</span>
              </div>
            </div>
          )}

          {totalAmount !== null && (
            <div className="w-full flex flex-col gap-4 mt-4">
              {/* Input with Clear Button */}
              <div className="relative">
                <input
                  type="number"
                  value={totalAmount}
                  onChange={(e) => setTotalAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 pr-10"
                />
                <button
                  onClick={() => setTotalAmount("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 transition"
                >
                  <XCircle size={20} />
                </button>
              </div>

              {/* Pay Button */}
              <button
                onClick={payAmount}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
              >
                Pay
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Deposit;
