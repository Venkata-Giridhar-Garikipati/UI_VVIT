import React from 'react';
import DepartmentTemplate from '../../components/DepartmentTemplate';

const IT = () => {
  const departmentData = {
    name: 'Information Technology',
    description: 'Focus on information systems and technology management.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: {
      about: 'The Department of Information Technology prepares students for careers in software development, systems integration, and emerging technologies...',
      vision: 'To be a center of excellence in Information Technology education and innovation...',
      mission: [
        'To provide quality education in modern IT technologies',
        'To promote research in cloud computing and IoT',
        'To develop industry-ready IT professionals'
      ],
      facilities: [
        {
          name: 'Cloud Computing Lab',
          description: 'State-of-the-art facility for cloud technologies and virtualization.'
        },
        {
          name: 'IoT Development Center',
          description: 'Advanced lab for Internet of Things development and testing.'
        }
      ]
    }
  };

  return <DepartmentTemplate {...departmentData} />;
};

export default IT;
