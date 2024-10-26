import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext"; // Adjust the path based on your file structure

const Navbar = () => {
  const { logout } = useContext(UserContext); // Access logout function from context

  const handleLogout = () => {
    logout(); // Call the logout function
  };

  return (
    <nav className="bg-purple-700 text-white h-16 flex items-center px-6 justify-between shadow-lg">
      <div className="text-3xl font-extrabold tracking-wider">Dashboard</div>

      {/* Navigation Buttons */}
      <div className="space-x-4 flex items-center">
        <Link
          to="/Home"
          className="bg-gradient-to-r from-gray-800 font-bold to-gray-600 py-2 px-5 rounded-md shadow-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-out text-white"
        >
          Home
        </Link>
        <Link
          to="/staff"
          className="bg-gradient-to-r from-gray-800 font-bold to-gray-600 py-2 px-5 rounded-md shadow-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-out text-white"
        >
          Staff
        </Link>
        <Link
          to="/customer"
          className="bg-gradient-to-r from-gray-800 font-bold to-gray-600 py-2 px-5 rounded-md shadow-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-out text-white"
        >
          Customer
        </Link>
        <Link
          to="/summary"
          className="bg-gradient-to-r from-gray-800 font-bold to-gray-600 py-2 px-5 rounded-md shadow-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-out text-white"
        >
          Summary
        </Link>

        <Link
          to="/Slot-details"
          className="bg-gradient-to-r from-gray-800 font-bold to-gray-600 py-2 px-5 rounded-md shadow-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-out text-white"
        >
          Slots Details
        </Link>
        <Link
          to="/image-timeline"
          className="bg-gradient-to-r from-gray-800 font-bold to-gray-600 py-2 px-5 rounded-md shadow-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-out text-white"
        >
          Image TimeLine
        </Link>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-600 font-bold py-2 px-5 rounded-md shadow-md hover:bg-red-500 transform hover:-translate-y-1 transition-all duration-300 ease-out text-white"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
