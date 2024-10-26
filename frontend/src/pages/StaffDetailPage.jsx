import React from 'react'
import Sidebar from '../components/Sidebar'
import StaffMemberInfoTable from '../components/StaffMemberInfoTable'

const StaffDetailPage = () => {
  return (
    <div className="flex">
     <Sidebar/>
      <div className="flex-1 flex flex-col ml-5 h-[590px] overflow-y-auto">
      <StaffMemberInfoTable/>
      </div>
    </div>
   
  )
}

export default StaffDetailPage