import { motion } from 'framer-motion';
import { DocumentTextIcon, VideoCameraIcon, BookOpenIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const resources = [
  {
    title: 'Resume Writing Guide',
    type: 'Guide',
    icon: DocumentTextIcon,
    description: 'Learn how to create a professional resume that stands out.',
    category: 'Career Development',
  },
  {
    title: 'Interview Preparation',
    type: 'Video Course',
    icon: VideoCameraIcon,
    description: 'Master the art of interviewing with our comprehensive video series.',
    category: 'Skills',
  },
  {
    title: 'Industry Reports',
    type: 'Reports',
    icon: BookOpenIcon,
    description: 'Stay updated with the latest industry trends and insights.',
    category: 'Research',
  },
  {
    title: 'Skill Development',
    type: 'Courses',
    icon: AcademicCapIcon,
    description: 'Enhance your professional skills with our curated courses.',
    category: 'Skills',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ResourceGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
    >
      {resources.map((resource, index) => (
        <motion.div
          key={index}
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
              <resource.icon className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
              <span className="text-sm text-gray-500">{resource.type}</span>
            </div>
          </div>
          <p className="text-gray-600 mb-4">{resource.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm bg-primary-50 text-primary-700 px-3 py-1 rounded-full">
              {resource.category}
            </span>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              Access →
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}