import { motion } from 'framer-motion';
import { TextScramble } from '../Components/effects/TextScramble';
import { DirectionAwareHover } from '../Components/media/DirectionAwareHover';

export default function About() {
  const galleryImages = [
    { url: '/images/image0.jpg', caption: 'My Nosy Son' },
    { url: '/images/image15.jpg', caption: 'My Adorable Son' },
    { url: '/images/IMG_4101.png', caption: 'Solo Adventure from California -> New York -> Montreal, Canada' },
    { url: '/images/mountain.png', caption: 'Hiking Californian Mountains' },
    { url: '/images/museum.png', caption: 'Art' },
    { url: '/images/pyramid.png', caption: 'Home.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 pt-32">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <TextScramble
            as="h2"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-50 mb-8 tracking-tight"
            duration={1}
            speed={0.03}
            trigger={true}
          >
            About Me
          </TextScramble>
          <div className="max-w-3xl space-y-6 text-lg text-neutral-300 leading-relaxed">
            <p>I'm a diverse and skilled Software Engineer with both technical and non-technical skills, specifically in the intersection of Technology and Health. I've lived in both worlds of designing/building medical software/devices, as well as using medical software/devices.</p>
            <p>I will be graduating from the University of California, Irvine with a degree in Computer Science, Informatics with two specializations.</p>
            <p>I also have years of experience collaborating, managing, and succeeding with people.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <TextScramble
            as="h3"
            className="text-3xl md:text-4xl font-bold text-neutral-50 mb-12"
            duration={0.8}
            speed={0.03}
            trigger={true}
          >
            Personal Life
          </TextScramble>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <DirectionAwareHover imageUrl={image.url}>
                  <p className="font-bold text-xl">{image.caption}</p>
                </DirectionAwareHover>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}