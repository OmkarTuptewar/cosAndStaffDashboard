import React, { useState, useContext } from "react";
import { FaUserCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      

      const {token} = data;

     
      login(username,"admin",token);

      toast.success("Login successful!");
      navigate("/Home");
    } catch (err) {
      console.error(err);
      setError("Invalid username or password");
      toast.error("Invalid username or password");
    }
  };




  return (
    <>
      <header className="bg-purple-600 shadow-lg text-white -m-6 ">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold item-center">
            KnowMySlots-DashBoard
          </h1>
        </div>
      </header>

      <div className="flex flex-col bg-gray-100 m-28 ">
        <ToastContainer /> {/* Toast notifications */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="bg-white shadow-2xl rounded-lg p-4 md:p-6 max-w-xs md:max-w-md w-full">
            <div className="flex justify-center items-center mb-4">
              <FaUserCircle className="text-purple-500 text-4xl md:text-6xl" />
            </div>

            <div className="bg-white p-3 md:p-4 rounded-b-lg shadow-md">
              <h2 className="text-lg md:text-xl font-semibold text-center text-gray-800 mb-2">
                Admin Login
              </h2>
              <p className="text-center text-gray-600 mb-3 text-xs md:text-sm">
                Enter your username and password to continue
              </p>

              {error && (
                <div className="text-red-600 text-sm mb-2">{error}</div>
              )}

              <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-gray-700 font-medium mb-1 text-xs md:text-sm"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full px-2 md:px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-xs md:text-sm"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-medium mb-1 text-xs md:text-sm"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-2 md:px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-xs md:text-sm"
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-500 cursor-pointer pt-6"
                    onClick={() => setShowPassword(!showPassword)}
                    role="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-1 px-2 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition duration-200 text-xs md:text-sm bg-purple-700 hover:bg-purple-900 focus:ring-indigo-400 text-white"
                >
                  Login as Admin
                </button>
              </form>

              <div className="mt-3 text-center text-gray-500 text-xs">
                &copy; {new Date().getFullYear()} KnowMySlots. All rights
                reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
