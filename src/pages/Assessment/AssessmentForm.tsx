import { motion } from 'framer-motion';
import { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "What type of work environment do you prefer?",
    options: ["Office", "Remote", "Outdoors", "Mixed"],
  },
  {
    id: 2,
    question: "Which skills do you enjoy using the most?",
    options: ["Technical", "Creative", "Analytical", "Interpersonal"],
  },
];

export default function AssessmentForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto"
    >
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          {questions[currentQuestion].question}
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {questions[currentQuestion].options.map((option) => (
            <motion.button
              key={option}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 text-left border rounded-lg hover:border-primary-500 hover:bg-primary-50"
            >
              {option}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}