import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SideBarCos from "./SideBarCos";
import { UserContext } from "../context/UserContext";

const Modal = ({ imageSrc, onClose }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl w-full relative">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        onClick={onClose}
      >
        &times;
      </button>
      <img src={imageSrc} alt="Selected" className="w-full h-auto object-cover rounded-lg" />
    </div>
  </div>
);

const UserTimeLine = () => {
  const { UserName } = useParams();
  const { userInfo } = useContext(UserContext);
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchTimelineData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/v1/getcustomerimageinfo/${UserName}`,
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success) {
          setTimelineData(response.data.data);
        } else {
          setError("Failed to fetch timeline data. Please check the username and try again.");
        }
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userInfo?.token) {
      fetchTimelineData();
    } else {
      setError("User token is not available");
      setLoading(false);
    }
  }, [userInfo, UserName]);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex">
      <SideBarCos />
      <div className="flex-1 ml-10 -m-5">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Image Timeline for {UserName}
        </h1>

      {/* Display error message if there's an error */}
      {error ? (
          <div className="text-red-600 text-lg font-semibold mt-4">
            {error}
          </div>
        ) : (

          <div className="flex flex-col items-center bg-gradient-to-r from-purple-400 to-purple-600 shadow-xl overflow-y-auto h-[84vh]">
            <h2 className="text-2xl font-bold text-white mb-8 drop-shadow-lg uppercase tracking-wider">
              Image Timeline
            </h2>

            <div className="relative w-full max-w-5xl">
              <div className="absolute left-1/2 h-full border-l-2 border-white transform -translate-x-1/2"></div>

              {timelineData.map((item, index) => (
                <div
                  key={item.link}
                  className={`flex items-center mb-10 transition-all duration-300 ease-in-out transform hover:scale-105 ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-2/4 px-4 flex justify-center">
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/${item.link}`}
                      alt={item.username}
                      className="w-48 h-48 object-cover border-4 border-white shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-110 hover:w-60 hover:h-60 rounded-md cursor-pointer"
                      onClick={() => openModal(`${process.env.REACT_APP_BASE_URL}/${item.link}`)}
                    />
                  </div>

                  <div className="w-3/4 px-4">
                    <div className="bg-white p-4 rounded-2xl shadow-lg transform transition-transform duration-300 hover:shadow-xl">
                      <h3 className="text-lg font-semibold text-purple-900 mb-1">
                        {item.indianTime}
                      </h3>
                      <h1 className="text-black font-mono leading-relaxed">
                     {item.staff}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      
        )}
        {isModalOpen && selectedImage && (
          <Modal imageSrc={selectedImage} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default UserTimeLine;