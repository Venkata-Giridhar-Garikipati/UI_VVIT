import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, Award } from 'lucide-react';
import PlacementUpdates from '../components/PlacementUpdates';

const Placements = () => {
  const stats = [
    { label: 'Average Package', value: '₹8.5 LPA' },
    { label: 'Highest Package', value: '₹44 LPA' },
    { label: 'Companies Visited', value: '200+' },
    { label: 'Students Placed', value: '95%' },
  ];

  const topRecruiters = [
    'Microsoft', 'Amazon', 'Infosys', 'TCS', 'Wipro', 
    'Cognizant', 'Accenture', 'IBM', 'Capgemini', 'Tech Mahindra'
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Placements</h1>
          <p className="mt-4 text-xl text-gray-500">Building Careers, Creating Leaders</p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="mt-2 text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <PlacementUpdates />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Recruiters</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {topRecruiters.map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <div className="relative bg-gray-50 p-4 rounded-lg text-center font-medium text-gray-800">
                    {company}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Training Programs</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 text-orange-900 flex items-center justify-center mr-3 mt-0.5">1</span>
                  <span className="text-gray-600">Aptitude and Soft Skills Training</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 text-orange-900 flex items-center justify-center mr-3 mt-0.5">2</span>
                  <span className="text-gray-600">Technical Interview Preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 text-orange-900 flex items-center justify-center mr-3 mt-0.5">3</span>
                  <span className="text-gray-600">Mock Interviews with Industry Experts</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 text-orange-900 flex items-center justify-center mr-3 mt-0.5">4</span>
                  <span className="text-gray-600">Industry-specific Certification Courses</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Placement Support</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 text-orange-900 flex items-center justify-center mr-3 mt-0.5">1</span>
                  <span className="text-gray-600">Dedicated Placement Cell</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 text-orange-900 flex items-center justify-center mr-3 mt-0.5">2</span>
                  <span className="text-gray-600">Industry-Academia Partnerships</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 text-orange-900 flex items-center justify-center mr-3 mt-0.5">3</span>
                  <span className="text-gray-600">Career Counseling Sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 text-orange-900 flex items-center justify-center mr-3 mt-0.5">4</span>
                  <span className="text-gray-600">Resume Building Workshops</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <div className="relative bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Year-wise Placement Statistics</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students Placed</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Companies Visited</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Highest Package</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2023-24</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">95%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">200+</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">44 LPA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2022-23</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">92%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">180+</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">38 LPA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2021-22</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">90%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">150+</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">35 LPA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Placements;