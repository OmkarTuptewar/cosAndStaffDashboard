import React from "react";
import { useParams } from "react-router-dom";
import displayimage from "../assets/images/post-image-1.png";
import SideBarCos from "./SideBarCos";

const timelineData = [
  {
    id: 1,
    image: displayimage,
    date: 'January 1, 2024',
    description: 'New Year Celebration with fireworks and joy.',
  },
  {
    id: 2,
    image: displayimage,
    date: 'February 14, 2024',
    description: 'Valentine\'s Day celebration filled with love and friendship.',
  },
  {
    id: 3,
    image: displayimage,
    date: 'March 17, 2024',
    description: 'St. Patrick\'s Day festivities with green beer and parades.',
  },
  {
    id: 4,
    image: displayimage,
    date: 'April 22, 2024',
    description: 'Celebrating Earth Day with nature walks and cleanups.',
  },
  {
    id: 5,
    image: displayimage,
    date: 'May 1, 2024',
    description: 'Spring Festival showcasing flowers and vibrant colors.',
  },
  
];

const UserTimeLine = () => {
  const { UserName } = useParams();

  return (
    <div className="flex">
      <SideBarCos />
      <div className="flex-1 ml-10 -m-5">
        <h1 className="font-bold text-3xl text-purple-600 ">
          Image Timeline for {UserName}
        </h1>
        <div className="flex flex-col items-center bg-gradient-to-r from-purple-400 to-purple-600 overflow-y-auto shadow-xl h-[600px] ">
          <h2 className="text-2xl font-bold text-white mb-8 drop-shadow-lg uppercase tracking-wider">
            Image Timeline
          </h2>

          <div className="relative w-full max-w-5xl">
            {/* Vertical Line */}
            <div className="absolute left-1/2 h-full border-l-2 border-white transform -translate-x-1/2"></div>

            {timelineData.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center mb-10 transition-all duration-300 ease-in-out transform hover:scale-105 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                {/* Image Section */}
                <div className="w-2/4 px-4 flex justify-center">
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-48 h-48 object-cover border-4 border-white shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-110 hover:w-60 hover:h-60 rounded-md"
                  />
                </div>

                {/* Content Section */}
                <div className="w-3/4 px-4">
                  <div className="bg-white p-4 rounded-2xl shadow-lg transform transition-transform duration-300 hover:shadow-xl">
                    <h3 className="text-lg font-semibold text-purple-900 mb-1">{item.date}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
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
