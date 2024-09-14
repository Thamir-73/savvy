'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../LanguageContext';

export default function Navbar() {
 const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`bg-white bg-opacity-70 backdrop-blur-md text-blue-600 border-b border-blue-200 shadow-sm`}>
      <div className="container px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
      <Image
            src="/dfj.jpg" // Replace with your logo path
            alt="Padel Masters Logo"
            width={40} // Adjust as needed
            height={40} // Adjust as needed
            className="object-contain"
          />
        <h2 className="font-bold ml-2 text-xl">Padel Masters</h2></div>
        <div className="space-x-4 flex items-center">

          <button 
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className={`px-3 py-1 rounded-full ${
              scrolled 
                ? 'bg-blue-500 text-white hover:bg-blue-600' 
                : 'bg-white text-blue-500 hover:bg-blue-100'
            } transition-colors`}
          >
            {language === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>
      </div>
    </nav>
  );
}