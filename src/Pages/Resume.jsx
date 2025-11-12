import { useState } from 'react';
import { motion } from 'framer-motion';
import { TextScramble } from '../Components/effects/TextScramble';
import { Button } from '../Components/ui/Button';
import { Download } from 'lucide-react';

const resumePdf = "/images/Youssef%20Dessouky%20.pdf";

export default function Resume() {
  const [isHoveringResume, setIsHoveringResume] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 pt-32">
      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <TextScramble
            as="h2"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-50 mb-8 tracking-tight"
            duration={1}
            speed={0.03}
            trigger={true}
          >
            Resume
          </TextScramble>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-neutral-900/50 rounded-2xl shadow-2xl overflow-hidden border border-neutral-800"
          onMouseEnter={() => setIsHoveringResume(true)}
          onMouseLeave={() => setIsHoveringResume(false)}
        >
          <object
            data="/images/Youssef-Dessouky.pdf"
            type="application/pdf"
            className="w-full"
            style={{ height: '1000px' }}
          >
            <div className="flex flex-col items-center justify-center p-8 text-center" style={{ height: '1000px' }}>
              <p className="text-neutral-400 mb-6 text-lg">Your browser doesn't support embedded PDFs.</p>
              <a href={resumePdf} download>
                <Button size="lg" className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-full px-8">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </div>
          </object>
          {isHoveringResume && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-4 right-4 z-10"
            >
              <a href="/images/Youssef Dessouky .pdf" download>
                <Button size="lg" className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-full px-8 shadow-lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}