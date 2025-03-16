import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const courses = [
  {
    name: 'Computer Science & Engineering',
    description: 'Learn advanced computing concepts and software development.',
    path: '/departments/cse',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'AI & Machine Learning',
    description: 'Explore artificial intelligence and machine learning technologies.',
    path: '/departments/csml',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'AI & Data Science',
    description: 'Study data analytics and artificial intelligence applications.',
    path: '/departments/aids',
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Electronics & Communication',
    description: 'Master electronic systems and communication technologies.',
    path: '/departments/ece',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Electrical & Electronics',
    description: 'Study electrical systems and power electronics.',
    path: '/departments/eee',
    image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Information Technology',
    description: 'Focus on information systems and technology management.',
    path: '/departments/it',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Mechanical Engineering',
    description: 'Learn mechanical design and manufacturing processes.',
    path: '/departments/mech',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Civil Engineering',
    description: 'Study structural design and construction management.',
    path: '/departments/civil',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
];

const Courses = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Programs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive engineering programs designed for the future.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{course.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{course.description}</p>
                  <div className="mt-4">
                    <Link
                      to={course.path}
                      className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-red-600 transition-colors duration-200"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;