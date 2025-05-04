import React from 'react';
import DepartmentTemplate from '../../components/DepartmentTemplate';

const AIDS = () => {
  const departmentData = {
    name: 'AI & Data Science',
    description: 'Study data analytics and artificial intelligence applications.',
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: {
      about: 'The Department of AI & Data Science focuses on developing professionals skilled in data analytics, machine learning, and AI applications...',
      vision: 'To be a leading center for AI and Data Science education and research...',
      mission: [
        'To provide comprehensive education in AI and Data Science',
        'To foster innovation through practical applications',
        'To develop ethical AI practitioners'
      ],
      facilities: [
        {
          name: 'Data Analytics Lab',
          description: 'Advanced computing facility for data analysis and visualization.'
        },
        {
          name: 'AI Research Center',
          description: 'Dedicated space for AI research and development.'
        }
      ]
    }
  };

  return <DepartmentTemplate {...departmentData} />;
};

export default AIDS;
