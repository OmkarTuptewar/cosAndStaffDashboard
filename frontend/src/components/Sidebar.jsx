// src/components/Sidebar.jsx
import React, { useEffect, useState, useContext } from "react"; // Import necessary hooks
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import axios from "axios"; // Import axios for HTTP requests
import { UserContext } from "../context/UserContext"; // Import UserContext

const Sidebar = () => {
  const { userInfo } = useContext(UserContext); // Access userInfo from UserContext
  const navigate = useNavigate(); // Initialize navigate for routing
  const [staffMembers, setStaffMembers] = useState([]); // State to hold staff members
  
  useEffect(() => {
    const fetchStaffMembers = async () => {
      try {
        const response = await axios.get('/api/v1/staffnames', {
          headers: {
            Authorization: `Bearer ${userInfo.token}` // Include token in headers
          }
        });

        if (response.data.success) {
          const names = response.data.staffMembers.map(member => ({
            name: member.staff // Extract staff names
          }));
          setStaffMembers(names); // Update state with staff member names
        }
      } catch (error) {
        console.error("Error fetching staff members:", error);
      }
    };

    if (userInfo && userInfo.token) { // Check if userInfo and token exist
      fetchStaffMembers();
    }
  }, [userInfo]); // Depend on userInfo for re-fetching

  const handleImageTimeLineClick = (staffName) => {
    // Navigate to the UserTimeLine route with staff name as a parameter
    console.log(`Opening timeline for ${staffName}`);
    navigate(`/user-timelineStaff/${encodeURIComponent(staffName)}`);
  };
  
  const handleStaffNameClick = (staffName) => {
    // Navigate to the Staff Detail page with staff name as a parameter
    console.log(`Opening Staff Detail page for ${staffName}`);
    navigate(`/staff/${encodeURIComponent(staffName)}`);
  };

  return (
    <div className="bg-white w-72 -m-6  text-black flex flex-col shadow-lg overflow-y-auto h-[90vh] ">
      {/* Sidebar Header */}
      <div className="p-6 text-3xl font-extrabold text-center border-b border-gray-200">
        Staff Members
      </div>

      {/* Staff List */}
      <ul className="space-y-4 py-4 px-4 flex-1 overflow-y-auto">
        {staffMembers.map((staff, index) => (
          <li
            key={index}
            className="flex items-center p-3 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-purple-600 hover:text-white shadow-md shadow-purple-600 hover:shadow-lg"
          >
            {/* Staff Details */}
            <div className="flex flex-col flex-grow">
              {/* Staff Name as a Button */}
              <button
                onClick={() => handleStaffNameClick(staff.name)} // Navigate to Staff Detail page
                className="text-lg font-semibold text-center mb-2 focus:outline-none"
              >
                {staff.name}
              </button>
              {/* Image Time Line Button */}
              <button
                onClick={() => handleImageTimeLineClick(staff.name)} // Navigate to Image Timeline
                className="text-gray-600 hover:text-gray-800 font-semibold transition duration-200 w-full py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-center"
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
