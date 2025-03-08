import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import gift_image from "../assets/images/gift/gift.png";

const DEPOSIT_BONUSES = {
  firstDeposit: [
    { amount: 100, bonus: 20 },
    { amount: 300, bonus: 60 },
    { amount: 500, bonus: 100 },
    { amount: 1000, bonus: 250 },
    { amount: 3000, bonus: 750 },
    { amount: 5000, bonus: 1250 },
    { amount: 10000, bonus: 3000 },
    { amount: 30000, bonus: 9000 },
    { amount: 50000, bonus: 15000 },
    { amount: 80000, bonus: 28000 },
    { amount: 100000, bonus: 35000 },
  ],
  secondDeposit: [
    { amount: 300, bonus: 55 },
    { amount: 1000, bonus: 155 },
    { amount: 5000, bonus: 255 },
    { amount: 10000, bonus: 555 },
    { amount: 50000, bonus: 1555 },
    { amount: 100000, bonus: 3555 },
  ],
  thirdDeposit: [
    { amount: 1000, bonus: 95 },
    { amount: 5000, bonus: 255 },
    { amount: 10000, bonus: 555 },
    { amount: 50000, bonus: 1555 },
    { amount: 100000, bonus: 2555 },
  ],
};

const DepositBonuses = () => {
  const navigate = useNavigate();
  const [bonuses] = useState(DEPOSIT_BONUSES);

  return (
    <div className="min-h-screen flex flex-col items-center space-y-4 pb-28">
      {/* Header */}
      <div className="w-full h-[54px] bg-gradient-yellow-headers flex items-center justify-between px-4 shadow-md text-white">
        <div className="flex justify-center">
          <ArrowLeft
            className="mr-2 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <span className="text-lg">First Recharge Bonus</span>
        </div>
        <img src={gift_image} alt="Safe Banner" className="w-28" />
      </div>

      <div className="px-4">
        <h2 className="text-3xl text-white font-extrabold text-center text-gradient mb-6">
          🎉 Deposit Bonus Offers
        </h2>

        {Object.entries(bonuses).map(([key, bonusList]) => (
          <div
            key={key}
            className="w-full max-w-lg bg-[#595959] shadow-lg rounded-lg p-5 mb-6"
          >
            <h3 className="text-xl font-bold text-white border-b pb-2 mb-4">
              {key === "firstDeposit" && "🔥 First Deposit Bonus"}
              {key === "secondDeposit" && "🎁 Second Deposit Bonus"}
              {key === "thirdDeposit" && "💎 Third Deposit Bonus"}
            </h3>

            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-white bg-yellow-600">
                  <th className="p-2 text-sm">Deposit Amount</th>
                  <th className="p-2 text-sm">Bonus</th>
                </tr>
              </thead>
              <tbody>
                {bonusList.map((bonus, index) => (
                  <tr
                    key={index}
                    className="border-t  transition-all duration-200"
                  >
                    <td className="p-2n text-gray-100">
                      ₹{bonus.amount.toLocaleString()}
                    </td>
                    <td className="p-2 text-yellow-500 font-semibold">
                      + ₹{bonus.bonus.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        <div className="w-full max-w-lg bg-[#595959] shadow-lg rounded-lg p-5 mt-6">
          <h3 className="text-xl font-bold text-white border-b pb-2 mb-4">
            📜 Bonus Rules
          </h3>
          <ul className="list-disc list-inside text-gray-300 text-xs">
            <li>
              First deposit bonus is automatically credited to your balance.
            </li>
            <li>
              Second deposit bonus is available after the first bonus is used.
            </li>
            <li>
              Third deposit bonus is activated after the second deposit bonus is
              claimed.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DepositBonuses;
