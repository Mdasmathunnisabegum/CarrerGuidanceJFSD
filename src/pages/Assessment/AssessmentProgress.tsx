import { motion } from 'framer-motion';

export default function AssessmentProgress() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="relative">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-100">
          <div
            style={{ width: "30%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"
          />
        </div>
        <div className="text-right">
          <span className="text-sm font-semibold inline-block text-primary-600">
            30% Complete
          </span>
        </div>
      </div>
    </motion.div>
  );
}