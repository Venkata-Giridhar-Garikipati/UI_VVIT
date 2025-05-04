import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Laptop, Library, School, Trophy, Lightbulb, Calendar, Building2 } from 'lucide-react';

interface DepartmentProps {
  name: string;
  description: string;
  image: string;
  content: {
    about: string;
    vision: string;
    mission: string[];
    facilities: { name: string; description: string; }[];
    highlights?: string[];
    specializations?: {
      name: string;
      description: string;
    }[];
  };
}

const DepartmentTemplate = ({ name, description, image, content }: DepartmentProps) => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About', icon: BookOpen },
    { id: 'vision', label: 'Vision & Mission', icon: Lightbulb },
    { id: 'facilities', label: 'Facilities', icon: Building2 },
    { id: 'faculty', label: 'Faculty', icon: Users },
    { id: 'achievements', label: 'Achievements', icon: Trophy }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with background image */}
        <div className="relative h-64 rounded-xl overflow-hidden mb-8">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold">{name}</h1>
              <p className="mt-2 text-xl">{description}</p>
            </div>
          </div>
        </div>

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
              <div className="prose max-w-none">
                <p>{content.about}</p>
              </div>
            </motion.div>
          )}

          {activeTab === 'vision' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-4">Vision</h2>
              <p className="text-gray-600 mb-8">{content.vision}</p>
              
              <h2 className="text-2xl font-bold mb-4">Mission</h2>
              <ul className="list-disc list-inside space-y-2">
                {content.mission.map((item, index) => (
                  <li key={index} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {activeTab === 'facilities' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {content.facilities.map((facility, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              ))}
            </motion.div>
          )}

          {/* Add new sections for highlights and specializations */}
          {content.highlights && (
            <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Department Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {content.specializations && (
            <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Specializations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.specializations.map((spec, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">{spec.name}</h3>
                    <p className="text-gray-600">{spec.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepartmentTemplate;
