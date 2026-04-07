import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="h-full bg-gray-950 flex items-center justify-center">
      <div className="bg-gray-950 text-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back 👋</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none text-white placeholder-gray-500"
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
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none text-white placeholder-gray-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <span onClick={() => navigate("/register")} className="text-indigo-400 cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
