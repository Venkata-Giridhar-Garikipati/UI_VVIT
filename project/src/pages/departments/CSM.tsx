import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Laptop, Lightbulb } from 'lucide-react';

const CSM = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About', icon: BookOpen },
    { id: 'vision', label: 'Vision & Mission', icon: Lightbulb },
    { id: 'hod', label: "HOD's Message", icon: Users },
    { id: 'labs', label: 'Laboratories', icon: Laptop },
    { id: 'faculty', label: 'Faculty Achievements', icon: Award }
  ];

  const facultyAchievements = [
    { sno: 1, name: 'Dr. K. Suresh Babu', event: 'AWS Certified Cloud Practitioner - Fundamental', award: 'Global Certification', year: '2021' },
    { sno: 2, name: 'Dr. K. Suresh Babu', event: 'AWS Certified solution Architect.', award: 'Global Certification', year: '2022' },
    // ...add all faculty achievements
  ];

  const labs = [
    {
      name: 'Intelligent Agents Lab',
      description: 'The Intelligent Agents Lab is dedicated to exploring the design and development of autonomous systems. In this lab, students learn to create intelligent agents capable of perceiving their environment, making decisions, and executing actions to accomplish defined objectives...'
    },
    {
      name: 'ML Explorers Lab',
      description: 'The ML Explorers Lab is focused on core machine learning concepts, offering practical exposure to both supervised and unsupervised techniques...'
    },
    {
      name: 'AI on Cloud Lab',
      description: 'The AI on Cloud Lab is designed to provide students with firsthand experience in deploying and managing AI and ML solutions on cloud platforms...'
    },
    {
      name: 'DeepVerse Lab',
      description: 'The DeepVerse Lab specializes in deep learning, offering an immersive environment for exploring advanced neural network models...'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with background image */}
        <div className="relative h-64 rounded-xl overflow-hidden mb-8">
          <img 
            src="https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="AI & Machine Learning" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold">AI & Machine Learning</h1>
              <p className="mt-2 text-xl">Driving Innovation in an AI-Centric World</p>
            </div>
          </div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">AI & Machine Learning</h1>
          <p className="mt-4 text-xl text-gray-500">Driving Innovation in an AI-Centric World</p>
        </motion.div> */}

        {/* Navigation Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center px-4 py-2 rounded-lg font-medium ${
                activeTab === tab.id
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="h-5 w-5 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="mt-8">
          {activeTab === 'about' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  The Department of Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning (CSM) is committed to preparing future-ready professionals capable of driving innovation in an AI-centric world...
                </p>
                {/* Add rest of the about content */}
              </div>
            </motion.div>
          )}

          {activeTab === 'vision' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Department Vision</h2>
                <p className="text-gray-600">
                  To aspire as a center of excellence in AI-driven education and innovation, the CSM Department nurtures ethically grounded professionals skilled in Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing, and Data-centric solutions.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Department Mission</h2>
                <ul className="list-disc list-inside space-y-3 text-gray-600">
                  <li>To develop technically skilled, ethically responsible professionals who can integrate core computing with AI domains to solve complex, data-driven problems.</li>
                  <li>To promote inquiry-driven learning and real-time problem-solving that engages students with modern tools, platforms, and emerging technologies through hands-on practice.</li>
                  <li>To emphasize interdisciplinary AI applications across healthcare, education, agriculture, and smart systems that fosters innovation with a strong focus on social impact and sustainability.</li>
                  <li>To create responsible AI practices and ethical decision-making are embedded in all learning, research, and outreach activities.</li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeTab === 'hod' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">HOD's Message</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">Welcome to the Department of CSE- Artificial Intelligence and Machine Learning at VVITU!</p>
                <p className="mb-4">
                  It gives me immense pleasure to welcome you to the Department of Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning (CSM) at Vasireddy Venkatadri Institute of Technological University(VVITU)...
                </p>
                {/* Add rest of HOD's message */}
              </div>
            </motion.div>
          )}

          {activeTab === 'labs' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {labs.map((lab) => (
                <div key={lab.name} className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-4">{lab.name}</h3>
                  <p className="text-gray-600">{lab.description}</p>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'faculty' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Faculty Achievements</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Faculty Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Award Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {facultyAchievements.map((achievement) => (
                      <tr key={achievement.sno}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{achievement.sno}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{achievement.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{achievement.event}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{achievement.award}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{achievement.year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CSM;
