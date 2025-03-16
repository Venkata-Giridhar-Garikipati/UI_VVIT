import React from 'react';
import { BookOpen, Users, Building2, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Modern Library',
    description: 'Computerized library with vast collection of books, journals, and digital resources.',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Expert Faculty',
    description: 'Highly qualified and experienced faculty members dedicated to student success.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'State-of-the-art Facilities',
    description: 'Advanced labs, Siemens Center of Excellence, and Google Code Labs.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Accreditations',
    description: "NAAC 'A' Grade and NBA accredited programs.",
    icon: Award,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
];

const AnimatedFeatures = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-white to-orange-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Why Choose VVIT?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"
          >
            Excellence in education through modern facilities and innovative teaching methods.
          </motion.p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center">
                      <motion.span
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-md shadow-lg"
                      >
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </motion.span>
                      <h3 className="ml-4 text-lg font-medium text-gray-900">
                        {feature.name}
                      </h3>
                    </div>
                    <p className="mt-4 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedFeatures;