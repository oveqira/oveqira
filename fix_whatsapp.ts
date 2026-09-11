import * as fs from 'fs';
let content = fs.readFileSync('src/components/layout/WhatsAppButton.tsx', 'utf-8');

if (!content.includes('framer-motion') && !content.includes('motion/react')) {
  content = `import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../../data';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = \`https://wa.me/\${siteConfig.contact.whatsapp.replace(/[^0-9+]/g, '')}?text=Hello%20OVEQIRA%2C%20I'd%20like%20to%20discuss%20a%20project.\`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with OVEQIRA on WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] group"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
    </motion.a>
  );
};
`;
  fs.writeFileSync('src/components/layout/WhatsAppButton.tsx', content);
}
