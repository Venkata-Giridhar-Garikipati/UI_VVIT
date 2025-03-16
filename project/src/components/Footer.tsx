import React from 'react';
import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <div className="flex items-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <GraduationCap className="h-8 w-8 text-orange-500" />
              </motion.div>
              <span className="ml-2 text-xl font-bold text-white">VVIT</span>
            </div>
            <p className="mt-4 text-gray-300">
              Empowering minds, shaping futures since 2007.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-orange-500 tracking-wider uppercase">Contact</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center group">
                <MapPin className="h-5 w-5 text-gray-400 group-hover:text-orange-500 transition-colors duration-200" />
                <p className="ml-3 text-base text-gray-300 group-hover:text-white transition-colors duration-200">
                  Nambur, Guntur District, Andhra Pradesh, India
                </p>
              </div>
              <div className="flex items-center group">
                <Phone className="h-5 w-5 text-gray-400 group-hover:text-orange-500 transition-colors duration-200" />
                <p className="ml-3 text-base text-gray-300 group-hover:text-white transition-colors duration-200">+91 XXXXXXXXXX</p>
              </div>
              <div className="flex items-center group">
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-orange-500 transition-colors duration-200" />
                <p className="ml-3 text-base text-gray-300 group-hover:text-white transition-colors duration-200">info@vvit.net</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold text-orange-500 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              {['About Us', 'Admissions', 'Academics', 'Campus Life'].map((item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-sm font-semibold text-orange-500 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              {['Student Portal', 'Faculty Portal', 'Library', 'Placements'].map((item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 border-t border-gray-700 pt-8"
        >
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Vasireddy Venkatadri Institute of Technology. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;