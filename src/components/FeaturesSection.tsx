import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  WifiOff, 
  Moon, 
  Cloud, 
  Sparkles,
  Smartphone,
  CheckCircle2
} from 'lucide-react';
import { AppConfig, Language } from '../types';

interface FeaturesSectionProps {
  config: AppConfig;
  lang: Language;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ config, lang }) => {
  const isAr = lang === 'ar';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'WifiOff':
        return <WifiOff className="w-6 h-6 text-teal-600" />;
      case 'Moon':
        return <Moon className="w-6 h-6 text-indigo-500" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-sky-500" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-rose-500" />;
    }
  };

  return (
    <section id="features" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isAr ? 'ميزات وتجربة الاستخدام' : 'App Features & Capabilities'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isAr ? 'مصمم ليمنحك أفضل تجربة على هاتفك' : 'Engineered for Exceptional Android Experience'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {isAr 
              ? 'مجموعة متكاملة من الأدوات والخصائص تم بناؤها لتلبي أعلى معايير الجودة والسرعة والأمان.' 
              : 'A complete suite of features engineered to meet modern Android standards for speed, security, and intuitive design.'}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {config.features.map((feature, idx) => {
            const title = isAr ? feature.titleAr : feature.titleEn;
            const desc = isAr ? feature.descriptionAr : feature.descriptionEn;
            const badge = isAr ? feature.badgeAr : feature.badgeEn;

            return (
              <div
                key={feature.id || idx}
                id={`feature-card-${idx}`}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all hover:-translate-y-1 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(feature.iconName)}
                    </div>
                    {badge && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isAr ? 'ميزة متوفرة بالكامل' : 'Included in App'}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
