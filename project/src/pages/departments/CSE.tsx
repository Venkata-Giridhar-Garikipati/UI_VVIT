import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Laptop, Library, School, Trophy, Lightbulb, Calendar, Building2 } from 'lucide-react';

const CSE = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About', icon: BookOpen },
    { id: 'peos', label: 'PEOs, POs & PSOs', icon: Award },
    { id: 'faculty', label: 'Faculty', icon: Users },
    { id: 'placements', label: 'Placements', icon: Trophy },
    { id: 'workshops', label: 'Workshops & Seminars', icon: School },
    { id: 'infrastructure', label: 'Infrastructure', icon: Building2 },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'innovations', label: 'Teaching Innovations', icon: Lightbulb },
    { id: 'academics', label: 'Academics', icon: Calendar },
    { id: 'library', label: 'Department Library', icon: Library }
  ];

  const faculty = [
    {
      name: 'Dr. John Doe',
      designation: 'Professor & HOD',
      qualification: 'Ph.D in Computer Science',
      specialization: 'Machine Learning, Data Science',
      experience: '20+ years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
    },
    // Add more faculty members
  ];

  const labs = [
    {
      name: 'Advanced Computing Lab',
      description: 'State-of-the-art facility for advanced computing research and projects',
      equipment: ['High-Performance Workstations', 'GPU Servers', 'Cloud Computing Infrastructure']
    },
    {
      name: 'Data Science Lab',
      description: 'Dedicated lab for data analytics and machine learning projects',
      equipment: ['Data Analysis Tools', 'ML Frameworks', 'Big Data Processing Systems']
    },
    // Add more labs
  ];

  const achievements = [
    {
      year: '2023',
      title: 'NBA Accreditation',
      description: 'Department received NBA accreditation with highest grade'
    },
    {
      year: '2022',
      title: 'Research Excellence',
      description: '50+ research papers published in international journals'
    },
    // Add more achievements
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
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Department of Computer Science & Engineering</h1>
          <p className="mt-4 text-xl text-gray-500">Nurturing Innovation and Excellence in Computing</p>
        </motion.div>

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
          {/* About Section */}
          {activeTab === 'about' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Department</h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    The Department of Computer Science and Engineering at VVIT was established in 2007 with the vision of producing industry-ready engineers. The department has grown significantly over the years and currently offers B.Tech, M.Tech, and Ph.D. programs in Computer Science and Engineering.
                  </p>
                  <p className="mt-4">
                    Our department is known for its excellent infrastructure, experienced faculty, and strong industry connections. We focus on providing practical exposure through industry-relevant projects, workshops, and internships.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Vision</h3>
                    <p className="text-gray-600">To be a center of excellence in Computer Science Education and Research</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Mission</h3>
                    <p className="text-gray-600">To produce industry-ready engineers with strong technical foundation and ethical values</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Key Focus Areas</h3>
                    <ul className="text-gray-600 list-disc list-inside">
                      <li>Artificial Intelligence & ML</li>
                      <li>Data Science</li>
                      <li>Cloud Computing</li>
                      <li>Cybersecurity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* PEOs, POs & PSOs Section */}
          {activeTab === 'peos' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Educational Objectives (PEOs)</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center mr-3 mt-0.5">1</span>
                        <p className="text-gray-600">To produce graduates with strong foundation in mathematical, scientific and engineering fundamentals</p>
                      </div>
                      <div className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center mr-3 mt-0.5">2</span>
                        <p className="text-gray-600">To prepare students for successful careers in industry and higher studies</p>
                      </div>
                      <div className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center mr-3 mt-0.5">3</span>
                        <p className="text-gray-600">To develop professional and ethical attitude, effective communication skills and teamwork</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Outcomes (POs)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Add Program Outcomes */}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Specific Outcomes (PSOs)</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center mr-3 mt-0.5">1</span>
                        <p className="text-gray-600">Apply knowledge of Computer Science to develop innovative solutions for real-world problems</p>
                      </div>
                      <div className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center mr-3 mt-0.5">2</span>
                        <p className="text-gray-600">Design and develop software applications using modern tools and technologies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Faculty Section */}
          {activeTab === 'faculty' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Faculty</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {faculty.map((member, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-lg font-semibold text-center">{member.name}</h3>
                      <p className="text-gray-600 text-center">{member.designation}</p>
                      <div className="mt-4 space-y-2 text-sm text-gray-600">
                        <p><strong>Qualification:</strong> {member.qualification}</p>
                        <p><strong>Specialization:</strong> {member.specialization}</p>
                        <p><strong>Experience:</strong> {member.experience}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Infrastructure Section */}
          {activeTab === 'infrastructure' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Infrastructure and Labs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {labs.map((lab, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-2">{lab.name}</h3>
                      <p className="text-gray-600 mb-4">{lab.description}</p>
                      <h4 className="font-medium text-gray-900 mb-2">Equipment:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {lab.equipment.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Achievements Section */}
          {activeTab === 'achievements' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Department Achievements</h2>
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start bg-gray-50 rounded-lg p-6">
                      <div className="flex-shrink-0 bg-blue-900 text-white px-4 py-2 rounded-lg mr-4">
                        {achievement.year}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{achievement.title}</h3>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Add other tab content sections similarly */}
        </div>
      </div>
    </div>
  );
};

export default CSE;