// src/components/StaffMemberInfoTable.jsx
import React, { useEffect, useState } from 'react';
import { FiEye } from 'react-icons/fi'; // Import eye icon
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios
import { UserContext } from '../context/UserContext'; // Import UserContext
import { useContext } from 'react';

const StaffMemberInfoTable = () => {
    const { UserName } = useParams(); // Get the UserName parameter from the URL
    const { userInfo } = useContext(UserContext); // Access userInfo from UserContext
    const [staffMembers, setStaffMembers] = useState([]); // State to hold staff member data
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        const fetchStaffInfo = async () => {
            try {
                const response = await axios.get(`http://development.knowmyslots.com:3000/api/v1/getstaffinfo/${encodeURIComponent(UserName)}`, {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}` // Pass the authorization token
                    }
                });

                if (response.data.success) {
                    setStaffMembers(response.data.data); // Update state with the fetched data
                } else {
                    setError('Failed to fetch staff information'); // Handle case when success is false
                }
            } catch (error) {
                setError('Error fetching staff information'); // Handle any errors during the fetch
                console.error("Error fetching staff info:", error);
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        };

        if (userInfo && userInfo.token) { // Ensure userInfo and token exist before fetching
            fetchStaffInfo();
        }
    }, [UserName, userInfo]); // Include UserName and userInfo as dependencies

    if (loading) {
        return <div className="text-center">Loading...</div>; // Loading indicator
    }

    if (error) {
        return <div className="text-red-600 text-center">{error}</div>; // Error message
    }

    return (
        <div className="overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg overflow-y-auto ml-5">
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
                            className="transform transition-transform duration-150 ease-in-out hover:bg-purple-200" // Light purple hover effect
                        >
                            <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{member.username}</td>
                            <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{member.indianTime}</td>
                            <td className="py-4 px-6 text-center border-b border-gray-400 border-r">
                                <a
                                    href={`http://example.com/${member.link}`} // Replace with actual base URL
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
