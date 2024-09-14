import { FaStar, FaCrown } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const MembershipSection = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const text = {
    ar: {
      title: 'العضويات',
      lite: 'لايت',
      premium: 'بريميوم',
      bestValue: 'أفضل قيمة',
      choosePlan: 'اختر الخطة',
      features: {
        lite: [
          "الوصول إلى الملاعب خلال ساعات الذروة",
          "تأجير المعدات الأساسية",
          "نظام الحجز عبر الإنترنت",
        ],
        premium: [
          "الوصول إلى الملاعب على مدار الساعة",
          "معدات متميزة مشمولة",
          "حجز ذو أولوية ومدرب شخصي",
        ],
      },
    },
    en: {
      title: 'Memberships',
      lite: 'Lite',
      premium: 'Premium',
      bestValue: 'BEST VALUE',
      choosePlan: 'Choose Plan',
      features: {
        lite: [
          "Access to courts during off-peak hours",
          "Basic equipment rental",
          "Online booking system",
        ],
        premium: [
          "24/7 court access",
          "Premium equipment included",
          "Priority booking and personal trainer",
        ],
      },
    },
  };

  const isRTL = language === 'ar';

  return (
    <div 
      ref={ref}
      className={`mt-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className={`bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 p-6 md:p-8 rounded-2xl shadow-2xl mb-12 relative overflow-hidden border border-blue-200 dark:border-blue-700 ${isRTL ? 'rtl' : 'ltr'}`}>
        <h2 className={`text-2xl md:text-3xl font-bold text-[#1C3F94] dark:text-blue-300 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>{text[language].title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <MembershipCard
            title={text[language].lite}
            icon={<FaStar className="text-[#8DC63F]" />}
            features={text[language].features.lite}
            choosePlan={text[language].choosePlan}
            isRTL={isRTL}
          />
          <MembershipCard
            title={text[language].premium}
            icon={<FaCrown className="text-[#1C3F94]" />}
            features={text[language].features.premium}
            isPremium
            bestValue={text[language].bestValue}
            choosePlan={text[language].choosePlan}
            isRTL={isRTL}
          />
        </div>
      </div>
    </div>
  );
};

const MembershipCard = ({ title, icon, features, isPremium, bestValue, choosePlan, isRTL }) => {
  return (
    <div className={`bg-[#1C3F94] bg-opacity-10 dark:bg-opacity-30 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow relative ${
      isPremium ? 'border-2 border-[#1C3F94] dark:border-blue-500' : ''
    }`}>
      {isPremium && (
        <div className={`absolute top-0 ${isRTL ? 'left-0 rounded-br' : 'right-0 rounded-bl'} bg-[#1C3F94] text-white text-xs font-bold px-2 py-1`}>
          {bestValue}
        </div>
      )}
      <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`${isRTL ? 'ml-3' : 'mr-3'} text-xl`}>{icon}</div>
        <h3 className="text-lg font-semibold text-[#1C3F94] dark:text-blue-300">{title}</h3>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className={`flex items-center text-sm text-gray-600 dark:text-gray-300 ${isRTL ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
            <div className={`w-1.5 h-1.5 bg-[#8DC63F] rounded-full ${isRTL ? 'ml-2' : 'mr-2'}`}></div>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button className={`w-full py-2 rounded-full text-sm font-semibold ${
          isPremium 
            ? 'bg-gradient-to-r from-[#1C3F94] to-[#8DC63F] text-white' 
            : 'bg-[#8DC63F] text-white'
        }`}>
          {choosePlan}
        </button>
      </div>
    </div>
  );
};

export default MembershipSection;