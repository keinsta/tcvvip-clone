import React, { useState } from "react";
import { XCircle } from "lucide-react";
import Select from "react-select";
import axiosInstance from "../../../config/axiosInstance";

const usdtOptions = [{ value: "TRC20", label: "TRC20" }];

const USDTModal = ({ setShowUsdtModal, setDetails }) => {
  const [response, setResponse] = useState(null);

  const [usdtDetails, setUsdtDetails] = useState({
    usdtWalletAddress: "",
    usdtType: "",
  });
  const handleUsdtDetailsChange = (e) => {
    setUsdtDetails({ ...usdtDetails, [e.target.name]: e.target.value });
  };
  const handleUSDTPayment = async () => {
    try {
      const response = await axiosInstance.post(
        "/finance/update-user-finance-details",
        { details: usdtDetails, method: "usdt" }
      );
      setResponse(response.data);

      const details = response.data.financeAccount?.methodDetails;
      const { usdtType, usdtWalletAddress } = details;

      setDetails({
        usdtType,
        usdtWalletAddress,
      });
      setTimeout(() => {
        setShowUsdtModal(false);
      }, 1000);
    } catch (error) {
      setResponse(error.response.data);
      setTimeout(() => {
        setShowUsdtModal(false);
      }, 1000);
    }
  };
  return (
    <div className="w-full max-w-[500px] mx-auto fixed inset-0 pt-4 flex items-center justify-center bg-black bg-opacity-50">
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
          className="text-xs sm:text-sm"
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
              className="w-full mt-2 p-2 border rounded text-xs sm:text-sm"
            />
          ) : null
        )}
        <button
          className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md w-full"
          onClick={handleUSDTPayment}
        >
          Add
        </button>
        {response?.success === true && (
          <p className="text-sm text-center text-green-600 font-semibold mt-1">
            USDT Details Added Successfully
          </p>
        )}
        {response?.success === false && (
          <p className="text-sm text-center text-red-600 font-semibold mt-1">
            Failed to Add USDT Details
          </p>
        )}
        <p className="text-center text-xs text-gray-600 mt-2">
          USDT (TRC) address consists of 34 characters, starting with the letter
          T.
        </p>
      </div>
    </div>
  );
};

export default USDTModal;
