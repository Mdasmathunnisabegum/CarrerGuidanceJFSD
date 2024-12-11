import { motion } from 'framer-motion';
import AssessmentForm from './AssessmentForm';
import AssessmentProgress from './AssessmentProgress';

export default function Assessment() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">Career Assessment</h1>
          <p className="mt-4 text-xl text-gray-600">Discover your ideal career path through our comprehensive assessment</p>
        </motion.div>
        <AssessmentProgress />
        <AssessmentForm />
      </div>
    </div>
  );
}