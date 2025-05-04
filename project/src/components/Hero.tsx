import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import vvitAerial from '../assets/900px-VVIT_Ariel_View.jpg';
import aboutus from '../assets/aboutus.png';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [vvitAerial, aboutus];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden h-screen">
      {/* Background Images */}
      <AnimatePresence mode='wait'>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 h-full w-full object-cover"
          alt="VVIT Campus"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Vasireddy Venkatadri Institute of Technology
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto"
            >
              Empowering minds, shaping futures. A premier engineering institution committed to excellence in education,
              innovation, and research.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-100 transform transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                Apply Now
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-6">
        {/* Prev Button */}
        <button
          onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImage === index ? 'bg-white scale-100' : 'bg-white/50 scale-75'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;