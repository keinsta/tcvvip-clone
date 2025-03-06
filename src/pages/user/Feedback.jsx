import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

const FeedbackPage = () => {
  const [activeTab, setActiveTab] = useState("feedback"); // Toggle between "Feedback" and "My Feedback"
  const [feedbackType, setFeedbackType] = useState(""); // Stores selected feedback type
  const [description, setDescription] = useState(""); // Stores user description
  const [error, setError] = useState(""); // Stores validation errors
  const [feedbackList, setFeedbackList] = useState([
    { type: "Bug", description: "Login button not working properly." },
    { type: "Suggestion", description: "Add dark mode feature." },
  ]); // Dummy past feedback data

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleSubmit = () => {
    if (!feedbackType) {
      setError("Feedback Type is required!");
      return;
    }
    if (description.length < 10) {
      setError("Description must be at least 10 characters.");
      return;
    }

    // Add new feedback to the list
    const newFeedback = { type: feedbackType, description };
    setFeedbackList([...feedbackList, newFeedback]);

    alert("Feedback Submitted Successfully! ✅");
    setError("");
    setFeedbackType("");
    setDescription("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center ">
      {/* Header */}
      <div className="w-full h-[54px] bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center px-4 shadow-md text-white">
        <ArrowLeft
          className="cursor-pointer"
          onClick={() => window.history.back()}
        />
        <span className="text-lg font-semibold ml-2">Feedback</span>
      </div>

      <div className="w-full px-4 flex flex-col items-center">
        {/* Toggle Buttons */}
        <div className="flex justify-center mt-6 space-x-4 w-full max-w-sm">
          <button
            className={`w-1/2 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "feedback"
                ? "bg-yellow-500 text-white shadow-md"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("feedback")}
          >
            Feedback
          </button>
          <button
            className={`w-1/2 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "myFeedback"
                ? "bg-yellow-500 text-white shadow-md"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("myFeedback")}
          >
            My Feedback
          </button>
        </div>

        {/* Feedback Form */}
        {activeTab === "feedback" ? (
          <div className="w-full max-w-md mt-6 bg-white shadow-lg rounded-lg p-5">
            {/* Feedback Type Selection */}
            <label className="text-sm font-semibold text-gray-700">
              Feedback Type <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {["Suggestion", "Function", "Bug", "Other"].map((type) => (
                <button
                  key={type}
                  className={`py-2 rounded-lg text-sm font-medium transition-all ${
                    feedbackType === type
                      ? "bg-yellow-500 text-white shadow-md"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setFeedbackType(type)}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Description */}
            <label className="text-sm font-semibold text-gray-700 mt-4 block">
              Description{" "}
              <span className="text-gray-500 text-xs">(Max: 250 chars)</span>
            </label>
            <textarea
              className="w-full h-24 mt-1 p-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none resize-none"
              placeholder="Write your feedback..."
              value={description}
              maxLength={250}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <p className="text-xs text-gray-500 text-right">
              {description.length}/250
            </p>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            {/* Submit Button */}
            <button
              className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold transition-all"
              onClick={handleSubmit}
            >
              Submit Feedback
            </button>
          </div>
        ) : (
          // My Feedback Section
          <div className="w-full max-w-md mt-6 bg-white shadow-lg rounded-lg p-5">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              My Feedback
            </h2>
            {feedbackList.length > 0 ? (
              feedbackList.map((feedback, index) => (
                <div
                  key={index}
                  className="p-3 mb-3 border rounded-md shadow-sm bg-gray-50"
                >
                  <p className="text-sm font-medium text-yellow-600">
                    {feedback.type}
                  </p>
                  <p className="text-sm text-gray-700">
                    {feedback.description}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">
                No feedback available.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackPage;
