import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, History } from 'lucide-react';
import aboutus from '../assets/aboutus.png';
const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="py-12 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">About VVIT</h1>
          <p className="mt-4 text-xl text-gray-500">Excellence in Engineering Education Since 2007</p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <motion.div {...fadeIn} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              <History className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our History</h3>
              <p className="text-gray-600">Established in 2007, VVIT has grown to become one of the leading engineering institutions in Andhra Pradesh.</p>
            </div>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              <Target className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vision & Mission</h3>
              <p className="text-gray-600">To be a premier engineering institution that nurtures talent and creates leaders in technology.</p>
            </div>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              <Award className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accreditations</h3>
              <p className="text-gray-600">NAAC 'A' Grade accreditation and NBA accredited programs demonstrate our commitment to quality education.</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 prose prose-lg mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey of Excellence</h2>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={aboutus}
                    alt="Campus"
                    className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Students"
                    className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Vasireddy Venkatadri Institute of Technology (VVIT) was established with a vision to provide quality technical education and create competent engineers. Over the years, we have consistently evolved and adapted to meet the changing demands of the industry.
              </p>
              <p className="text-gray-600 mb-4">
                Our state-of-the-art facilities, including the Siemens Center of Excellence and Google Code Labs, provide students with hands-on experience in cutting-edge technologies. The institute's commitment to academic excellence is reflected in its highly qualified faculty and innovative teaching methods.
              </p>
              <p className="text-gray-600">
                VVIT's focus on holistic development extends beyond academics through various technical and cultural clubs, sports facilities, and industry collaboration programs. Our placement record stands testament to the quality of education and training provided at VVIT.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Research Excellence</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Multiple Research Centers</li>
                <li>• Industry Collaborations</li>
                <li>• Published Research Papers</li>
                <li>• Funded Projects</li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Modern Laboratories</li>
                <li>• Digital Library</li>
                <li>• Sports Complex</li>
                <li>• Innovation Centers</li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Student Life</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Technical Clubs</li>
                <li>• Cultural Activities</li>
                <li>• Sports Events</li>
                <li>• Industry Visits</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;