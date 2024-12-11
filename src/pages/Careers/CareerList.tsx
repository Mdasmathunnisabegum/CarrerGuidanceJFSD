import { motion } from 'framer-motion';

const careers = [
  {
    title: "Software Developer",
    category: "Technology",
    salary: "$70,000 - $150,000",
    description: "Design and develop software applications...",
  },
  {
    title: "Data Scientist",
    category: "Technology",
    salary: "$80,000 - $160,000",
    description: "Analyze complex data sets to help guide business decisions...",
  },
];

export default function CareerList() {
  return (
    <div className="lg:col-span-3">
      <div className="grid gap-6">
        {careers.map((career, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900">{career.title}</h3>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded">
                {career.category}
              </span>
              <span className="ml-4">{career.salary}</span>
            </div>
            <p className="mt-4 text-gray-600">{career.description}</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
            >
              Learn More →
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}