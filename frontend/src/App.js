import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import SummaryPage from "./pages/SummaryPage";
import SlotDetailsPage from "./pages/SlotDetailsPage";
import ImageTimeLine from "./pages/ImageTimeLine";
import StaffDetailPage from "./pages/StaffDetailPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import { UserContext } from "./context/UserContext";
import UserTimeLine from "./components/UserTimeLine";
import UserTimeLineStaff from "./components/UserTimeLineStaff";

function App() {
  const { userInfo } = useContext(UserContext);

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Redirect authenticated users to /home, otherwise show LoginPage */}
          <Route
            path="/"
            element={userInfo.isAuthenticated ? <Navigate to="/home" /> : <LoginPage />}
          />

          {/* Protected Routes */}
          <Route 
            path="/home" 
            element={userInfo.isAuthenticated ? <MainPage /> : <Navigate to="/" />} 
          />
          <Route 
            path="/summary" 
            element={userInfo.isAuthenticated ? <SummaryPage /> : <Navigate to="/" />} 
          />
          <Route 
            path="/slot-details" 
            element={userInfo.isAuthenticated ? <SlotDetailsPage /> : <Navigate to="/" />} 
          />
             <Route 
            path="/staff" 
            element={userInfo.isAuthenticated ? <StaffDetailPage /> : <Navigate to="/" />} 
          />
          <Route 
            path="/staff/:UserName" 
            element={userInfo.isAuthenticated ? <StaffDetailPage /> : <Navigate to="/" />} 
          />
           <Route 
            path="/customer"
            element={userInfo.isAuthenticated ? <CustomerDetailPage /> : <Navigate to="/" />} 
          />
          <Route 
            path="/customer/:UserName" 
            element={userInfo.isAuthenticated ? <CustomerDetailPage /> : <Navigate to="/" />} 
          />
          <Route 
            path="/image-timeline" 
            element={userInfo.isAuthenticated ? <ImageTimeLine /> : <Navigate to="/" />} 
          />

           <Route
            path="/user-timeline/:UserName"
            element={userInfo.isAuthenticated ? <UserTimeLine /> : <Navigate to="/" />}
          />

           <Route
            path="/user-timelineStaff/:UserName"
            element={userInfo.isAuthenticated ? <UserTimeLineStaff /> : <Navigate to="/" />}
          />

        </Routes>
        
      </Layout>
    </Router>
  );
}

export default App;
