import React from 'react';
import { BookOpen, Users, Building2, Award } from 'lucide-react';

const features = [
  {
    name: 'Modern Library',
    description: 'Computerized library with vast collection of books, journals, and digital resources.',
    icon: BookOpen,
  },
  {
    name: 'Expert Faculty',
    description: 'Highly qualified and experienced faculty members dedicated to student success.',
    icon: Users,
  },
  {
    name: 'State-of-the-art Facilities',
    description: 'Advanced labs, Siemens Center of Excellence, and Google Code Labs.',
    icon: Building2,
  },
  {
    name: 'Accreditations',
    description: "NAAC 'A' Grade and NBA accredited programs.",
    icon: Award,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose VVIT?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Excellence in education through modern facilities and innovative teaching methods.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-900 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;