
import React from 'react';
import { FiEye } from 'react-icons/fi'; 


const customers = [
    {
        accountName: "Alice Johnson",
        time: "9:30 AM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Premium Member",
    },
    {
        accountName: "Bob Brown",
        time: "10:15 AM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Regular Member",
    },
    {
        accountName: "Charlie Green",
        time: "11:45 AM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Gold Member",
    },
    {
        accountName: "Diana Prince",
        time: "12:00 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "VIP Member",
    },
    {
        accountName: "John Doe",
        time: "1:30 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Platinum Member",
    },
    {
        accountName: "John Doe",
        time: "1:30 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Platinum Member",
    },
    {
        accountName: "John Doe",
        time: "1:30 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Platinum Member",
    },
    {
        accountName: "John Doe",
        time: "1:30 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Platinum Member",
    },
    {
        accountName: "John Doe",
        time: "1:30 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Platinum Member",
    },
    {
        accountName: "John Doe",
        time: "1:30 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Platinum Member",
    },
    {
        accountName: "John Doe",
        time: "1:30 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Platinum Member",
    },
    {
        accountName: "John Doe",
        time: "1:30 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Platinum Member",
    },
    
];

const CustomerInfoTable = () => {
    return (
        <div className="overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200  rounded-lg shadow-lg overflow-y-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">Customer Info</h1>
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
