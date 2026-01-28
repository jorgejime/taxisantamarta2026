import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="#" 
      className="fixed bottom-24 right-4 md:bottom-28 md:right-8 z-50 flex items-center gap-2 bg-[#FFD700] hover:bg-yellow-400 text-black font-bold py-3 px-5 rounded-full shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="w-6 h-6 fill-transparent stroke-black stroke-[2]" />
      <span>WhatsApp Booking</span>
    </a>
  );
};

export default WhatsAppButton;