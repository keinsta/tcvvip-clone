import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AppDownloadReward = () => {
  const navigate = useNavigate();
  const [rewardCollected, setRewardCollected] = useState(false);
  const [rewardHistory, setRewardHistory] = useState([]);

  // Handle reward collection
  const collectReward = () => {
    if (!rewardCollected) {
      const newReward = {
        amount: 40,
        time: new Date().toLocaleString(),
      };
      setRewardHistory([newReward, ...rewardHistory]);
      setRewardCollected(true);
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <div className="w-full h-[54px] bg-gradient-yellow-headers flex items-center justify-between px-4 shadow-md text-white">
        <div className="flex justify-center">
          <ArrowLeft
            className="mr-2 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <span className="text-lg">Claim History</span>
        </div>
      </div>

      <div className="min-h-screen px-4">
        <div className="bg-[#595959] shadow-lg rounded-lg p-6 w-full max-w-md text-center">
          <h2 className="text-white text-2xl font-extrabold text-gradient mb-4">
            🎁 App Download Reward
          </h2>
          <p className="text-gray-200 text-lg mb-6">
            Download the app and get ₹40 as a reward.
          </p>

          {!rewardCollected ? (
            <button
              onClick={collectReward}
              className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md animate-pulse hover:scale-105 transition-all duration-300"
            >
              🎉 Collect ₹40 Reward
            </button>
          ) : (
            <p className="text-green-600 font-bold text-lg">
              ✅ Reward Collected!
            </p>
          )}
        </div>

        {/* {rewardHistory.length > 0 && ( */}
        <div className="mt-8 w-full max-w-md bg-[#595959] shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-white border-b pb-2 mb-4">
            📜 Reward History
          </h3>
          <ul className="text-white">
            {rewardHistory.map((reward, index) => (
              <li key={index} className="border-b py-2 flex justify-between">
                <span>₹{reward.amount}</span>
                <span className="text-sm text-gray-200">{reward.time}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default AppDownloadReward;
