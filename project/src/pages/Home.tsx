import React from 'react';
import Hero from '../components/Hero';
import Hero3D from '../components/Hero3D';
import AnimatedStats from '../components/AnimatedStats';
import AnimatedFeatures from '../components/AnimatedFeatures';
import Courses from '../components/Courses';

const Home = () => {
  return (
    <>
      <Hero />
     
      <AnimatedStats />
      <AnimatedFeatures />
      <Courses />
    </>
  );
};

export default Home;