import React from "react";
import {
  UserCircle,
  Bell,
  Gift,
  BarChart3,
  Languages,
  ChevronRight,
  Clipboard,
  Users,
  DollarSign,
  UserPlus,
  FileText,
  Headphones,
  Percent,
  TrendingUp,
} from "lucide-react";

const data = [
  {
    title: "Direct Subordinates",
    stats: [
      { label: "Registration Accounts", value: 0 },
      { label: "Deposit Accounts", value: 0 },
      { label: "Deposit Amount", value: 0 },
      { label: "New Deposit Accounts", value: 0 },
    ],
  },
  {
    title: "Team Subordinates",
    stats: [
      { label: "Registration Accounts", value: 0 },
      { label: "Deposit Accounts", value: 0 },
      { label: "Deposit Amount", value: 0 },
      { label: "New Deposit Accounts", value: 0 },
    ],
  },
];

const settings = [
  {
    icon: <Clipboard className="w-7 h-7 text-yellow-500" />,
    title: "Copy Invitation Code",
    subtitle: "E5C0E13182140",
  },
  {
    icon: <Users className="w-7 h-7 text-yellow-500" />,
    title: "Subordinate Data",
    subtitle: "Total Subordinates: 25",
  },
  {
    icon: <DollarSign className="w-7 h-7 text-yellow-500" />,
    title: "Commission Details",
    subtitle: "Total Earnings: $4500",
  },
  {
    icon: <UserPlus className="w-7 h-7 text-yellow-500" />,
    title: "New Subordinates",
    subtitle: "5 joined this month",
  },
  {
    icon: <FileText className="w-7 h-7 text-yellow-500" />,
    title: "Invitation Rules",
    subtitle: "Updated on 20th Feb 2025",
  },
  {
    icon: <Headphones className="w-7 h-7 text-yellow-500" />,
    title: "Agent Line Customer Service",
    subtitle: "24/7 support available",
  },
  {
    icon: <Percent className="w-7 h-7 text-yellow-500" />,
    title: "Rebate Ratio",
    subtitle: "Current Rebate: 15%",
  },
];

const AgentPage = () => {
  return (
    <div className="w-full mb-28">
      <div className="flex flex-col items-center bg-gradient-yellow-headers p-2">
        <div className="flex flex-col items-center">
          <h1 className="my-2 text-white text-lg">Agent</h1>
          <div className="flex flex-col items-center text-white my-4">
            <h3 className="text-sm ">
              Upgrade the level to increase commission income
            </h3>
            <div className="flex flex-col items-center my-2">
              <span className="text-2xl">0.00</span>
              <h5>Commission Balance</h5>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">0.00</span>
              <h5>Total Commission Yesterday</h5>
            </div>
          </div>
        </div>

        <div className="w-full px-2">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 my-2">
            <button className="bg-white text-yellow-800 px-4 py-2 rounded-lg shadow-md text-sm font-semibold">
              Turn into Balance
            </button>
            <button className="bg-white text-yellow-800 px-4 py-2 rounded-lg shadow-md text-sm font-semibold">
              Commission Withdrawal
            </button>
          </div>
        </div>
      </div>

      <div className="w-full px-4 my-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#595959] rounded-lg">
          {data.map((section, index) => (
            <div
              key={index}
              className="p-4 bg-[#595959] rounded-lg shadow flex flex-col space-y-3"
            >
              {/* Section Heading */}
              <div className="flex items-center space-x-2 text-gray-700">
                <UserCircle className="w-6 h-6 text-yellow-500" />
                <h2 className="text-sm font-semibold text-white">
                  {section.title}
                </h2>
              </div>

              {/* Stats */}
              <div className="space-y-2">
                {section.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between bg-app-bg p-2 rounded-md text-sm"
                  >
                    <span className="text-gray-100 text-xs">{stat.label}</span>
                    <span className="text-gray-100 font-semibold">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 bg-yellow-600 text-white py-1 rounded-xl">
          Invitation Link
        </button>
      </div>

      {/* Menu */}
      <div className="w-full rounded-2xl shadow-md px-4">
        <div className="grid grid-cols-1 gap-1">
          {settings.map((tile, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-[#595959] rounded-lg cursor-pointer hover:bg-[#4a4a4a] transition-all"
            >
              <div className="flex items-center space-x-4">
                <span>{tile.icon}</span>
                <h3 className="text-white font-semibold text-sm">
                  {tile.title}
                </h3>
              </div>

              {/* Right Arrow and Badge for Notifications */}
              <div className="relative flex items-center">
                <ChevronRight className="text-gray-300 text-lg ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promotion Data */}
      <div className=" p-4 rounded-lg shadow-lg w-full">
        {/* Heading */}
        <h2 className="text-xl font-semibold text-yellow-500 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-yellow-500" />
          Promotion Data
        </h2>

        {/* Data Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Single Column Items */}
          <div className="p-4 bg-[#595959] rounded-lg">
            <h3 className="text-gray-100">This Week's Commission</h3>
            <p className="text-lg font-bold text-white">0.00</p>
          </div>

          <div className="p-4 bg-[#595959] rounded-lg">
            <h3 className="text-gray-100">Direct Subordinates</h3>
            <p className="text-lg font-bold text-white">0</p>
          </div>

          {/* Two Column Items */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <div className="p-4 bg-[#595959] rounded-lg">
              <h3 className="text-gray-100">Total Commission</h3>
              <p className="text-lg font-bold text-white">0.00</p>
            </div>

            <div className="p-4 bg-[#595959] rounded-lg">
              <h3 className="text-gray-100">Total Subordinates</h3>
              <p className="text-lg font-bold text-white">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPage;
