
import React, { useEffect, useState } from 'react';
import { FiEye } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 
import { UserContext } from '../context/UserContext'; 
import { useContext } from 'react';

// Modal component
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

const StaffMemberInfoTable = ({ UserName }) => {

    
    const { userInfo } = useContext(UserContext); 
    const [staffMembers, setStaffMembers] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const [selectedImage, setSelectedImage] = useState(null); 
    const [isModalOpen, setIsModalOpen] = useState(false); 

    useEffect(() => {
        const fetchStaffInfo = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/getstaffinfo/${encodeURIComponent(UserName)}`, {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}` 
                    }
                });

                if (response.data.success) {
                    setStaffMembers(response.data.data); 
                } else {
                    setError('Failed to fetch staff information'); 
                }
            } catch (error) {
                setError('Error fetching staff information'); 
                console.error("Error fetching staff info:", error);
            } finally {
                setLoading(false);
            }
        };

        if (userInfo && userInfo.token) { 
            fetchStaffInfo();
        }
    }, [UserName, userInfo]); 

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc); 
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false); 
        setSelectedImage(null); 
    };

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }



    return (
        <div>
      {/* Display error message if there's an error */}
      {error ? (
        <div className="text-red-600 text-lg font-semibold mt-4 ml-5">
          {error}
        </div>
      ) : (

        <div className="overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg overflow-y-auto ml-5 h-[85vh] ">
            <h1 className="text-2xl font-bold mb-4 text-center">Staff Members Info - {UserName}</h1>
            <table className="min-w-full bg-white border border-gray-400 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-purple-600 text-white">
                        <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Account Name</th>
                        <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Indian Time</th>
                        <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Image/Link</th>
                        <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Visa Type</th>
                    </tr>
                </thead>
                <tbody>
                    {staffMembers.map((member, index) => (
                    <tr
                    key={index}
                    className="transform transition-transform duration-150 ease-in-out hover:bg-purple-200"
                  >
                    <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{member.username}</td>
                    <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{member.indianTime}</td>
                    <td className="py-4 px-6 text-center border-b border-gray-400 border-r flex justify-center items-center"> {/* Add flex and items-center to this td */}
                      <button
                        onClick={() => openModal(`${process.env.REACT_APP_BASE_URL}/${member.link}`)}
                        className="flex items-center justify-center space-x-2 text-purple-600 hover:text-purple-800 font-semibold transition duration-150"
                      >
                        <FiEye className="text-xl" />
                        <span>View</span>
                      </button>
                    </td>
                    <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400">{member.visaType}</td>
                  </tr>
                  
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            {isModalOpen && <Modal imageSrc={selectedImage} onClose={closeModal} />}
        </div>
           )}
    </div>
    );
}

export default StaffMemberInfoTable;
