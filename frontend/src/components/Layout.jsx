import React, { useContext } from "react";
import Navbar from "./Navbar";
import { UserContext } from "../context/UserContext";

const Layout = ({ children }) => {
  const { userInfo } = useContext(UserContext);

  return (
    <div className="flex">
      <div className="flex-1 flex flex-col">
        {/* Conditionally render Navbar only if the user is authenticated */}
        {userInfo?.isAuthenticated && <Navbar />}
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
