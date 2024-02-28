import React, { useEffect, useState } from 'react';
import { faBolt, faTriangleExclamation, faPlug } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import io from 'socket.io-client';
import USTPLogo from '/ustp.png';

const Dashboard = () => {
  const [data, setData] = useState({ power: 0, voltage: 0, current: 0 });

  useEffect(() => {
    const socket = io('http://192.168.131.169:5000');
    socket.on('message', newData => {
      setData(JSON.parse(newData));
    });
    
    return () => {
      socket.disconnect();
    };
  }, []);

  // Move the console log here to ensure logging the updated state
  console.log(data);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Top Bar */}
      <div className="bg-green-500 py-4 text-white text-center">
        <h1 className="text-2xl font-bold" style={{ fontFamily: 'Poppins' }}>SmartBTech USTP: Smart Building Technology</h1>
      </div>
      {/* Main Content */}
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Power Box */}
          <div className="bg-white p-4 rounded-lg shadow-md h-48">
            <h2 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Poppins' }}>Power [W]</h2>
            <div className='flex justify-end mr-6 space-x-20'>
              <div className='text-8xl' style={{ fontFamily: 'Poppins',
            fontSize: '3rem',
            alignSelf: 'center'
             }}>{data.power}</div>
              <FontAwesomeIcon icon={faBolt} size='6x' style={{ color: '#8B8000' }} />
            </div>
          </div>

          {/* Voltage Box */}
          <div className="bg-white p-4 rounded-lg shadow-md h-48">
            <h2 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Poppins' }}>Voltage [V]</h2>
            <div className='flex justify-end mr-6 space-x-20'>
              <div className='text-8xl' style={{ fontFamily: 'Poppins',
            fontSize: '3rem',
            alignSelf: 'center' }}>{data.voltage}</div>
              <FontAwesomeIcon icon={faTriangleExclamation} size='6x' style={{ color: '#FF0000' }} />
            </div>
          </div>

          {/* Current Box */}
          <div className="bg-white p-4 rounded-lg shadow-md h-48">
            <h2 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Poppins' }}>Current [A]</h2>
            <div className='flex justify-end mr-6 space-x-20'>
              <div className='text-8xl' style={{ fontFamily: 'Poppins',
            fontSize: '3rem',
            alignSelf: 'center'
             }}>{data.current}</div>
              <FontAwesomeIcon icon={faPlug} size='6x' style={{ color: '#8B8000' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
