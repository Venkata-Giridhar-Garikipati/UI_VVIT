import React from 'react';
import DepartmentTemplate from '../../components/DepartmentTemplate';

const MECH = () => {
  const departmentData = {
    name: 'Mechanical Engineering',
    description: 'Learn mechanical design and manufacturing processes.',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: {
      about: 'The Department of Mechanical Engineering focuses on design, manufacturing, and thermal systems...',
      vision: 'To be a leading center for mechanical engineering education and research...',
      mission: [
        'To provide comprehensive education in mechanical engineering',
        'To promote research in advanced manufacturing and design',
        'To develop skilled mechanical engineers'
      ],
      facilities: [
        {
          name: 'CAD/CAM Laboratory',
          description: 'Modern facility equipped with latest design and manufacturing software.'
        },
        {
          name: 'Thermal Engineering Lab',
          description: 'Advanced lab for heat transfer and thermodynamics experiments.'
        }
      ]
    }
  };

  return <DepartmentTemplate {...departmentData} />;
};

export default MECH;
