import React from 'react';

const Stats = () => {
  return (
    <div className="bg-blue-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="text-4xl font-extrabold text-white">15+</div>
            <div className="mt-2 text-lg text-blue-100">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-white">8</div>
            <div className="mt-2 text-lg text-blue-100">Engineering Programs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-white">200+</div>
            <div className="mt-2 text-lg text-blue-100">Faculty Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-white">'A'</div>
            <div className="mt-2 text-lg text-blue-100">NAAC Grade</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;