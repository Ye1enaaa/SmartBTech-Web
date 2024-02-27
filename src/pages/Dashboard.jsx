import React from 'react';
import { faBolt, faTriangleExclamation, faPlug } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import USTPLogo from '/ustp.png';
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${USTPLogo})`, backgroundSize: '400px', backgroundRepeat:'no-repeat' }}></div> */}
      {/* <div className="justify-center z-0" style={{ backgroundImage: `url(${USTPLogo})`, backgroundSize: '400px', backgroundRepeat:'no-repeat' }}></div> */}
      {/* Top Bar */}
      <div className="bg-green-500 py-4 text-white text-center">
        <h1 className="text-2xl font-bold" style={{fontFamily: 'Poppins'}}>SmartBTech USTP: Smart Building Technology</h1>
      </div>
      {/* Main Content */}
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Power Box */}
          <div className="bg-white p-4 rounded-lg shadow-md h-48">
            <h2 className="text-lg font-semibold mb-2" style={{fontFamily:'Poppins'}}>Power [W]</h2>
            <div className='flex justify-end mr-6 space-x-20'>
              <div className='text-8xl' style={{fontFamily:'Poppins'}}>137</div>
              <FontAwesomeIcon icon={faBolt} size='6x' style={{color:'#8B8000'}}/>
            </div>
          </div>

          {/* Voltage Box */}
          <div className="bg-white p-4 rounded-lg shadow-md h-48">
            <h2 className="text-lg font-semibold mb-2" style={{fontFamily:'Poppins'}}>Voltage [V]</h2>
            <div className='flex justify-end mr-6 space-x-20'>
              <div className='text-8xl' style={{fontFamily:'Poppins'}}>137</div>
              <FontAwesomeIcon icon={faTriangleExclamation} size='6x' style={{color:'#FF0000'}}/>
            </div>
          </div>

          {/* Current Box */}
          <div className="bg-white p-4 rounded-lg shadow-md h-48">
            <h2 className="text-lg font-semibold mb-2" style={{fontFamily:'Poppins'}}>Current [A]</h2>
            <div className='flex justify-end mr-6 space-x-20'>
              <div className='text-8xl' style={{fontFamily:'Poppins'}}>137</div>
              <FontAwesomeIcon icon={faPlug} size='6x' style={{color:'#8B8000'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
