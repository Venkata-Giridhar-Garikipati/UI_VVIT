import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Calendar, Users, GraduationCap, BookOpen, DollarSign, Phone, FileText, CheckCircle } from 'lucide-react';

const Admissions = () => {
  const [activeTab, setActiveTab] = useState('btech');
  const [activeSection, setActiveSection] = useState('intake');

  const steps = [
    {
      title: 'Eligibility Check',
      description: 'Verify your eligibility criteria including academic qualifications and entrance exam scores.',
      icon: ClipboardCheck
    },
    {
      title: 'Application Process',
      description: 'Complete the online application form and submit required documents.',
      icon: Calendar
    },
    {
      title: 'Counseling',
      description: 'Attend counseling session for branch allocation based on merit.',
      icon: Users
    },
    {
      title: 'Admission Confirmation',
      description: 'Complete admission process by paying fees and submitting original documents.',
      icon: GraduationCap
    }
  ];

  const btechIntake = [
    { course: 'Computer Science & Engineering', code: 'CSE', total: 480, catA: 384, catB: 144 },
    { course: 'CSE (AI & ML)', code: 'CSM', total: 360, catA: 288, catB: 108 },
    { course: 'CSE (AI)', code: 'CAI', total: 180, catA: 144, catB: 54 },
    { course: 'AI & Data Science', code: 'AID', total: 180, catA: 144, catB: 54 },
    { course: 'Information Technology', code: 'INF', total: 180, catA: 144, catB: 54 },
    { course: 'Electronics & Communication Engineering', code: 'ECE', total: 180, catA: 144, catB: 54 },
    { course: 'Electrical and Electronics Engineering', code: 'EEE', total: 180, catA: 144, catB: 54 },
    { course: 'CSE (IoT & Cyber Security with Blockchain)', code: 'CIC', total: 120, catA: 96, catB: 36 },
    { course: 'Civil Engineering', code: 'CIV', total: 120, catA: 96, catB: 36 },
    { course: 'Mechanical Engineering', code: 'MEC', total: 120, catA: 96, catB: 36 },
    { course: 'CSE (IoT)', code: 'CSO', total: 60, catA: 48, catB: 18 }
  ];

  const mtechIntake = [
    { course: 'CSE - Computer Science & Engineering', total: 18, catA: 12, catB: 6 },
    { course: 'ECE - VLSI & Embedded Systems Design', total: 18, catA: 12, catB: 6 },
    { course: 'EEE - Power Electronics & Electrical Drives', total: 9, catA: 6, catB: 3 },
    { course: 'Mech - Machine Design', total: 9, catA: 6, catB: 3 },
    { course: 'Civil - Structural Engineering', total: 18, catA: 12, catB: 6 }
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
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Admissions</h1>
          <p className="mt-4 text-xl text-gray-500">Your journey to excellence begins here</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="tel:+919849542336" className="inline-flex items-center text-orange-600 hover:text-red-600">
              <Phone className="h-5 w-5 mr-2" />
              Mr. Kalyan: +91 9849542336
            </a>
            <a href="tel:+919959943336" className="inline-flex items-center text-orange-600 hover:text-red-600">
              <Phone className="h-5 w-5 mr-2" />
              Mr. V. Srikanth: +91 9959943336
            </a>
          </div>
        </motion.div>

        {/* Program Selection Tabs */}
        <div className="mt-12 flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('btech')}
            className={`px-6 py-3 rounded-lg font-medium ${
              activeTab === 'btech'
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            UG Admissions (B.Tech)
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('mtech')}
            className={`px-6 py-3 rounded-lg font-medium ${
              activeTab === 'mtech'
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            PG Admissions (M.Tech)
          </motion.button>
        </div>

        {/* Section Tabs */}
        <div className="mt-8 flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection('intake')}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeSection === 'intake'
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Intake & Fees
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection('eligibility')}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeSection === 'eligibility'
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Eligibility
          </motion.button>
        </div>

        {/* Content Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          {/* B.Tech Content */}
          {activeTab === 'btech' && (
            <div className="space-y-8">
              {/* Intake Section */}
              {activeSection === 'intake' && (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">B.Tech Intake Details (AY: 2024-25)</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gradient-to-r from-orange-50 to-red-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Intake</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category A</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category B</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {btechIntake.map((course, index) => (
                            <motion.tr
                              key={course.code}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                            >
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.course}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.code}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.total}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.catA}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.catB}</td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Fee Structure</h3>
                        <ul className="space-y-3">
                          <li className="flex justify-between">
                            <span className="text-gray-600">Category A</span>
                            <span className="font-medium text-orange-600">₹65,200/- per year</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Category B (Non-NRI)</span>
                            <span className="font-medium text-orange-600">₹1,95,600/- per year</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Category B (NRI)</span>
                            <span className="font-medium text-orange-600">$5,000/- per year</span>
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}

              {/* Eligibility Section */}
              {activeSection === 'eligibility' && (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">B.Tech Eligibility Criteria</h2>
                    
                    <div className="space-y-8">
                      {/* Category A */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-xl font-semibold text-orange-600 mb-4">Category A - Convener Quota (70%)</h3>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">Must be an Indian National</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">Age: Minimum 16 years as of 31st December of the Academic year</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">Passed Intermediate with Mathematics, Physics, and Chemistry or equivalent examination</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">Must qualify in AP EAMCET examination</span>
                          </li>
                        </ul>
                      </motion.div>

                      {/* Category B */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h3 className="text-xl font-semibold text-orange-600 mb-4">Category B - Management Quota (30%)</h3>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">15% seats reserved for NRI candidates</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">Remaining seats filled through management quota</span>
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* M.Tech Content */}
          {activeTab === 'mtech' && (
            <div className="space-y-8">
              {/* Intake Section */}
              {activeSection === 'intake' && (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">M.Tech Intake Details (AY: 2024-25)</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gradient-to-r from-orange-50 to-red-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Intake</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category A</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category B</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {mtechIntake.map((course, index) => (
                            <motion.tr
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                            >
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.course}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.total}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.catA}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.catB}</td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-8">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Fee Structure</h3>
                        <div className="flex justify-between">
                          <span className="text-gray-600">All Categories</span>
                          <span className="font-medium text-orange-600">₹60,400/- per year</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}

              {/* Eligibility Section */}
              {activeSection === 'eligibility' && (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">M.Tech Eligibility Criteria</h2>
                    
                    <div className="space-y-8">
                      {/* Category A */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-xl font-semibold text-orange-600 mb-4">Category A - Convener Quota (70%)</h3>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">Bachelor's degree in Engineering/Technology in relevant discipline</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">Valid GATE score or PGECET rank</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">AMIE/AMIETE qualifications recognized as equivalent to B.E./B.Tech</span>
                          </li>
                        </ul>
                      </motion.div>

                      {/* Sponsored Candidates */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h3 className="text-xl font-semibold text-orange-600 mb-4">Sponsored Candidates</h3>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">Maximum 2 candidates per specialization</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">Must be permanent employee with 2+ years experience</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">Sponsoring agency must be Government/PSU/Reputed Private Organization</span>
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <div className="text-gray-600 italic">
              <p>All Admissions are provisional and subject to rules and regulations prescribed by the Government of Andhra Pradesh from time to time. The admission of any candidate, even if made, will be cancelled if such admission is found to be made contrary to the above referred rules and regulations at any time. In such cases, the candidate shall not have any claim whatsoever in any manner.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Apply Now
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Admissions;