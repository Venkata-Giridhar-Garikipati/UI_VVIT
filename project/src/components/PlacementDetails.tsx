import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Calendar, Users, Building2, Mail, Globe, MapPin, Phone, FileText, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface PlacementDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  update: {
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
  };
}

const PlacementDetails: React.FC<PlacementDetailsProps> = ({ isOpen, onClose, update }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 transition-opacity"
              onClick={onClose}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </motion.div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
            >
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  onClick={onClose}
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="w-full">
                    <div className="flex items-center mb-6">
                      <img
                        src={update.logo}
                        alt={update.company}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold text-gray-900">{update.company}</h3>
                        <p className="text-lg text-gray-600">{update.role}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <div className="flex items-center text-gray-800 mb-2">
                          <Award className="h-5 w-5 mr-2 text-orange-600" />
                          <span className="font-medium">Package:</span>
                          <span className="ml-2">{update.package}</span>
                        </div>
                        <div className="flex items-center text-gray-800 mb-2">
                          <Calendar className="h-5 w-5 mr-2 text-orange-600" />
                          <span className="font-medium">Application Deadline:</span>
                          <span className="ml-2">{format(new Date(update.deadline), 'MMM dd, yyyy')}</span>
                        </div>
                        <div className="flex items-center text-gray-800">
                          <Clock className="h-5 w-5 mr-2 text-orange-600" />
                          <span className="font-medium">Status:</span>
                          <span className={`ml-2 px-2 py-1 rounded-full text-sm ${
                            update.type === 'upcoming'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {update.type === 'upcoming' ? 'Upcoming' : 'Completed'}
                          </span>
                        </div>
                      </div>

                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                          <Building2 className="h-5 w-5 mr-2 text-orange-600" />
                          Company Information
                        </h4>
                        {update.companyInfo && (
                          <div className="space-y-2 text-sm">
                            {update.companyInfo.website && (
                              <div className="flex items-center">
                                <Globe className="h-4 w-4 mr-2 text-orange-600" />
                                <a href={update.companyInfo.website} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700">
                                  Visit Website
                                </a>
                              </div>
                            )}
                            {update.companyInfo.location && (
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-orange-600" />
                                <span>{update.companyInfo.location}</span>
                              </div>
                            )}
                            {update.companyInfo.email && (
                              <div className="flex items-center">
                                <Mail className="h-4 w-4 mr-2 text-orange-600" />
                                <a href={`mailto:${update.companyInfo.email}`} className="text-orange-600 hover:text-orange-700">
                                  {update.companyInfo.email}
                                </a>
                              </div>
                            )}
                            {update.companyInfo.phone && (
                              <div className="flex items-center">
                                <Phone className="h-4 w-4 mr-2 text-orange-600" />
                                <a href={`tel:${update.companyInfo.phone}`} className="text-orange-600 hover:text-orange-700">
                                  {update.companyInfo.phone}
                                </a>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {update.description && (
                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Job Description</h4>
                        <p className="text-gray-600">{update.description}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Requirements</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {update.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      {update.responsibilities && (
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 mb-2">Responsibilities</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {update.responsibilities.map((resp, index) => (
                              <li key={index}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {update.perks && (
                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Perks & Benefits</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {update.perks.map((perk, index) => (
                            <div key={index} className="flex items-center bg-orange-50 p-3 rounded-lg">
                              <Award className="h-5 w-5 text-orange-600 mr-2" />
                              <span className="text-gray-700">{perk}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {update.applicationProcess && (
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Application Process</h4>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <ol className="space-y-4">
                            {update.applicationProcess.map((step, index) => (
                              <li key={index} className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-200 text-orange-800 flex items-center justify-center mr-3">
                                  {index + 1}
                                </span>
                                <span className="text-gray-700">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                {update.type === 'upcoming' && (
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-base font-medium text-white hover:from-orange-700 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Apply Now
                  </button>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PlacementDetails;