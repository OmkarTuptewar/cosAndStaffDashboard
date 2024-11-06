import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from "../context/UserContext"; // Import UserContext

const SlotDetailsPage = () => {
  const { userInfo } = useContext(UserContext); // Access userInfo from UserContext
  const [slotDetailsData, setSlotDetailsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSlotDetails = async () => {
      if (!userInfo?.token) return; // Ensure token is available

      try {
        setLoading(true);

        const headers = {
          Authorization: `Bearer ${userInfo.token}`, // Use token from userInfo
        };

        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/getslotsinfo`, { headers });
        setSlotDetailsData(response.data.data); // Access data correctly
      } catch (error) {
        setError('Failed to fetch slot details');
      } finally {
        setLoading(false);
      }
    };

    fetchSlotDetails();
  }, [userInfo.token]); // Run effect when token changes

  return (
    <div className="overflow-hidden  rounded-lg shadow-lg h-[85vh] overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Slot Details</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full  border border-gray-400 rounded-lg shadow-md">
        <thead>
          <tr className="bg-purple-600 text-white">
            <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Staff Name</th>
            <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Customer</th>
            <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Time</th>
            <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Location</th>
            <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Month-Year</th>
            <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold w-80">Dates</th>
            <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Count</th>
          </tr>
        </thead>
        <tbody>
          {slotDetailsData.map((slot, index) => (
            <tr
              key={index}
              style={{ backgroundColor: slot.color || 'white' }} // Set background color from API, default to white
              className="transform transition-transform duration-200 ease-in-out hover:bg-purple-200 hover:shadow-lg"
            >
              <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{slot.staff}</td>
              <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{slot.customerName}</td>
              <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{slot.indianTime}</td>
              <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{slot.location}</td>
              <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{slot.slotDetailsText.split('\n')[0].split('\t')[0]}</td>
              <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{slot.slotDetailsText}</td>
              <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400">{slot.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SlotDetailsPage;
