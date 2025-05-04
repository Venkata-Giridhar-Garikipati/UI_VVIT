import React from 'react';
import DepartmentTemplate from '../../components/DepartmentTemplate';

const CIVIL = () => {
  const departmentData = {
    name: 'Civil Engineering',
    description: 'Study structural design and construction management.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: {
      about: 'The Department of Civil Engineering focuses on structural engineering, construction technology, and environmental engineering...',
      vision: 'To be a center of excellence in civil engineering education and sustainable development...',
      mission: [
        'To provide quality education in civil engineering principles',
        'To promote research in sustainable construction',
        'To develop skilled civil engineers with environmental consciousness'
      ],
      facilities: [
        {
          name: 'Structural Engineering Lab',
          description: 'Advanced facility for structural analysis and testing.'
        },
        {
          name: 'Environmental Engineering Lab',
          description: 'Modern lab for environmental impact studies and water quality testing.'
        }
      ]
    }
  };

  return <DepartmentTemplate {...departmentData} />;
};

export default CIVIL;
