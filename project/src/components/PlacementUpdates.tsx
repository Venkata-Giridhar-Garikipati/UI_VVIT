import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, Users, Award, Bell, Search, ChevronDown } from 'lucide-react';
import { format } from 'date-fns';
import PlacementDetails from './PlacementDetails';

interface PlacementUpdate {
  id: string;
  company: string;
  role: string;
  package: string;
  deadline: string;
  requirements: string[];
  type: 'upcoming' | 'completed';
  logo: string;
  date: string;
  description?: string;
  responsibilities?: string[];
  qualifications?: string[];
  perks?: string[];
  applicationProcess?: string[];
  companyInfo?: {
    website?: string;
    location?: string;
    email?: string;
    phone?: string;
  };
}

const sampleUpdates: PlacementUpdate[] = [
  {
    id: '1',
    company: 'Microsoft',
    role: 'Software Development Engineer',
    package: '44 LPA',
    deadline: '2024-03-25',
    requirements: ['B.Tech CSE/IT', 'CGPA > 7.5', 'No active backlogs'],
    type: 'upcoming',
    logo: 'https://images.unsplash.com/photo-1642132652075-2f0d404ce2e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
    date: '2024-03-20',
    description: 'Join Microsoft as a Software Development Engineer and work on cutting-edge technologies that impact millions of users worldwide.',
    responsibilities: [
      'Design and develop high-quality software solutions',
      'Collaborate with cross-functional teams',
      'Write clean, maintainable, and efficient code',
      'Participate in code reviews and technical discussions'
    ],
    perks: [
      'Health Insurance',
      'Stock Options',
      'Flexible Work Hours',
      'Learning Allowance',
      'Gym Membership',
      'Annual Bonus'
    ],
    applicationProcess: [
      'Online Application Submission',
      'Online Coding Assessment',
      'Technical Interviews (2 rounds)',
      'System Design Discussion',
      'HR Interview'
    ],
    companyInfo: {
      website: 'https://microsoft.com',
      location: 'Hyderabad, India',
      email: 'careers@microsoft.com',
      phone: '+91 XXXXXXXXXX'
    }
  },
  {
    id: '2',
    company: 'Amazon',
    role: 'Software Development Engineer',
    package: '32 LPA',
    deadline: '2024-03-28',
    requirements: ['B.Tech CSE/IT/ECE', 'CGPA > 7.0', 'No active backlogs'],
    type: 'upcoming',
    logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
    date: '2024-03-22',
    description: 'Amazon is looking for innovative Software Development Engineers to join our team and help build the future of e-commerce.',
    responsibilities: [
      'Develop scalable web services',
      'Design and implement new features',
      'Optimize application performance',
      'Debug production issues'
    ],
    perks: [
      'Health Insurance',
      'Sign-on Bonus',
      'Relocation Assistance',
      'Annual Bonus',
      'Food Allowance'
    ],
    applicationProcess: [
      'Resume Shortlisting',
      'Online Assessment',
      'Technical Interviews (3 rounds)',
      'Bar Raiser Interview',
      'HR Discussion'
    ],
    companyInfo: {
      website: 'https://amazon.jobs',
      location: 'Bangalore, India',
      email: 'careers@amazon.com',
      phone: '+91 XXXXXXXXXX'
    }
  },
  {
    id: '3',
    company: 'Google',
    role: 'Associate Software Engineer',
    package: '25 LPA',
    deadline: '2024-03-15',
    requirements: ['All branches', 'CGPA > 6.5', 'No active backlogs'],
    type: 'completed',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
    date: '2024-03-10',
    description: "Be part of Google's mission to organize the world's information and make it universally accessible and useful.",
    responsibilities: [
      'Build next-generation web applications',
      'Work with cutting-edge technologies',
      'Collaborate with global teams',
      'Drive technical initiatives'
    ],
    perks: [
      'Comprehensive Healthcare',
      'Google Stock Units',
      'Free Meals',
      'Transportation',
      'Fitness Center'
    ],
    applicationProcess: [
      'Online Application',
      'Coding Challenges',
      'Technical Interviews',
      'Team Matching',
      'Offer Discussion'
    ],
    companyInfo: {
      website: 'https://careers.google.com',
      location: 'Bangalore, India',
      email: 'careers@google.com',
      phone: '+91 XXXXXXXXXX'
    }
  }
];

const PlacementUpdates = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'package'>('date');
  const [selectedUpdate, setSelectedUpdate] = useState<PlacementUpdate | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const filteredUpdates = sampleUpdates
    .filter(update => {
      if (filter === 'all') return true;
      return update.type === filter;
    })
    .filter(update =>
      update.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      update.role.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return parseInt(b.package) - parseInt(a.package);
    });

  const handleViewDetails = (update: PlacementUpdate) => {
    setSelectedUpdate(update);
    setIsDetailsOpen(true);
  };

  return (
    <div className="py-12 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Placement Updates
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Stay updated with the latest placement opportunities
          </p>
        </motion.div>

        {/* Filters and Search */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              All Updates
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === 'upcoming'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === 'completed'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Completed
            </button>
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search companies or roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'package')}
                className="appearance-none bg-white px-4 py-2 pr-8 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="date">Sort by Date</option>
                <option value="package">Sort by Package</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUpdates.map((update) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={update.logo}
                    alt={update.company}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{update.company}</h3>
                    <p className="text-sm text-gray-500">{update.role}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Award className="h-5 w-5 mr-2 text-orange-500" />
                    <span>Package: {update.package}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                    <span>Deadline: {format(new Date(update.deadline), 'MMM dd, yyyy')}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {update.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    update.type === 'upcoming'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {update.type === 'upcoming' ? 'Upcoming' : 'Completed'}
                  </span>
                  <button
                    onClick={() => handleViewDetails(update)}
                    className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg text-sm font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-200"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredUpdates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No updates found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {selectedUpdate && (
          <PlacementDetails
            isOpen={isDetailsOpen}
            onClose={() => setIsDetailsOpen(false)}
            update={selectedUpdate}
          />
        )}
      </div>
    </div>
  );
};

export default PlacementUpdates;