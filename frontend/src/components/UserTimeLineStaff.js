import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import { UserContext } from "../context/UserContext";
import photo from "../assets/images/post-image-1.png"
const UserTimeLineStaff = () => {
  const { UserName } = useParams();
  const { userInfo } = useContext(UserContext);
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchTimelineData = async () => {
      try {
        const response = await axios.get(`http://development.knowmyslots.com:3000/api/v1/getstaffimageinfo/${UserName}`, {
          headers: {
            'Authorization': `Bearer ${userInfo.token}`,
            'Content-Type': 'application/json',
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

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1 ml-10 -m-5">
        <h1 className="font-bold text-3xl text-purple-600">
          Image Timeline for {UserName}
        </h1>
        <div className="flex flex-col items-center bg-gradient-to-r from-purple-400 to-purple-600 shadow-xl overflow-y-auto h-[84vh]">
          <h2 className="text-2xl font-bold text-white mb-8 drop-shadow-lg uppercase tracking-wider">
            Image Timeline
          </h2>

          <div className="relative w-full max-w-5xl">
            <div className="absolute left-1/2 h-full border-l-2 border-white transform -translate-x-1/2"></div>

            {timelineData.map((item, index) => (
              <div
                key={item.link}
                className={`flex items-center mb-10 transition-all duration-300 ease-in-out transform hover:scale-105 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
              >
                {/* Image Section */}
                <div className="w-2/4 px-4 flex justify-center">
                  <img
                    src={`${item.link}`}
                    alt={item.username}
                    className="w-48 h-48 object-cover border-4 border-white shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-110 hover:w-60 hover:h-60 rounded-md cursor-pointer"
                    onClick={() => openModal(item.link)} // Open modal on image click
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

            {/* Modal */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl w-full">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default UserTimeLineStaff;
