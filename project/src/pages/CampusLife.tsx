import React from 'react';
import { motion } from 'framer-motion';
import { Users, Book, Trophy, Music, Heart, Coffee, Laptop, Dumbbell } from 'lucide-react';

const facilities = [
  {
    name: 'Student Clubs',
    icon: Users,
    description: 'Join various technical and cultural clubs to pursue your interests.'
  },
  {
    name: 'Library',
    icon: Book,
    description: 'Access to vast collection of books, journals, and digital resources.'
  },
  {
    name: 'Sports Complex',
    icon: Trophy,
    description: 'State-of-the-art facilities for indoor and outdoor sports.'
  },
  {
    name: 'Cultural Center',
    icon: Music,
    description: 'Space for cultural activities and performances.'
  },
  {
    name: 'Healthcare',
    icon: Heart,
    description: '24/7 medical facility with qualified staff.'
  },
  {
    name: 'Cafeteria',
    icon: Coffee,
    description: 'Multiple dining options with hygienic food courts.'
  },
  {
    name: 'Tech Labs',
    icon: Laptop,
    description: 'Advanced laboratories with latest equipment.'
  },
  {
    name: 'Fitness Center',
    icon: Dumbbell,
    description: 'Modern gym with professional trainers.'
  }
];

const CampusLife = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Campus Life</h1>
          <p className="mt-4 text-xl text-gray-500">Experience the vibrant life at VVIT</p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white px-6 py-8 rounded-lg shadow-lg">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-md shadow-lg mb-4"
                >
                  <facility.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.name}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-center mb-8">Student Life Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Campus events"
                      className="rounded-lg shadow-md mb-4 w-full h-64 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Cultural Events</h3>
                    <p className="text-gray-600">Annual cultural fest VIVA showcases student talents in various arts and performances.</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Sports activities"
                      className="rounded-lg shadow-md mb-4 w-full h-64 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Sports & Recreation</h3>
                    <p className="text-gray-600">Regular sports events and tournaments foster team spirit and physical fitness.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Student Clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Technical Clubs</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Coding Club</li>
                  <li>Robotics Club</li>
                  <li>IoT Club</li>
                  <li>AI/ML Club</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Cultural Clubs</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Music Club</li>
                  <li>Dance Club</li>
                  <li>Drama Club</li>
                  <li>Art Club</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Professional Clubs</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>IEEE Student Branch</li>
                  <li>ISTE Chapter</li>
                  <li>CSI Chapter</li>
                  <li>E-Cell</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CampusLife;