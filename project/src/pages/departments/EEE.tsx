import React from 'react';
import DepartmentTemplate from '../../components/DepartmentTemplate';

const EEE = () => {
  const departmentData = {
    name: 'Electrical & Electronics Engineering',
    description: 'Study electrical systems and power electronics.',
    image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: {
      about: 'The Department of Electrical & Electronics Engineering focuses on power systems, control systems, and electrical drives...',
      vision: 'To be a center of excellence in electrical engineering education...',
      mission: [
        'To provide quality education in electrical engineering',
        'To promote research in power systems and renewable energy',
        'To develop skilled electrical engineers'
      ],
      facilities: [
        {
          name: 'Power Systems Lab',
          description: 'Modern facility for power system analysis and control.'
        },
        {
          name: 'Electric Drives Lab',
          description: 'Advanced lab for electric motor and drive systems.'
        }
      ]
    }
  };

  return <DepartmentTemplate {...departmentData} />;
};

export default EEE;
