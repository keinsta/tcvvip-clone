import React from "react";
import { Trophy } from "lucide-react";

const dummyData = [
  {
    id: 1,
    name: "John Doe",
    memberId: "M-001",
    prize: "$5000",
    avatar: "https://i.pravatar.cc/50?img=1",
    badge: "https://picsum.photos/80/40",
  },
  {
    id: 2,
    name: "Alice Smith",
    memberId: "M-002",
    prize: "$7000",
    avatar: "https://i.pravatar.cc/50?img=2",
    badge: "https://picsum.photos/80/40",
  },
  {
    id: 3,
    name: "Michael Johnson",
    memberId: "M-003",
    prize: "$9000",
    avatar: "https://i.pravatar.cc/50?img=3",
    badge: "https://picsum.photos/80/40",
  },
  {
    id: 4,
    name: "John Doe",
    memberId: "M-001",
    prize: "$5000",
    avatar: "https://i.pravatar.cc/50?img=1",
    badge: "https://picsum.photos/80/40",
  },
  {
    id: 5,
    name: "Alice Smith",
    memberId: "M-002",
    prize: "$7000",
    avatar: "https://i.pravatar.cc/50?img=2",
    badge: "https://picsum.photos/80/40",
  },
  {
    id: 6,
    name: "Michael Johnson",
    memberId: "M-003",
    prize: "$9000",
    avatar: "https://i.pravatar.cc/50?img=3",
    badge: "https://picsum.photos/80/40",
  },
];

const WinTile = () => {
  return (
    <div className="flex flex-col items-center  bg-gray-100 p-2 space-y-3">
      <div className="w-full flex items-center pl-4 py-2">
        <Trophy size={30} className="text-orange-500 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">
          Winning Information
        </h1>
      </div>
      {dummyData.map((item) => (
        <div
          key={item.id}
          className="w-full h-[60px] bg-white rounded-lg shadow-md flex items-center justify-between px-4 space-x-4"
        >
          {/* User Avatar & ID */}
          <div className="flex items-center">
            <img
              src={item.avatar}
              alt="User Avatar"
              className="w-[40px] h-[40px] mr-2 rounded-full border border-gray-300"
            />
            <p className="text-gray-500 text-sm">ID: {item.memberId}</p>
          </div>

          {/* Badge Image */}
          <img
            src={item.badge}
            alt="Badge"
            className="w-[80px] h-[40px] rounded-md shadow-sm"
          />

          {/* Winning Prize */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold text-orange-500">
              {item.prize}
            </p>
            <p className="text-sm text-gray-500">Winning Prize</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WinTile;
