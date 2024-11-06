import React, { useEffect, useState, useContext } from 'react';
import Sidebar from '../components/Sidebar';
import StaffMemberInfoTable from '../components/StaffMemberInfoTable';
import { UserContext } from '../context/UserContext'; 
import axios from 'axios';

const StaffDetailPage = () => {
  const { userInfo } = useContext(UserContext);
  const [staffMembers, setStaffMembers] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);

  useEffect(() => {
    const fetchStaffMembers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL_2}/api/v1/staffnames`, {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
          }
        });

        if (response.data.success) {
          const names = response.data.staffMembers.map(member => ({
            name: member.staff
          }));
          setStaffMembers(names); 

          // Set the first staff member as default selected
          if (names.length > 0) {
            setSelectedStaff(names[0].name); // Select first staff member
          }
        }
      } catch (error) {
        console.error('Error fetching staff members:', error);
      }
    };

    if (userInfo && userInfo.token) { 
      fetchStaffMembers();
    }
  }, [userInfo]);

  return (
    <div className="flex">
      <Sidebar setSelectedStaff={setSelectedStaff} staffMembers={staffMembers} />
      <div className="flex-1 flex flex-col ml-5 overflow-y-auto">
        {selectedStaff && <StaffMemberInfoTable UserName={selectedStaff} />}
      </div>
    </div>
  );
};

export default StaffDetailPage;
