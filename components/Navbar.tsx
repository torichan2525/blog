import { motion } from 'framer-motion';
import { Search, Moon, Menu } from 'lucide-react';

export const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-white/70 dark:bg-black/70 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-black tracking-widest"
      >
        JOURNAL.
      </motion.div>
      <div className="hidden md:flex gap-8 items-center text-sm font-medium">
        {['Latest', 'Archive', 'About'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors">
            {item}
          </a>
        ))}
        <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-700 mx-2" />
        <button className="hover:scale-110 transition"><Search size={18} /></button>
        <button className="hover:scale-110 transition"><Moon size={18} /></button>
      </div>
      <button className="md:hidden"><Menu /></button>
    </div>git add .