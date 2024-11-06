
import React, { useEffect, useState, useContext } from "react"; 
import { useNavigate } from "react-router-dom"; 
import axios from "axios"; 
import { UserContext } from "../context/UserContext"; 

const SideBarCos = ({setSelectedCustomer}) => {
  const navigate = useNavigate(); 
  const { userInfo } = useContext(UserContext); 
  const [customerUsernames, setCustomerUsernames] = useState([]);

  useEffect(() => {
    const fetchCustomerUsernames = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL_2}/api/v1/getAllCustomerUsernames`, {
          headers: {
            Authorization: `Bearer ${userInfo.token}`, 
          },
        });

        if (response.data.success) {
          const usernames = response.data.usernames.filter(username => username);
          setCustomerUsernames(usernames);
        }
      } catch (error) {
        console.error("Error fetching customer usernames:", error);
      }
    };

    if (userInfo && userInfo.token) { 
      fetchCustomerUsernames(); 
    }
  }, [userInfo]); 

  const handleImageTimeLineClick = (customerName) => {
   
    console.log(`Opening timeline for ${customerName}`);
    navigate(`/user-timeline/${encodeURIComponent(customerName)}`);
  };
  

  const handleCustomerNameClick = (customerName) => {
   
    console.log(`Opening CustomerDeatilPage for ${customerName}`);
    navigate(`/customer/${encodeURIComponent(customerName)}`);
    setSelectedCustomer(customerName);
  };


  return (
    <div className="bg-white w-72 -m-6 text-black flex flex-col shadow-lg overflow-y-hidden h-[90vh]">
      {/* Sidebar Header */}
      <div className="p-6 text-3xl font-extrabold text-center border-b border-gray-200">
        Customers
      </div>

      {/* Customer List */}
      <ul className="space-y-6 py-4 px-4 flex-1 overflow-y-auto">
        {customerUsernames.map((customerName, index) => (
          <li
            key={index}

            className="flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-purple-600 hover:text-white shadow-md shadow-purple-600 hover:shadow-lg"
          >
            {/* Customer Details */}
            <div className="flex flex-col flex-grow">
              <button
              onClick={() =>handleCustomerNameClick(customerName)}
              className="text-lg font-semibold text-center">{customerName}
              </button>
              {/* Image Time Line Button */}
              <button
                onClick={() => handleImageTimeLineClick(customerName)}
                className="text-gray-600 hover:text-gray-800 font-semibold transition duration-200 mr-4 py-1 rounded-lg border border-gray-300 hover:bg-gray-100 w-full text-center"
              >
                Image Time Line 
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarCos;
