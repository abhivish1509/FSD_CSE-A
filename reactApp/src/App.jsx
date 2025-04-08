import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-500 p-6">
      <div className="w-full max-w-3xl bg-white/20 backdrop-blur-lg shadow-xl rounded-xl p-8 border border-white/30">
        <h1 className="text-3xl font-bold text-white text-center mb-6 drop-shadow-lg">
          Welcome to Our App
        </h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
