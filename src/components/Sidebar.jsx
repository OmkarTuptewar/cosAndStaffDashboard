import React, { useContext } from "react"; 
import { useNavigate } from "react-router-dom"; 
import { UserContext } from "../context/UserContext"; 

const Sidebar = ({ setSelectedStaff, staffMembers }) => {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate(); 

  const handleImageTimeLineClick = (staffName) => {
    console.log(`Opening timeline for ${staffName}`);
    navigate(`/user-timelineStaff/${encodeURIComponent(staffName)}`);
  };
  
  const handleStaffNameClick = (staffName) => {
    console.log(`Opening Staff Detail page for ${staffName}`);
    navigate(`/staff/${encodeURIComponent(staffName)}`);
    setSelectedStaff(staffName);
  };

  return (
    <div className="bg-white w-72 -m-6 text-black flex flex-col shadow-lg overflow-y-auto h-[90vh]">
      {/* Sidebar Header */}
      <div className="p-6 text-3xl font-extrabold text-center border-b border-gray-200">
        Staff Members
      </div>

      {/* Staff List */}
      <ul className="space-y-4 py-4 px-4 flex-1 overflow-y-auto">
        {staffMembers?.length > 0 ? (
          staffMembers.map((staff, index) => (
            <li
              key={index}
              className="flex items-center p-3 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-purple-600 hover:text-white shadow-md shadow-purple-600 hover:shadow-lg"
            >
              {/* Staff Details */}
              <div className="flex flex-col flex-grow">
                {/* Staff Name as a Button */}
                <button
                  onClick={() => handleStaffNameClick(staff.name)} 
                  className="text-lg font-semibold text-center mb-2 focus:outline-none"
                  aria-label={`View details for ${staff.name}`}
                >
                  {staff.name}
                </button>
                {/* Image Time Line Button */}
                <button
                  onClick={() => handleImageTimeLineClick(staff.name)} 
                  className="text-gray-600 hover:text-gray-800 font-semibold transition duration-200 w-full py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-center"
                  aria-label={`View timeline for ${staff.name}`}
                >
                  Image Time Line
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="p-4 text-center text-gray-500">No staff members available</li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
