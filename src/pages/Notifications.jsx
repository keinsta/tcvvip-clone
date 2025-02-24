import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, MessageCircle, Info, ArrowLeft } from "lucide-react";

// Define fixed categories
const categories = [
  { id: 1, name: "Notifications", icon: <MessageCircle size={20} /> },
  { id: 2, name: "System Alert", icon: <Bell size={20} /> },
  { id: 3, name: "Information Update", icon: <Info size={20} /> },
];

// Messages grouped by categories (some are unread)
const initialMessages = [
  {
    id: 1,
    category: "Notifications",
    title: "New Message",
    message: "You have a new message from support.",
    date: "Feb 21, 2025",
    time: "10:30 AM",
    read: false,
  },
  {
    id: 2,
    category: "Notifications",
    title: "Friend Request",
    message: "John Doe sent you a friend request.",
    date: "Feb 20, 2025",
    time: "5:15 PM",
    read: true,
  },
  {
    id: 3,
    category: "System Alert",
    title: "Security Warning",
    message: "Suspicious login attempt detected.",
    date: "Feb 19, 2025",
    time: "9:45 AM",
    read: false,
  },
  {
    id: 4,
    category: "System Alert",
    title: "System Maintenance",
    message: "Scheduled maintenance on Feb 22, 2025.",
    date: "Feb 18, 2025",
    time: "6:30 PM",
    read: true,
  },
  {
    id: 5,
    category: "Information Update",
    title: "Version 2.0 Released",
    message: "New features and improvements available now.",
    date: "Feb 17, 2025",
    time: "3:00 PM",
    read: false,
  },
  {
    id: 6,
    category: "Information Update",
    title: "Policy Update",
    message: "Our privacy policy has been updated.",
    date: "Feb 16, 2025",
    time: "8:00 AM",
    read: true,
  },
];

const Notifications = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(initialMessages);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  // Count unread messages per category
  const unreadCounts = categories.reduce((acc, category) => {
    acc[category.name] = messages.filter(
      (msg) => msg.category === category.name && !msg.read
    ).length;
    return acc;
  }, {});

  // Get filtered messages based on selected category
  const filteredMessages = messages.filter(
    (msg) => msg.category === selectedCategory
  );

  // Mark messages as read when selecting a category
  const markAsRead = (category) => {
    setMessages(
      messages.map((msg) =>
        msg.category === category ? { ...msg, read: true } : msg
      )
    );
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen mb-24 flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full h-[54px] bg-gradient-to-r from-yellow-600 to-yellow-400 flex items-center px-4 shadow-md">
        <ArrowLeft
          size={24}
          className="text-white mr-2 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <p className="text-lg text-white font-semibold">Notifications</p>
      </div>

      {/* Category Selection */}
      <div className="w-full p-4">
        <div className="space-y-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`p-3 border cursor-pointer rounded-lg flex items-start space-x-3 shadow-sm transition ${
                selectedCategory === category.name ? "bg-white" : "bg-gray-300"
              }`}
              onClick={() => markAsRead(category.name)}
            >
              <div className="relative p-2 bg-gray-100 rounded-full">
                {category.icon}
                {unreadCounts[category.name] > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                )}
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs lg:text-sm font-semibold">
                  {category.name}
                </h3>
                {/* Show unread message titles */}
                {messages
                  .filter((msg) => msg.category === category.name && !msg.read)
                  .map((msg) => (
                    <p key={msg.id} className="text-xs text-red-600 mt-1">
                      {msg.title}
                    </p>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-2 w-[80%] rounded-lg border-yellow-500 my-2" />

      {/* Messages Display */}
      <div className="w-full p-4">
        {filteredMessages.length > 0 ? (
          filteredMessages.map((message) => (
            <div
              key={message.id}
              className="my-2 p-4 bg-white shadow-md rounded-lg"
            >
              <h3 className="text-sm lg:text-base font-semibold">
                {message.title}
              </h3>
              <p className="text-xs text-gray-500">
                {message.date} • {message.time}
              </p>
              <p className="text-sm text-gray-700 mt-2">{message.message}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No messages available.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
