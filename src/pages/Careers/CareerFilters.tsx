import { motion } from 'framer-motion';

const filters = {
  categories: ["Technology", "Healthcare", "Finance", "Education"],
  experience: ["Entry Level", "Mid Level", "Senior Level"],
  salary: ["$0-$50k", "$50k-$100k", "$100k+"],
};

export default function CareerFilters() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white p-6 rounded-lg shadow-lg h-fit"
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Category</h3>
          {filters.categories.map((category) => (
            <label key={category} className="flex items-center mt-2">
              <input type="checkbox" className="rounded border-gray-300 text-primary-600" />
              <span className="ml-2 text-gray-600">{category}</span>
            </label>
          ))}
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Experience Level</h3>
          {filters.experience.map((level) => (
            <label key={level} className="flex items-center mt-2">
              <input type="checkbox" className="rounded border-gray-300 text-primary-600" />
              <span className="ml-2 text-gray-600">{level}</span>
            </label>
          ))}
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Salary Range</h3>
          {filters.salary.map((range) => (
            <label key={range} className="flex items-center mt-2">
              <input type="checkbox" className="rounded border-gray-300 text-primary-600" />
              <span className="ml-2 text-gray-600">{range}</span>
            </label>
          ))}
        </div>
      </div>
    </motion.div>
  );
}