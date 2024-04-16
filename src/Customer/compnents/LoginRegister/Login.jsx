import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="px-6 py-8">
          <img
            className="mx-auto h-24 w-auto"
            src= "https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        {/* Form Section */}
        <form className="px-6 py-8">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <Link
              to="#"
              className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800"
            >
              Forgot Password?
            </Link>
          </div>
        </form>

        {/* Already have an account Section */}
        <div className="px-6 py-4 bg-gray-100 text-center">
          <p className="text-gray-700">Don't have an account?</p>
          <Link
            to ="/Register"
            className="font-bold text-indigo-500 hover:text-indigo-800"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
