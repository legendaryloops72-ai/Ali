import React, { useState } from 'react';
import { Smartphone, Layout, Moon, Shield, Sparkles, Zap, Check } from 'lucide-react';
import { AppConfig, Language } from '../types';

interface ScreenshotsSectionProps {
  config: AppConfig;
  lang: Language;
}

export const ScreenshotsSection: React.FC<ScreenshotsSectionProps> = ({ config, lang }) => {
  const isAr = lang === 'ar';
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const screens = [
    {
      titleAr: 'واجهة رئيسية منظمة',
      titleEn: 'Clean Dashboard',
      descAr: 'تصميم بسيط وسهل الوصول لكافة الأدوات اليومية بنقرة واحدة.',
      descEn: 'Minimalist dashboard providing one-tap access to all tools.',
      tagAr: 'الرئيسية',
      tagEn: 'Home UI',
      color: 'from-emerald-600 to-teal-600',
      icon: Layout
    },
    {
      titleAr: 'الوضع الليلي AMOLED',
      titleEn: 'AMOLED Dark Mode',
      descAr: 'تنسيق أسود فاحم مريح للعينين وموفر لاستهلاك طاقة الشاشة.',
      descEn: 'True black theme that reduces eye strain and battery usage.',
      tagAr: 'المظهر المظلم',
      tagEn: 'Dark Theme',
      color: 'from-slate-900 to-slate-950',
      icon: Moon
    },
    {
      titleAr: 'إحصائيات وتقارير الأداء',
      titleEn: 'Realtime Insights',
      descAr: 'رسوم بيانية ذكية توضح تقدمك وسجل نشاطك في التطبيق.',
      descEn: 'Interactive analytics tracking your daily progress and usage.',
      tagAr: 'الإحصائيات',
      tagEn: 'Analytics',
      color: 'from-teal-600 to-cyan-600',
      icon: Sparkles
    },
    {
      titleAr: 'إعدادات الخصوصية والأمان',
      titleEn: 'Privacy Controls',
      descAr: 'تحكم كامل في الأذونات والنسخ الاحتياطي وحماية البيانات.',
      descEn: 'Granular permissions and backup preferences for full security.',
      tagAr: 'الأمان',
      tagEn: 'Security',
      color: 'from-indigo-600 to-slate-800',
      icon: Shield
    }
  ];

  const currentScreen = screens[selectedCategory];

  return (
    <section id="screenshots" className="py-20 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
            <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isAr ? 'معاينة التطبيق' : 'App Visual Tour'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isAr ? 'نظرة عامة على واجهات التطبيق' : 'Explore the In-App Experience'}
          </h2>
          <p className="text-slate-600 text-base">
            {isAr 
              ? 'واجهات مدروسة بعناية لتناسب جميع أحجام الشاشات وأنظمة أندرويد الحديثة.'
              : 'Thoughtfully crafted layouts optimized for modern Android phones and tablets.'}
          </p>
        </div>

        {/* Category selector pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {screens.map((screen, index) => {
            const Icon = screen.icon;
            const isSelected = selectedCategory === index;
            return (
              <button
                key={index}
                id={`screen-tab-${index}`}
                onClick={() => setSelectedCategory(index)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} />
                <span>{isAr ? screen.tagAr : screen.tagEn}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Showcase View */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Details Column */}
          <div className="md:col-span-6 space-y-4 text-center md:text-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              {isAr ? currentScreen.tagAr : currentScreen.tagEn}
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              {isAr ? currentScreen.titleAr : currentScreen.titleEn}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isAr ? currentScreen.descAr : currentScreen.descEn}
            </p>

            <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{isAr ? 'متوافق مع أحدث إصدارات Material Design 3' : 'Compliant with Material Design 3'}</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{isAr ? 'استجابة لمسية وحركات ناعمة 120Hz' : 'Smooth 120Hz refresh animations'}</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{isAr ? 'دعم كامل للغة العربية والإنجليزية' : 'Native RTL Arabic & LTR English'}</span>
              </li>
            </ul>
          </div>

          {/* Device Showcase Canvas */}
          <div className="md:col-span-6 flex justify-center">
            <div className="w-[240px] sm:w-[260px] rounded-[36px] p-2.5 bg-slate-900 shadow-xl border-4 border-slate-800">
              <div className={`w-full aspect-[9/17] rounded-[28px] p-4 flex flex-col justify-between text-white bg-gradient-to-b ${currentScreen.color}`}>
                
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[10px] opacity-80">
                  <span>12:00</span>
                  <div className="flex items-center gap-1">
                    <span>100%</span>
                  </div>
                </div>

                {/* Simulated Screen Inner Content */}
                <div className="space-y-3 my-auto">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto shadow-xs">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-sm font-bold">{isAr ? currentScreen.titleAr : currentScreen.titleEn}</p>
                    <p className="text-[11px] opacity-80 leading-snug">{isAr ? currentScreen.descAr : currentScreen.descEn}</p>
                  </div>
                  <div className="bg-white/15 backdrop-blur-xs p-2.5 rounded-xl text-center text-xs font-semibold">
                    {isAr ? 'تطبيق Android رسمي' : 'Official Android Build'}
                  </div>
                </div>

                {/* Bottom Home Indicator */}
                <div className="w-16 h-1 bg-white/40 rounded-full mx-auto" />

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
