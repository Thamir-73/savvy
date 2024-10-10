'use client'

import { useRef, useEffect } from 'react';
import { BorderBeam } from "@/components/magicui/border-beam";
import Marquee from '@/components/magicui/marquee';
import Particles from '@/components/magicui/particles';
import { motion, useInView, useAnimation } from 'framer-motion';
import PadelScoring from './components/PadelScoring';
import WordRotate from '@/components/magicui/word-rotate';
import NumberTicker from '@/components/magicui/number-ticker';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import BlurIn from '@/components/magicui/blur-in';
import { FaCalendarAlt } from 'react-icons/fa';
import { PiTennisBall } from "react-icons/pi";
import { GrNodes } from "react-icons/gr";
import MembershipSection from './components/MembershipSection';
import TrainersPreview from './components/TrainersPreview';
import { useLanguage } from './LanguageContext';

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } });
    }
  }, [isInView, controls]);

  const text = {
    ar: {
      title: 'عناية يمكنك الوثوق بها، بأفضل جودة وعروض',
      subtitle: ['ثقة', 'ابتسامة', 'عناية'],
      cta1: 'احجز الآن',
      cta2: 'خدماتنا',
      stats: {
        players: 'ابتسامة',
        courts: 'أطباء متخصصين',
        tournaments: 'فرع',
      }
    },
    en: {
      title: 'A Care You Can Trust',
      subtitle: ['Trust', 'Smile', 'Care'],
      cta1: 'Book Now',
      cta2: 'Our Services',
      stats: {
        players: 'Smiles',
        courts: 'Specialized Doctors',
        tournaments: 'Branches',
      }
    },
  };

  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#E6F3F7] via-white to-[#F0F8FF] dark:from-[#1A3A4A] dark:via-[#2C5364] dark:to-[#203A43] ${isRTL ? 'rtl' : 'ltr'}`}>
      <main className="container mx-auto px-4 py-5 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <motion.div 
          ref={contentRef}
          className="bg-white bg-opacity-70 dark:bg-[#1A3A4A] dark:bg-opacity-70 p-6 md:p-8 rounded-2xl shadow-2xl mb-12 min-h-[70vh] flex flex-col justify-between relative overflow-hidden border border-[#A0D2EB] dark:border-[#64B5F6]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            staticity={50}
            color="#A0D2EB" // Light ocean blue color
          />
          <BorderBeam />
          
         

          <div className="flex flex-col items-center justify-between z-10 mb-8 mt-4">
          <BlurIn
              word={
                <div className="text-center text-[#1A3A4A] dark:text-[#E6F3F7] w-full mb-8">  
                 <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 bg-gray-700 text-transparent bg-clip-text drop-shadow-lg leading-tight md:leading-snug lg:leading-normal">
                    {text[language].title}
                  </h1>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 text-[#A0D2EB]">
                    <WordRotate 
                      words={text[language].subtitle}
                      duration={2000}
                      framerProps={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -20 },
                        transition: { duration: 0.3, ease: "easeInOut" },
                      }}
                    />
                  </h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#A0D2EB] w-1/2 lg:w-1/6 px-6 py-3 text-lg md:text-xl rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center"
              >
                <AnimatedShinyText>{text[language].cta1}</AnimatedShinyText>
                <FaCalendarAlt className="ml-0 text-[#A0D2EB]" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#4A5BA9] w-1/2 lg:w-1/6 text-[#4A5BA9] px-6 py-3 text-lg md:text-xl rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center"
              >
                <AnimatedShinyText>{text[language].cta2}</AnimatedShinyText>
                <GrNodes className="ml-0 text-[#4A5BA9]" />
              </motion.button>
            </div>
              </div>
            }
className="w-full mb-2"
/>
            
            <BlurIn
              word={<PadelScoring />}
              className="w-full md:w-2/3 lg:w-1/2 mb-12"
            />
            
            <BlurIn
              word={
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 z-10 w-full">
                  <StatCard number={5000} text={text[language].stats.players} />
                  <StatCard number={20} text={text[language].stats.courts} />
                  <StatCard number={10} text={text[language].stats.tournaments} />
                </div>
              }
              className="w-full"
            />
          </div>
        </motion.div>

        <div className="mt-12">
          <Marquee className="bg-white bg-opacity-70 dark:bg-[#1A3A4A] dark:bg-opacity-70 rounded-lg p-4 shadow-lg" pauseOnHover={true}>
            <ReviewCard name="أحمد" text="تجربة رائعة!" />
            <ReviewCard name="فاطمة" text="أفضل عيادة  في الرياض" />
            <ReviewCard name="محمد" text="خدمة ممتازة وعالية الجودة" />
            <ReviewCard name="نورة" text="أنصح بشدة بهذا المكان" />
          </Marquee>
        </div>

        <BlurIn
          word={<MembershipSection language={language} />}
          className="w-full"
        />

        <BlurIn
          word={<TrainersPreview language={language} />}
          className="w-full mt-4"
        />
      </main>
    </div>
  );
}

// ... (StatCard and ReviewCard components remain the same)

function StatCard({ number, text }) {
  return (
    <div className="bg-[#A0D2EB] bg-opacity-20 dark:bg-opacity-30 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-2xl md:text-3xl font-bold text-[#1A3A4A] dark:text-[#E6F3F7]">
        <NumberTicker value={number} />+
      </h3>
      <p className="text-sm md:text-base text-[#1A3A4A] dark:text-[#A0D2EB] font-semibold mt-2">{text}</p>
    </div>
  );
}

function ReviewCard({ name, text }) {
  return (
    <div className="bg-[#A0D2EB] bg-opacity-20 dark:bg-[#64B5F6] dark:bg-opacity-10 p-3 rounded-lg mx-3 w-56 shadow-md hover:shadow-lg transition-shadow">
      <p className="text-sm text-[#1A3A4A] dark:text-[#E6F3F7]">{text}</p>
      <p className="text-xs text-[#64B5F6] dark:text-[#A0D2EB] mt-2">- {name}</p>
    </div>
  );
}