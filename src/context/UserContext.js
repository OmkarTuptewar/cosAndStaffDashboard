import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  // State to store user information
  const [userInfo, setUserInfo] = useState(() => {
    // Check local storage for existing user info
    const savedUserInfo = localStorage.getItem('userInfo');
    return savedUserInfo ? JSON.parse(savedUserInfo) : {
      username: '',
      role: '', // 'admin' or 'guest' if needed
      isAuthenticated: false,
    };
  });

  // Effect to update local storage whenever userInfo changes
  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [userInfo]);

  // Function to update user information
  const login = (username, role,token) => {
    setUserInfo({
      username,
      role,
      isAuthenticated: true,
      token:token,
    });
  };


  
  // Function to log out the user and clear user information
  const logout = () => {
    setUserInfo({
      username: '',
      role: '',
      isAuthenticated: false,
      token:null,
    });
    localStorage.removeItem('userInfo'); // Optionally clear user info from local storage on logout
  };

  return (
    <UserContext.Provider value={{ userInfo, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
  