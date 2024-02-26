import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-green-500 py-4 text-white text-center">
        <h1 className="text-2xl font-bold" style={{fontFamily: 'Poppins'}}>USTP: Smart Building Technology</h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Power Box */}
          <div className="bg-white p-4 rounded-lg shadow-md h-48">
            <h2 className="text-lg font-semibold mb-2">Power</h2>
            <p className="text-gray-700">Data goes here...</p>
          </div>

          {/* Voltage Box */}
          <div className="bg-white p-4 rounded-lg shadow-md h-48">
            <h2 className="text-lg font-semibold mb-2">Voltage</h2>
            <p className="text-gray-700">Data goes here...</p>
          </div>

          {/* Current Box */}
          <div className="bg-white p-4 rounded-lg shadow-md h-48">
            <h2 className="text-lg font-semibold mb-2">Current</h2>
            <p className="text-gray-700">Data goes here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
