  // src/components/SideBarCos.jsx
  import React from "react";
  import profileicon from "../assets/images/user-1.png"; // Assuming this is the default customer icon
  import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

  const customers = [
    { name: "Alice Johnson", imgUrl: profileicon },
    { name: "John Doe", imgUrl: profileicon },
    { name: "Jane Smith", imgUrl: profileicon },
    { name: "Bob Brown", imgUrl: profileicon },
    { name: "Charlie Green", imgUrl: profileicon },
    { name: "Diana Prince", imgUrl: profileicon },
    { name: "Bruce Wayne", imgUrl: profileicon },
  ];

  const SideBarCos = () => {
    const navigate = useNavigate(); // Initialize navigate for routing

    const handleImageTimeLineClick = (customerName) => {
      // Navigate to the UserTimeLine route with customer name as a parameter
      console.log(`Opening timeline for ${customerName}`);
      navigate(`/user-timeline/${encodeURIComponent(customerName)}`);
    };
    return (
      <div className="bg-white h-screen w-72 -m-6 text-black flex flex-col shadow-lg overflow-y-hidden h-[640px] ">
        {/* Sidebar Header */}
        <div className="p-6 text-3xl font-extrabold text-center border-b border-gray-200">
          Customers
        </div>

        {/* Customer List */}
        <ul className="space-y-6 py-4 px-4 flex-1 overflow-y-auto">
          {customers.map((customer, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-purple-600 hover:text-white shadow-md shadow-purple-600 hover:shadow-lg"
            >
              {/* Customer Image */}
              <img
                src={customer.imgUrl}
                alt={customer.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
              />
              {/* Customer Details */}
              <div className="flex flex-col flex-grow">
                <div className="text-lg font-semibold">{customer.name}</div>
                {/* Image Time Line Button */}
                <button
                  onClick={() => handleImageTimeLineClick(customer.name)}
                  className="text-gray-600 hover:text-gray-800 font-semibold transition duration-200 mr-4  py-1 rounded-lg border border-gray-300 hover:bg-gray-100"
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
