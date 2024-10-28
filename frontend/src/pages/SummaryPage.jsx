import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from "../context/UserContext";

const SummaryPage = () => {
  const { userInfo } = useContext(UserContext);
  const [staffData, setStaffData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSummaryData = async () => {
      if (!userInfo?.token) return;

      try {
        setLoading(true);

        const headers = {
          Authorization: `Bearer ${userInfo.token}`,
        };

        const [staffResponse, customerResponse] = await Promise.all([
          axios.get('http://development.knowmyslots.com:3000/api/v1/getstaffloginsummary/', { headers }),
          axios.get('http://development.knowmyslots.com:3000/api/v1/getcustomerloginsummary/', { headers }),
        ]);

        setStaffData(staffResponse.data.data);
        setCustomerData(customerResponse.data.data);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchSummaryData();
  }, [userInfo.token]);

  return (
    <div className="overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg h-[580px] overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Staff And Customer Summary</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex justify-between space-x-6">
        
        {/* Staff Summary Table */}
        <div className="w-1/2">
          <h2 className="text-xl font-semibold mb-4 text-center">Staff Summary</h2>
          <table className="min-w-full bg-white border border-gray-400 rounded-lg shadow-md">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">SNo</th>
                <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Staff Name</th>
                <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Login Count</th>
              </tr>
            </thead>
            <tbody>
              {staffData.map((item, index) => (
                <tr key={index} className="transform transition-transform duration-200 ease-in-out hover:bg-purple-200 hover:shadow-lg">
                  <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{index + 1}</td>
                  <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{item.customerName}</td>
                  <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400">{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Customer Summary Table */}
        <div className="w-1/2">
          <h2 className="text-xl font-semibold mb-4 text-center">Customer Summary</h2>
          <table className="min-w-full bg-white border border-gray-400 rounded-lg shadow-md">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">SNo</th>
                <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Customer Name</th>
                <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Login Count</th>
              </tr>
            </thead>
            <tbody>
              {customerData.map((item, index) => (
                <tr key={index} className="transform transition-transform duration-200 ease-in-out hover:bg-green-200 hover:shadow-lg">
                  <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{index + 1}</td>
                  <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{item.customerName}</td>
                  <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400">{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
