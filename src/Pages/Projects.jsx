import { motion } from 'framer-motion';
import { TextScramble } from '../Components/effects/TextScramble';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TextScramble
            as="h2"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-50 mb-8 tracking-tight"
            duration={1}
            speed={0.03}
            trigger={true}
          >
            Projects
          </TextScramble>
          <TextScramble
            as="p"
            className="text-3xl md:text-4xl text-neutral-400 font-light"
            duration={0.8}
            speed={0.03}
            trigger={true}
          >
            Coming soon
          </TextScramble>
        </motion.div>
      </div>
    </div>
  );
}