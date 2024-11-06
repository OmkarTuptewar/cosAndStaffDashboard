import React, { useContext, useEffect, useState } from 'react';
import { FiEye } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';


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

const CustomerInfoTable = ({ UserName }) => {
  
  const { userInfo } = useContext(UserContext);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const fetchCustomerData = async () => {
        setLoading(true);
        setError(null);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/getcustomerinfo/${UserName}`, {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        });

        if (response.data.success) {
          // Map the API response data to the format needed for your table
          const customerData = response.data.data.map((item) => ({
            accountName: item.staff,
            time: item.indianTime,
            imageUrl: `${item.link}`, 
            visaType: item.visaType,
          }));

          setCustomers(customerData);
        } else {
            setError("Failed to fetch customer information'");
          }
      }
      catch (error) {
        setError('Failed to fetch customer data.');
        console.error('Error fetching customer data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomerData(); 
  }, [UserName, userInfo]);

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div>
      {/* Display error message if there's an error */}
      {error ? (
        <div className="text-red-600 text-lg font-semibold mt-4">
          {error}
        </div>
      ) : (
        <div className="overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg overflow-y-auto h-[85vh]">
          <h1 className="text-2xl font-bold mb-4 text-center">Customer Info for - {UserName}</h1>
          <table className="min-w-full bg-white border border-gray-400 rounded-lg shadow-md">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Account Name</th>
                <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Time</th>
                <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Image/Link</th>
                <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Membership Type</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr
                  key={index}
                  className="transform transition-transform duration-150 ease-in-out hover:bg-purple-200" // Light blue hover effect
                >
                  <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{customer.accountName}</td>
                  <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{customer.time}</td>
                  <td className="py-4 px-6 text-center border-b border-gray-400 border-r flex justify-center items-center">
                    <button
                      onClick={() => openModal(`${process.env.REACT_APP_BASE_URL}/${customer.imageUrl}`)} // Open modal with the image URL
                      className="flex items-center justify-center space-x-2 text-purple-600 hover:text-purple-800 font-semibold transition duration-150"
                    >
                      <FiEye className="text-xl" />
                      <span>View</span>
                    </button>
                  </td>
                  <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400">{customer.visaType}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Render the modal if it's open */}
          {isModalOpen && <Modal imageSrc={modalImage} onClose={closeModal} />}
        </div>
      )}
    </div>
  );
};

export default CustomerInfoTable;
