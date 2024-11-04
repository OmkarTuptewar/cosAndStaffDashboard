import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SideBarCos from "./SideBarCos";
import { UserContext } from "../context/UserContext"; // Adjust based on your structure

const UserTimeLine = () => {
  const { UserName } = useParams();
  const { userInfo } = useContext(UserContext);
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTimelineData = async () => {
      try {
        const response = await axios.get(`http://development.knowmyslots.com:3000/api/v1/getstaffimageinfo/${UserName}`, {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.data.success) {
          setTimelineData(response.data.data);
        } else {
          console.error("Failed to fetch timeline data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userInfo?.token) {
      fetchTimelineData();
    } else {
      console.error("User token is not available");
      setLoading(false);
    }
  }, [userInfo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex ">
      <SideBarCos />
      <div className="flex-1 ml-10 -m-5">
        <h1 className="font-bold text-3xl text-purple-600 ">
          Image Timeline for {UserName}
        </h1>
        <div className="flex flex-col items-center bg-gradient-to-r from-purple-400 to-purple-600 overflow-y-auto shadow-xl h-[85vh] ">
          <h2 className="text-2xl font-bold text-white mb-8 drop-shadow-lg uppercase tracking-wider">
            Image Timeline
          </h2>

          <div className="relative w-full max-w-5xl">
            {/* Vertical Line */}
            <div className="absolute left-1/2 h-full border-l-2 border-white transform -translate-x-1/2"></div>

            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-10 transition-all duration-300 ease-in-out transform hover:scale-105 ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div className="w-2/4 px-4 flex justify-center">
                  <img
                    src={`${item.link}`} // Adjust with correct image base URL
                    alt={item.username}
                    className="w-48 h-48 object-cover border-4 border-white shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-110 hover:w-60 hover:h-60 rounded-md"
                  />
                </div>

                {/* Content Section */}
                <div className="w-3/4 px-4">
                  <div className="bg-white p-4 rounded-2xl shadow-lg transform transition-transform duration-300 hover:shadow-xl">
                    <h3 className="text-lg font-semibold text-purple-900 mb-1">
                      {item.indianTime}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.username}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTimeLine;
