import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "../config/firebase";
import myImage from "../assets/login1.png"; // Ensure this image exists

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      navigate("/login"); // Redirect to login page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src={myImage}
          alt="Signup Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-blue-500 text-center">
          <a href="/login" className="hover:underline">Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
