import { motion } from 'framer-motion';

const categories = [
  'All Resources',
  'Career Development',
  'Skills',
  'Research',
  'Tools',
];

export default function ResourceCategories() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {categories.map((category, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${
            index === 0 ? 'bg-primary-600 text-white' : 'bg-white text-gray-700'
          } px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}