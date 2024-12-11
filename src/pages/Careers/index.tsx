import { motion } from 'framer-motion';
import CareerList from './CareerList';
import CareerFilters from './CareerFilters';

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">Career Paths</h1>
          <p className="mt-4 text-xl text-gray-600">Explore various career opportunities and their requirements</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <CareerFilters />
          <CareerList />
        </div>
      </div>
    </div>
  );
}