import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AnimatedStats from '../components/AnimatedStats';
import AnimatedFeatures from '../components/AnimatedFeatures';
import Courses from '../components/Courses';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      <div className="space-y-24 py-16">
        <section className="bg-white">
          <AnimatedStats />
        </section>

        <section className="bg-gray-50">
          <div className="py-16">
            <AnimatedFeatures />
          </div>
        </section>

        <section className="bg-white">
          <div className="py-16">
            <Courses />
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Home;