import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Database, Cpu, Zap, Radio, Monitor, Cog } from 'lucide-react';

const departments = [
  {
    name: 'Computer Science & Engineering',
    icon: Monitor,
    description: 'Focus on software development, algorithms, and computer systems.',
    specializations: ['AI & ML', 'Cybersecurity', 'Full Stack Development']
  },
  {
    name: 'AI & Machine Learning',
    icon: Code,
    description: 'Specialized program in artificial intelligence and machine learning applications.',
    specializations: ['Deep Learning', 'Computer Vision', 'Natural Language Processing']
  },
  {
    name: 'AI & Data Science',
    icon: Database,
    description: 'Comprehensive study of data analytics and AI applications.',
    specializations: ['Big Data Analytics', 'Predictive Modeling', 'Data Visualization']
  },
  {
    name: 'Electronics & Communication',
    icon: Radio,
    description: 'Study of electronic systems and communication technologies.',
    specializations: ['VLSI Design', 'Embedded Systems', 'Communication Systems']
  },
  {
    name: 'Electrical & Electronics',
    icon: Zap,
    description: 'Focus on electrical systems and power electronics.',
    specializations: ['Power Systems', 'Control Systems', 'Electric Drives']
  },
  {
    name: 'Information Technology',
    icon: Cpu,
    description: 'Study of information systems and technology management.',
    specializations: ['Cloud Computing', 'IoT', 'Web Technologies']
  },
  {
    name: 'Mechanical Engineering',
    icon: Cog,
    description: 'Study of mechanical systems and manufacturing processes.',
    specializations: ['CAD/CAM', 'Thermal Engineering', 'Manufacturing Technology']
  },
  {
    name: 'Civil Engineering',
    icon: BookOpen,
    description: 'Focus on structural design and construction management.',
    specializations: ['Structural Engineering', 'Transportation', 'Environmental Engineering']
  }
];

const Academics = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Academic Programs</h1>
          <p className="mt-4 text-xl text-gray-500">Comprehensive engineering education for the future</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-md shadow-lg"
                  >
                    <dept.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="ml-3 text-xl font-bold text-gray-900">{dept.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Specializations:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {dept.specializations.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-6 py-4 bg-gradient-to-r from-orange-50 to-red-50">
                <a href="#" className="text-orange-600 hover:text-red-600 font-medium transition-colors duration-200">
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Academic Excellence</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-600 mb-4">
              Our academic programs are designed to provide a strong foundation in engineering principles while keeping pace with emerging technologies and industry requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg"
              >
                <h3 className="font-semibold text-lg mb-2 text-orange-600">Industry Collaboration</h3>
                <p className="text-gray-600">Partnerships with leading tech companies for practical exposure</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg"
              >
                <h3 className="font-semibold text-lg mb-2 text-orange-600">Research Focus</h3>
                <p className="text-gray-600">Emphasis on innovation and research in emerging technologies</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg"
              >
                <h3 className="font-semibold text-lg mb-2 text-orange-600">Modern Infrastructure</h3>
                <p className="text-gray-600">State-of-the-art laboratories and learning resources</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Academics;