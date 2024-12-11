import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  ChartBarIcon, 
  ChatBubbleLeftRightIcon, 
  DocumentTextIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Career Assessment',
    description: 'Take our comprehensive assessment to discover careers that match your skills and interests.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Career Paths',
    description: 'Explore detailed information about various career paths and their requirements.',
    icon: ChartBarIcon,
  },
  {
    name: 'Expert Counseling',
    description: 'Get personalized guidance from experienced career counselors.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Resources',
    description: 'Access a wealth of career development resources and materials.',
    icon: DocumentTextIcon,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need to plan your career
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive tools and resources to help you make informed career decisions
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-10"
        >
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <div className="w-12 h-12 rounded-md bg-primary-500 text-white flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.name}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}