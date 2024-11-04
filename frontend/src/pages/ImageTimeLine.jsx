import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { UserContext } from '../context/UserContext';

const ImageTimeline = () => {
  const { userInfo } = useContext(UserContext); // Access userInfo from UserContext
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    const fetchTimelineData = async () => {
      try {
        const response = await axios.get('http://development.knowmyslots.com:3000/api/v1/getimageinfo', {
          headers: {
            'Authorization': `Bearer ${userInfo.token}`,
          },
        });
        setTimelineData(response.data.data);
      } catch (error) {
        console.error("Error fetching timeline data:", error);
      }
    };

    fetchTimelineData();
  }, [userInfo.token]);

  return (
    <div className="flex flex-col w-full items-center py-8 bg-gradient-to-r from-purple-300 to-purple-400 overflow-y-auto shadow-xl h-[87vh] sm:h-[70vh] md:h-[80vh] lg:h-[87vh]">

      <h2 className="text-2xl font-bold text-black mb-8 drop-shadow-lg uppercase tracking-wider">Image Timeline</h2>

      <div className="relative w-full max-w-5xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 h-full border-l-2 border-white transform -translate-x-1/2"></div>

        {timelineData.map((item, index) => (
          <div 
            key={index} 
            className={`flex items-center mb-10 transition-all duration-300 ease-in-out transform hover:scale-105 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
          >
            {/* Image Section */}
            <div className="w-2/4 px-4 flex justify-center">
              <img
                src={`${item.link}`} 
                alt={item.username}
                className="w-48 h-48 object-cover border-4 border-white shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-110 hover:w-60 hover:h-60 rounded-md"
              />
            </div>

            {/* Content Section */}
            <div className="w-3/4 px-4">
              <div className="bg-white p-4 rounded-2xl shadow-lg transform transition-transform duration-300 hover:shadow-xl">
                <h3 className="text-lg font-semibold text-purple-900 mb-1">{item.indianTime}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-1"><strong>Username:</strong> {item.username}</p>
                <p className="text-gray-700 text-sm leading-relaxed"><strong>Staff:</strong> {item.staff}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTimeline;
