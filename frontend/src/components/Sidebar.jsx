// src/components/Sidebar.jsx
import React from "react";
import profileicon from "../assets/images/user-1.png"; // Default staff image
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const staffMembers = [
  { name: "Omkar Tuptewar", imgUrl: profileicon },
  { name: "Alice Johnson", imgUrl: profileicon },
  { name: "John Doe", imgUrl: profileicon },
  { name: "Jane Smith", imgUrl: profileicon },
  { name: "Bob Brown", imgUrl: profileicon },
  { name: "Charlie Green", imgUrl: profileicon },
  { name: "Diana Prince", imgUrl: profileicon },
];

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize navigate for routing

  const handleImageTimeLineClick = (staffName) => {
    // Navigate to the UserTimeLine route with staff name as a parameter
    console.log(`Opening timeline for ${staffName}`);
    navigate(`/user-timelineStaff/${encodeURIComponent(staffName)}`);
  };

  return (
    <div className="bg-white h-screen w-72 -m-6 text-black flex flex-col shadow-lg overflow-y-hidden h-[640px]">
      {/* Sidebar Header */}
      <div className="p-6 text-3xl font-extrabold text-center border-b border-gray-200">
        Staff Members
      </div>

      {/* Staff List */}
      <ul className="space-y-6 py-4 px-4 flex-1 overflow-y-auto">
        {staffMembers.map((staff, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-purple-600 hover:text-white shadow-md shadow-purple-600 hover:shadow-lg"
          >
            {/* Staff Image */}
            <img
              src={staff.imgUrl}
              alt={staff.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
            />
            {/* Staff Details */}
            <div className="flex flex-col flex-grow">
              <div className="text-lg font-semibold">{staff.name}</div>
              {/* Image Time Line Button */}
              <button
                onClick={() => handleImageTimeLineClick(staff.name)}
                className="text-gray-600 hover:text-gray-800 font-semibold transition duration-200 mr-4 py-1 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Image Time Line
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
