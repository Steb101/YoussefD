import { useState } from 'react';
import { motion } from 'framer-motion';
import { TextScramble } from '../Components/effects/TextScramble';
import { Conversation, ConversationContent } from '../Components/chat/Conversation';
import { Button } from '../Components/ui/Button';
import { Input } from '../Components/ui/Input';
import { Mail } from 'lucide-react';

export default function Contact() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! This is a UI demo of a chat interface. Try sending messages below!' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'This is a demo response. In a real implementation, this would connect to a backend.'
      }]);
    }, 500);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dessouky2003@gmail.com',
      href: 'mailto:dessouky2003@gmail.com',
      color: 'text-red-400'
    }
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
            Get in Touch
          </TextScramble>
          <p className="text-xl text-neutral-300 max-w-3xl">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
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
                    animate={{ opacity: 1, x: 0 }}
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
            animate={{ opacity: 1, x: 0 }}
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
                      <div className={`max-w-[80%] p-4 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-neutral-800 text-neutral-100'
                          : 'bg-neutral-800/50 text-neutral-200 border border-neutral-700'
                      }`}>
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
    </div>
  );
}