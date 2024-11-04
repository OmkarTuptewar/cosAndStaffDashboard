import React from 'react';
import SideBarCos from '../components/SideBarCos';
import CustomerInfoTable from '../components/CustomerInfoTable';

const CustomerDetailPage = () => {
  return (
    <div className="flex ">
      {/* Sidebar Component */}
      <SideBarCos  />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-10  overflow-y-auto">
        <CustomerInfoTable />
      </div>
    </div>
  );
};

export default CustomerDetailPage;
