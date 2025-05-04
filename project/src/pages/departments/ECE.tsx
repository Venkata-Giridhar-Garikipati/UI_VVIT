import React from 'react';
import DepartmentTemplate from '../../components/DepartmentTemplate';

const ECE = () => {
  const departmentData = {
    name: 'Electronics & Communication Engineering',
    description: 'Master electronic systems and communication technologies.',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: {
      about: `The Department of Electronics and Communication Engineering (ECE) at VVIT was established in 2007 
      and has evolved into a center of excellence in electronics and communication engineering education. 
      Our department offers a comprehensive curriculum that combines theoretical knowledge with practical 
      applications in areas such as VLSI design, embedded systems, signal processing, and wireless communications.
      
      The department maintains strong ties with industry leaders and research institutions, providing students 
      with opportunities for internships, projects, and research collaborations. Our state-of-the-art 
      laboratories and experienced faculty ensure that students receive cutting-edge education in line with 
      industry requirements.`,
      vision: `To emerge as a globally recognized department of excellence in Electronics and Communication 
      Engineering education and research, producing competent professionals with social responsibility 
      and ethical values.`,
      mission: [
        'To provide quality education through well-designed curriculum in line with industry needs and technological advancements',
        'To establish state-of-the-art laboratories and research facilities for hands-on experience',
        'To promote industry-institute interaction for practical exposure and career advancement',
        'To encourage entrepreneurship and innovation through research and development activities',
        'To inculcate professional ethics and leadership qualities among students'
      ],
      facilities: [
        {
          name: 'Digital Signal Processing Lab',
          description: 'Equipped with advanced DSP kits, MATLAB software, and real-time signal processing tools for practical implementation of signal processing algorithms.'
        },
        {
          name: 'VLSI Design Center',
          description: 'Features industry-standard EDA tools like Cadence, Synopsys, and Xilinx for IC design and verification, with FPGA development boards.'
        },
        {
          name: 'Communication Systems Laboratory',
          description: 'Houses modern communication equipment, spectrum analyzers, and network analyzers for experiments in analog and digital communications.'
        },
        {
          name: 'Embedded Systems Lab',
          description: 'Provides facilities for microcontroller programming, IoT development, and embedded system design using various development boards.'
        },
        {
          name: 'Microwave Engineering Lab',
          description: 'Contains microwave test bench, antenna design tools, and RF measurement equipment for practical training in wireless communications.'
        }
      ],
      highlights: [
        'NBA Accredited Program',
        'Industry-Aligned Curriculum',
        'Research Collaborations with Leading Institutions',
        'High Placement Record',
        'Regular Industry Visits and Expert Lectures',
        'Student Technical Clubs and Professional Societies'
      ],
      specializations: [
        {
          name: 'VLSI and Embedded Systems',
          description: 'Focus on chip design, verification, and embedded system development'
        },
        {
          name: 'Communication Systems',
          description: 'Specialization in wireless, optical, and satellite communications'
        },
        {
          name: 'Signal Processing',
          description: 'Emphasis on digital signal processing and its applications'
        }
      ]
    }
  };

  return <DepartmentTemplate {...departmentData} />;
};

export default ECE;
