import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Years of Excellence', value: '15+' },
  { label: 'Engineering Programs', value: '8' },
  { label: 'Faculty Members', value: '200+' },
  { label: 'NAAC Grade', value: "'A'" },
];

const AnimatedStats = () => {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-red-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-8" />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-300 to-red-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className="text-4xl font-extrabold text-white"
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="mt-2 text-lg text-orange-100"
                >
                  {stat.label}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedStats;