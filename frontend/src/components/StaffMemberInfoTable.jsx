// src/components/StaffMemberInfoTable.jsx
import React from 'react';
import { FiEye } from 'react-icons/fi'; // Import eye icon

// Sample data for the table
const staffMembers = [
    {
        accountName: "Omkar Tuptewar",
        time: "10:00 AM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Work Visa",
    },
    {
        accountName: "John Doe",
        time: "11:30 AM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Student Visa",
    },
    {
        accountName: "Jane Smith",
        time: "1:00 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Tourist Visa",
    },
    {
        accountName: "Alice Johnson",
        time: "9:00 AM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Permanent Resident",
    },
    {
        accountName: "Bob Brown",
        time: "2:30 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Visitor Visa",
    },
    {
        accountName: "Charlie Green",
        time: "12:15 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Work Visa",
    },
    {
        accountName: "Diana Prince",
        time: "3:45 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Student Visa",
    },
    {
        accountName: "Diana Prince",
        time: "3:45 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Student Visa",
    },
    {
        accountName: "Diana Prince",
        time: "3:45 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Student Visa",
    },
    {
        accountName: "Diana Prince",
        time: "3:45 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Student Visa",
    },
    {
        accountName: "Diana Prince",
        time: "3:45 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Student Visa",
    },
    {
        accountName: "Diana Prince",
        time: "3:45 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Student Visa",
    },
    {
        accountName: "Diana Prince",
        time: "3:45 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Student Visa",
    },
    {
        accountName: "Diana Prince",
        time: "3:45 PM",
        imageUrl: "https://via.placeholder.com/150",
        visaType: "Student Visa",
    },
];

const StaffMemberInfoTable = () => {
    return (
        <div className="overflow-hidden  bg-gradient-to-r from-gray-100 to-gray-200  rounded-lg shadow-lg overflow-y-auto ml-5">
            <h1 className="text-2xl font-bold mb-4 text-center">Staff Members Info</h1>
            <table className="min-w-full bg-white border border-gray-400 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-purple-600 text-white">
                        <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Account Name</th>
                        <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Time</th>
                        <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Image/Link</th>
                        <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Visa Type</th>
                    </tr>
                </thead>
                <tbody>
                    {staffMembers.map((member, index) => (
                        <tr
                            key={index}
                            className="transform transition-transform duration-150 ease-in-out hover:bg-purple-200" // Light purple hover effect
                        >
                            <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{member.accountName}</td>
                            <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{member.time}</td>
                            <td className="py-4 px-6 text-center border-b border-gray-400 border-r">
                                <a
                                    href={member.imageUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center space-x-2 text-purple-600 hover:text-purple-800 font-semibold transition duration-150"
                                >
                                    <FiEye className="text-xl" />
                                    <span>View</span>
                                </a>
                            </td>
                            <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400">{member.visaType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StaffMemberInfoTable;
