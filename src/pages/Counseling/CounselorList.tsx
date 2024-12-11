import { motion } from 'framer-motion';

const counselors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'Career Development',
    experience: '15+ years',
    availability: 'Mon, Wed, Fri',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Chen',
    specialty: 'Tech Careers',
    experience: '10+ years',
    availability: 'Tue, Thu',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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

export default function CounselorList() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="lg:col-span-2"
    >
      <div className="grid gap-6">
        {counselors.map((counselor, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center">
              <img
                className="h-16 w-16 rounded-full object-cover"
                src={counselor.image}
                alt={counselor.name}
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">{counselor.name}</h3>
                <p className="text-primary-600">{counselor.specialty}</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-500">Experience</span>
                <p className="font-medium text-gray-900">{counselor.experience}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Availability</span>
                <p className="font-medium text-gray-900">{counselor.availability}</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              Book Session
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}