import React, { useEffect, useState, useContext } from 'react';
import SideBarCos from '../components/SideBarCos';
import CustomerInfoTable from '../components/CustomerInfoTable';
import { UserContext } from '../context/UserContext'; 
import axios from 'axios';

const CustomerDetailPage = () => {
  const { userInfo } = useContext(UserContext);
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL_2}/api/v1/getAllCustomerUsernames`, {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
          }
        });

        if (response.data.success) {
          // Filter out empty or invalid usernames
          const customerList = response.data.usernames.filter(username => username && username.trim() !== '');
          
          console.log('Customer List:', customerList); 

          setCustomers(customerList);

        
          if (customerList.length > 0) {
            setSelectedCustomer(customerList[0]); 
          }
        }
      } catch (error) {
        console.error('Error fetching customers:', error);
        setError('Failed to load customer data'); 
      } finally {
        setLoading(false);
      }
    };

    if (userInfo && userInfo.token) {
      fetchCustomers();
    }
  }, [userInfo]);

 
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex">
      {/* Sidebar Component */}
      <SideBarCos  setSelectedCustomer={setSelectedCustomer} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-10 overflow-y-auto">
        {selectedCustomer && <CustomerInfoTable UserName={selectedCustomer} />}
      </div>
    </div>
  );
};

export default CustomerDetailPage;
