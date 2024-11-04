import React, { useContext, useEffect, useState } from 'react';
import { FiEye } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const CustomerInfoTable = () => {

    const { UserName } = useParams(); // Get the UserName parameter from the URL
    const { userInfo } = useContext(UserContext); // Access userInfo from UserContext
    const [customers, setCustomers] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchCustomerData = async () => {
            try {
                const response = await axios.get(`http://development.knowmyslots.com:3000/api/v1/getcustomerinfo/${UserName}`, {
                    headers: {
                      
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                });

                

                if (response.data.success) {
                    // Map the API response data to the format needed for your table
                    const customerData = response.data.data.map((item) => ({
                        accountName: item.username,
                        time: item.indianTime,
                        imageUrl: `${item.link}`, 
                        visaType: item.visaType,
                    }));

                    setCustomers(customerData);
                }
            } catch (error) {
                setError('Failed to fetch customer data.');
                console.error('Error fetching customer data:', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchCustomerData(); 
    }, [UserName,userInfo.token]);

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>; 
    }

    return (
        <div className="overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg overflow-y-auto h-[90vh]">
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
                            <td className="py-4 px-6 text-center border-b border-gray-400 border-r">
                                <a
                                    href={customer.imageUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center space-x-2 text-purple-600 hover:text-purple-800 font-semibold transition duration-150"
                                >
                                    <FiEye className="text-xl" />
                                    <span>View</span>
                                </a>
                            </td>
                            <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400">{customer.visaType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerInfoTable;
