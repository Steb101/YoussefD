import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShadowOverlay } from '../Components/hero/ShadowOverlay'
import { DirectionAwareHover } from '../Components/media/DirectionAwareHover'
import { Conversation, ConversationContent } from '../Components/chat/Conversation'
import { TextScramble } from '../Components/effects/TextScramble'
import { Button } from '../Components/ui/Button'
import { Input } from '../Components/ui/Input'
import { Mail, Download } from 'lucide-react'


const resumePdf = import.meta.env.BASE_URL + "images/Youssef-Dessouky.pdf";

export default function Home() {
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hello! This is a UI demo of a chat interface. Try sending messages below!' }]);
  const [input, setInput] = useState('');
  const [isHoveringResume, setIsHoveringResume] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: 'This is a demo response. In a real implementation, this would connect to a backend.' }]);
    }, 500);
  };

  const galleryImages = [
    { url: import.meta.env.BASE_URL + "images/image0.jpg", caption: "My Nosy Son" },
     { url: import.meta.env.BASE_URL + "images/image15.jpg", caption: "My Adorable Son" },
     { url: import.meta.env.BASE_URL + "images/IMG_4101.png", caption: "Solo Adventure from California -> New York -> Montreal, Canada" },
     { url: import.meta.env.BASE_URL + "images/mountain.png", caption: "Hiking Californian Mountains" },
     { url: import.meta.env.BASE_URL + "images/museum.png", caption: "Art" },
     { url: import.meta.env.BASE_URL + "images/pyramid.png", caption: "Home." }
   ];


  const contactLinks = [
    { icon: Mail, label: 'Email', value: 'dessouky2003@gmail.com', href: 'mailto:dessouky2003@gmail.com', color: 'text-red-400' }
  ];

  return (
    <div className="min-h-screen bg-neutral-950">

      <section id="home" className="h-screen w-full relative overflow-hidden">
  <ShadowOverlay
    animation={{ scale: 100, speed: 90 }}
    noise={{ opacity: 1, scale: 1.2 }}
    color="rgba(128, 128, 128, 1)"
  >
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8 text-center px-6"
      >
        <div className="space-y-6">
          <TextScramble
            as="h1"
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-50 tracking-tight"
            duration={1.2}
            speed={0.03}
          >
            Youssef Dessouky
          </TextScramble>

          <motion.img
            src={import.meta.env.BASE_URL + "images/IMG_1357.jpg"}
            alt="Youssef Dessouky"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover mx-auto border-4 border-neutral-100/20 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          <div className="space-y-2">
            <TextScramble
              as="p"
              className="text-xl md:text-2xl lg:text-3xl text-neutral-200 font-light tracking-wide"
              duration={1}
              speed={0.03}
              trigger={true}
            >
              Software Engineer
            </TextScramble>
            <TextScramble
              as="p"
              className="text-base md:text-lg text-neutral-300 font-light"
              duration={1}
              speed={0.03}
              trigger={true}
            >
              Computer Science, Informatics
            </TextScramble>
            <TextScramble
              as="p"
              className="text-sm md:text-base text-neutral-400"
              duration={1}
              speed={0.03}
              trigger={true}
            >
              Specializations: Health Informatics & HCI
            </TextScramble>
          </div>
        </div>
      </motion.div>
    </div>
  </ShadowOverlay>
</section>


      <section id="about" className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              <p>I'm a diverse, skilled, and passionate software engineer with both technical and non-technical skills, specifically in the intersection of technology and health. I've lived in both worlds of designing/building medical software/devices, as well as using medical software/devices.</p>
              <p>I will be graduating from the University of California, Irvine with a degree in Computer Science, Informatics with two specializations.</p>
              <p>I also have years of experience collaborating, managing, and succeeding with people .</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
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
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
      </section>

<section id="resume" className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
  <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
      onMouseEnter={() => setIsHoveringResume(true)}
      onMouseLeave={() => setIsHoveringResume(false)}
    >

      <div className="relative bg-neutral-900/50 rounded-2xl shadow-2xl overflow-hidden">
        <embed
          src={ (import.meta.env.BASE_URL + "images/Youssef-Dessouky.pdf") + "#toolbar=0&navpanes=0&scrollbar=0" }
          type="application/pdf"
          className="w-full"
          style={{ height: '1000px' }}
        />
      </div>

      {isHoveringResume && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-4 right-4 z-10"
        >
          <a href={import.meta.env.BASE_URL + "images/Youssef-Dessouky.pdf"} download>
            <Button size="lg" className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-full px-8 shadow-lg">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </a>
        </motion.div>
      )}
    </motion.div>
  </div>
</section>

      <section id="projects" className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
      </section>

      <section id="contact" className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              Get in Touch
            </TextScramble>
            <p className="text-xl text-neutral-300 max-w-3xl">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <TextScramble
                  as="h3"
                  className="text-3xl font-bold text-neutral-50 mb-6"
                  duration={0.8}
                  speed={0.03}
                  trigger={true}
                >
                  Let's Connect
                </TextScramble>
                <div className="space-y-4">
                  {contactLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-neutral-900/50 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all group"
                    >
                      <div className={`p-3 rounded-xl bg-neutral-800 group-hover:scale-110 transition-transform ${link.color}`}>
                        <link.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-400">{link.label}</p>
                        <p className="text-neutral-100 font-medium">{link.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <TextScramble
                  as="h3"
                  className="text-3xl font-bold text-neutral-50 mb-3"
                  duration={0.8}
                  speed={0.03}
                  trigger={true}
                >
                  Send Me a Message
                </TextScramble>
                <p className="text-sm text-neutral-400 mb-6">Coming Soon</p>
              </div>
              <div className="bg-neutral-900/50 rounded-2xl border border-neutral-800 overflow-hidden h-[500px] flex flex-col">
                <Conversation className="flex-1">
                  <ConversationContent>
                    {messages.map((message, index) => (
                      <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-4 rounded-2xl ${message.role === 'user' ? 'bg-neutral-800 text-neutral-100' : 'bg-neutral-800/50 text-neutral-200 border border-neutral-700'}`}>
                          {message.content}
                        </div>
                      </div>
                    ))}
                  </ConversationContent>
                </Conversation>
                <div className="p-4 border-t border-neutral-800 bg-neutral-900/80 backdrop-blur-sm">
                  <div className="flex gap-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Type a message..."
                      className="flex-1 bg-neutral-800 border-neutral-700 text-neutral-100 placeholder:text-neutral-500"
                    />
                    <Button
                      onClick={handleSend}
                      className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-full px-6"
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}