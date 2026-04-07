import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account 🚀</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-400">
            Already have an account?
            <span onClick={() => navigate("/")} className="text-indigo-400 cursor-pointer hover:underline">
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
